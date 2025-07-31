 # Base image
FROM node:18
 # Create app directory
WORKDIR /app
# Install dependencies
COPY package*.json ./
RUN npm install
 # Copy app files
COPY . .
 # Build the app
RUN npm run build
 # Run the app
EXPOSE 3000
CMD ["npm", "run", "start"]
