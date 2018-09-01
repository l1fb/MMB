const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routes.js");

const apiApp = express();
const port = 3000;

apiApp.use(bodyParser.urlencoded({ extended: true }));
apiApp.use('/api', router);
apiApp.listen(process.env.PORT || port, () => console.log("api server listening to " + port));