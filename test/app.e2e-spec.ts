import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';
import * as request from 'supertest';
import {AppModule} from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST) optimize file', () => {
    return request(app.getHttpServer())
      .post('/')
      .attach('file', './test/audio/test.mp3')
      .expect(201);
  });

  it('/ (POST) optimize file with slice', () => {
    return request(app.getHttpServer())
      .post('/')
      .attach('file', './test/audio/test.mp3')
      .field( 'start', '1' )
      .field( 'duration', '1.5' )
      .expect(201);
  });
});
