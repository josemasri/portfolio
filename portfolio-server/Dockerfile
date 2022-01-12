FROM node:16-alpine

RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .

EXPOSE 1337