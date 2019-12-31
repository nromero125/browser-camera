const express = require("express");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const pdf = require("./routes/pdf");
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));
app.use(cookieParser());
app.use(helmet());

app.use(pdf);

module.exports = app;
