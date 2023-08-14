FROM node:18

WORKDIR /

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

CMD [ "yarn", "start:dev" ]