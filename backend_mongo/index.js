const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const connection = require("./database/connection");
const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
const app = express();
const port = "8080";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(allowCrossDomain);
app.use(routes);

connection();
app.listen(port, () => console.log("running on port: " + port));
