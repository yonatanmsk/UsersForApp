# using Node.js image as base image
FROM node:latest as build

# set working directory in the container
WORKDIR /app/frontend

COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the frontend code to container
COPY . .

# build React app
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
