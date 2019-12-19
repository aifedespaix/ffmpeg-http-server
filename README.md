# Ffmeg Http Server
Using nestjs, Express and ffmpeg

## How to use it
### 1 ) Fork Project
```bash
$ git clone [...]
$ cd [...]
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

## Extract config

- Setting port : change in '.env' file
