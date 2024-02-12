# using official Node.js image as base image for building React app
FROM node:latest as build

# set the working directory in the container
WORKDIR /app/frontend

# copy package.json and package-lock.json to container
COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the frontend code to container
COPY . .

# build React app
RUN npm run build

# # using NGINX as base image for serving React app
# FROM nginx:latest

# # copy built React app to NGINX html directory
# COPY --from=build /app/frontend/build /usr/share/nginx/html

# expose port 3000
EXPOSE 3000

CMD ["npm", "start"]