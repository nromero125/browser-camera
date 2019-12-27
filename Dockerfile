  
FROM node:alpine as builder

WORKDIR /app
COPY /frontend/package.json .
RUN npm install
COPY ./frontend .
RUN npm run build
COPY /backend/package.json .
RUN npm install
COPY ./backend .

FROM nginx
EXPOSE 80
EXPOSE 5000
COPY --from=builder /app/build /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html/backend
COPY --from=builder /app/backend /usr/share/nginx/html/backend
WORKDIR /usr/share/nginx/html/backend
CMD [ "npm", "start" ]
