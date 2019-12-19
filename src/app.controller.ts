import {Body, Controller, Post, Res, UploadedFile, UseInterceptors} from '@nestjs/common';
import {AppService} from './app.service';
import {FileInterceptor} from '@nestjs/platform-express';
import {SliceDto} from './slice.dto';
import {File} from './file';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    dest: 'tmp',
  }))
  async optimize(
    @UploadedFile() file: File,
    @Body() slice: SliceDto,
    @Res() res,
  ) {
    const start = slice.start ? this.appService.sec2time(slice.start) : undefined;
    const duration = slice.duration ? this.appService.sec2time(slice.duration) : undefined;
    const path = await this.appService.optimiseFile(file.path, start, duration);
    res.sendFile(path, {root: './'});

    return true;
  }
}
