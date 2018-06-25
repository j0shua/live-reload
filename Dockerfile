FROM node:8-slim

RUN mkdir -p /opt/app
RUN npm install -g nodemon

WORKDIR /opt/app
COPY package-lock.json .
RUN npm install

COPY index.js .

EXPOSE 3000

CMD [ "nodemon", "index.js"]