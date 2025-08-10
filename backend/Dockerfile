FROM node:18-alpine
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./
RUN npm ci --only=production

# Copy the rest of the application
COPY . .

EXPOSE 5000
CMD ["npm", "start"]
