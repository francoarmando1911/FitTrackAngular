# FROM node:20 AS build
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build --configuration production

# Etapa final: Servir estáticos con Nginx
FROM nginx:alpine
COPY ./dist/ /usr/share/nginx/html
EXPOSE 80
