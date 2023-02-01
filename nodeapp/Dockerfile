FROM node:18 as build
WORKDIR /usr/app
COPY package.json .
RUN npm install
EXPOSE 3000
COPY . .
COPY . .
CMD ["node", "app.js"]