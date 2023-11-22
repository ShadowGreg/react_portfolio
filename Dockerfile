# Use the official Node.js image as the base
FROM node:10-alpine as builder

# Set the working directory inside the container
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./


# Install dependencies
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent


# Copy the entire application to the working directory
COPY . ./

# Build the React application
RUN npm run build

# Second build stage for Nginx
FROM nginx:stable-alpine

# Copy the build results from the first stage to the nginx working directory
COPY --from=builder /app/build /usr/share/nginx/html

# Open port 480 for incoming connections
EXPOSE 480

# The last line of the file is used to start NGINX
CMD ["nginx", "-g", "daemon off;"]