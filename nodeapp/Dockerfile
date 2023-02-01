FROM node:18 as build
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node","start"]