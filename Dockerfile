  
FROM nromero125/dokku-php7.3

COPY nginx/default /etc/nginx/sites-available

RUN mkdir frontend

COPY /frontend/package.json /frontend
WORKDIR /app/frontend

COPY ./frontend /app/frontend
RUN npm install
RUN npm run build
RUN mv /app/frontend/build /app/public

WORKDIR /app
RUN mkdir backend
WORKDIR /app/backend

COPY ./backend .
RUN npm install

RUN npm install -g pm2
RUN pm2 start /bin/www