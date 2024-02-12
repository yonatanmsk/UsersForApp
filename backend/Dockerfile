# using Node.js image as base image
FROM node:latest

# set working directory in the container
WORKDIR /app/backend

COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the backend code to container
COPY . .

EXPOSE 4000

# run the backend server
CMD ["node", "index.js"]
