FROM aifedespaix/node_ffmpeg

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build
ENTRYPOINT yarn start:prod
