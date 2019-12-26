const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const users = require('./routes/users');
const pdf = require('./routes/pdf');
const app = express();

app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
app.use(cookieParser());
app.use(helmet());

app.use('/api/v1/users', users);
app.use(pdf );

module.exports = app;
