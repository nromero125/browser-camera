  
FROM node:alpine as builder

WORKDIR /app
COPY /frontend/package.json .
RUN npm install
COPY ./frontend .
RUN npm run build
RUN rm package.json && rm -R frontend && rm -R node_modules
COPY /backend/package.json .
RUN npm install
COPY ./backend ./backend
COPY ./node_modules ./backend

FROM nginx
RUN apt-get update && apt-get install -y nodejs
EXPOSE 80
EXPOSE 5000
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/backend /usr/share/nginx/html/backend
RUN node /usr/share/nginx/html/backend/bin/www
