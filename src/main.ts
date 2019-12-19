import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);

  // tslint:disable:no-console
  console.log(`ffmpeg API run on http://localhost:${process.env.PORT}`);
}
bootstrap();
