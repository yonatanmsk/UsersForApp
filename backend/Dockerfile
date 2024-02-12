# using official Node.js image as base image
FROM node:latest

# set the working directory in the container
WORKDIR /app/backend

# copy package.json and package-lock.json to container
COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the backend code to container
COPY . .

# expose port 4000
EXPOSE 4000

# run the backend server
CMD ["node", "index.js"]