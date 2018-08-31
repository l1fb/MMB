const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const clientApp = express();
const port = 5000;

clientApp.use(bodyParser.urlencoded({ extended: true }));
clientApp.use(express.static(path.join(__dirname, "/client/public")));

clientApp.listen(process.env.PORT || port, () => console.log("client server listening to " + port));