FROM node:latest
WORKDIR /app
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install && npm cache clean --force

ADD . /app
# RUN npm run start:dev
# CMD ["npm", "run", "start:dev"]


EXPOSE 3000

