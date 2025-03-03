# Use the official Node.js image to build the React app
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server (Nginx) to serve the built React app
FROM nginx:alpine

# Copy the built files to Nginx's serving directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
