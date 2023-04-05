# base image
FROM node:16-alpine

# set working directory
WORKDIR /app

COPY ./package*.json ./

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies

RUN npm install

# start app
CMD ["npm", "start"]