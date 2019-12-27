  
FROM node:alpine as builder

WORKDIR /app
RUN mkdir frontend

COPY /frontend/package.json /frontend
WORKDIR /app/frontend

COPY ./frontend /app/frontend
RUN npm install
RUN npm run build

WORKDIR /app
RUN mkdir backend
#COPY /backend/package.json /backend
COPY ./backend /app/backend
RUN npm install


FROM nginx
EXPOSE 80
COPY --from=builder /app/frontend/build /usr/share/nginx/html

FROM node:alpine
EXPOSE 5000
COPY --from=builder /app/backend /app
CMD ["npm", "start"]
