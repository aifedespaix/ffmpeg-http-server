import {Injectable} from '@nestjs/common';
import {exec} from 'child_process';
import * as fs from 'fs';

@Injectable()
export class AppService {

  sec2time(timeInSeconds: string) {
    const pad = (num, size) => ('000' + num).slice(size * -1);
    const time = parseFloat(timeInSeconds);
    const hours = Math.floor(time / 60 / 60);
    const minutes = Math.floor(time / 60) % 60;
    const seconds = Math.floor(time - minutes * 60);
    const milliseconds = time.toFixed(3).slice(-3);

    return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}.${pad(milliseconds, 3)}`;
  }

  async optimiseFile(path: string, from: string, duration: string) {
    return new Promise<string>((resolve, reject) => {
      const fromOption = from ? `-ss ${from}` : '';
      const durationOption = duration ? `-t ${duration}` : '';
      const newFilePath = `${path}.mp3`;
      const command = `ffmpeg -i ${path} -map 0:a:0 -b:a 96k ${fromOption} ${durationOption} ${newFilePath}`;
      exec(command, (err, stdout, stderr) => {
        if (err) {
          reject(err);
        } else {
          fs.unlinkSync(path); // remove tmp file object
          resolve(newFilePath);
        }
      });
    });
  }
}
