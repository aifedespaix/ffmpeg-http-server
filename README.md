# Ffmeg Http Server
Using nestjs, Express and ffmpeg

## Docker image : 
https://hub.docker.com/r/aifedespaix/ffmpeg-http-server
```bash
docker pull aifedespaix/ffmpeg-http-server
```

## How to use it
### 1 ) Get Project
```bash
$ git clone https://github.com/aifedespaix/ffmpeg-http-server.git
$ cd ffmpeg-http-server
```
### 2 ) Run server
#### a) Via docker-compose
```bash
$ docker-compose up -d
```
#### b) Via nodejs
```bash
$ yarn build
$ yarn start:prod
```

### 3 ) Request server
- Method : POST 
- Server : localhost:8081 / your domain
- Route : /
- Params : 
    - file : an audio file (required)
    - start : string : starting time in second (optional)
    - duration : string : duration in second (optional)
 
Exemple :
```js
request(app.getHttpServer())
  .post('/')
  .attach('file', './test/audio/test.mp3')
  .field( 'start', '1' )
  .field( 'duration', '1.5' )
  .expect(201)
```

## Extra config

- Setting port : change in .env file

- Use directy docker image with a docker-compose.yml :
```yml
version: '3.7'

services:
  ffmpeg-http-server:
    container_name: ffmpeg-http-server
    image: aifedespaix/ffmpeg-http-server
    ports: 
      - 8081
```
