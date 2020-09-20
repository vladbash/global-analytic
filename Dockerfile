FROM node:latest

ENV ANALYTIC_KEY=""

COPY package-lock.json /app/
COPY package.json /app/

WORKDIR /app/

RUN npm i

COPY . /app/

EXPOSE 80
EXPOSE 50051

CMD ["node", "server.js"]