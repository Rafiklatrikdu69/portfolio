FROM node:latest
WORKDIR /app
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install && npm cache clean --force
RUN npm install @nestjs/common && npm install @nestjs/core

RUN npm install @nestjs/mapped-types && npm i --save @nestjs/swagger 

RUN npm install --save @nestjs/typeorm typeorm mysql2
ADD . /app
# RUN npm run start:dev
# CMD ["npm", "run", "start:dev"]


EXPOSE 3000

