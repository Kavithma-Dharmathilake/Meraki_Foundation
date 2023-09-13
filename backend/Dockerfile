# Use an official Node.js runtime as the base image
FROM node:18
# Set the working directory in the container
WORKDIR /appdock

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app is running on
EXPOSE 5000

# Start your Node.js application
CMD ["npm", "start"]