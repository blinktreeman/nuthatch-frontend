FROM node:20.11.1-alpine
LABEL authors="Eugene Elantsev"
MAINTAINER blinktreeman@gmail.com

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli
RUN npm install

COPY . /usr/src/app

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
