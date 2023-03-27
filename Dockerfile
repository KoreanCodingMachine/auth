#FROM node:16-alpine
#
#WORKDIR /app
#
#COPY . .
#
#RUN npm install
#
#RUN npm run start
#
#EXPOSE 3000
#
#ENV NODE_ENV development
#
#CMD ["npm", "start"]
#

FROM node:14.17.6-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install

CMD ["npm", "start"]