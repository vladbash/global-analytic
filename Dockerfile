FROM node:latest

ENV ANALYTIC_KEY=""

COPY package-lock.json /app/
COPY package.json /app/

WORKDIR /app/

RUN npm i

COPY . /app/

CMD ["node", "server.js"]