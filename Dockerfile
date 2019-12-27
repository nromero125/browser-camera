  
FROM node:alpine as builder

WORKDIR /app
RUN mkdir frontend
RUN ls
COPY /frontend/package.json /frontend
WORKDIR /app/frontend
RUN ls
RUN npm install
COPY ./frontend /app/frontend
RUN ls
RUN npm run build

WORKDIR /app
RUN mkdir backend
COPY /backend/package.json ./backend
RUN npm install
COPY ./backend /app/backend

FROM nginx
RUN apt-get update && apt-get install -y nodejs
EXPOSE 80
EXPOSE 5000
COPY --from=builder /app/frontend/build /usr/share/nginx/html
COPY --from=builder /app/backend /usr/share/nginx/html/backend
WORKDIR /usr/share/nginx/html/backend
CMD [ "npm", "start" ]
