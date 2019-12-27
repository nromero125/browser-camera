  
FROM node:alpine as builder

WORKDIR /app
RUN mkdir frontend

COPY /frontend/package.json /frontend
WORKDIR /app/frontend

COPY ./frontend /app/frontend
RUN npm install
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/frontend/build /usr/share/nginx/html

FROM node:alpine
WORKDIR /app
COPY ./backend .
RUN npm install
EXPOSE 5000

CMD ["npm", "start"]
