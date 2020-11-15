FROM node:13

WORKDIR /usr/app

RUN npm install -g ts-node typescript typeorm

COPY package*.json /usr/app

RUN yarn

COPY . /usr/app

EXPOSE 3000

CMD [ "yarn", "start:dev"]
