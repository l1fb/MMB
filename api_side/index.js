const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const apiApp = express();
const port = 3000;

apiApp.use(bodyParser.urlencoded({ extended: true }));

apiApp.listen(process.env.PORT || port, () => console.log("api server listening to " + port));