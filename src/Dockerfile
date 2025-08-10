# Stage 1: Build React app
FROM node:18-alpine as build
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
