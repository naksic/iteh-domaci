FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm config set fetch-retries 5 \
 && npm config set fetch-retry-mintimeout 20000 \
 && npm config set fetch-timeout 600000 \
 && npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]