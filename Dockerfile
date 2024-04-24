FROM node:latest

WORKDIR  /home/node/app

COPY  . .

RUN npm install

RUN npm run build

EXPOSE 3002
EXPOSE 3008

CMD ["npm","run","start:prod"]