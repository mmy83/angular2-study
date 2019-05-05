FROM node:8

LABEL authors="mmy83 <mmy83@126.com>"

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm config set registry https://registry.npm.taobao.org \
    && npm i

COPY . .

RUN ng build --prod
