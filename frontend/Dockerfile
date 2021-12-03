FROM node:16-alpine

WORKDIR /usr/src/app/frontend
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

CMD [ "yarn", "start" ]