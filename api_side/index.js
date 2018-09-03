const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routes.js");
const cors = require("cors");
const corsOption = {
    origin: 'http://localhost:5000',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type',
    optionsSuccessStatus: 200
}

const apiApp = express();
const port = 3000;


apiApp.use(cors(corsOption));
apiApp.use(bodyParser.urlencoded({ extended: true }));
apiApp.use(bodyParser.json());

apiApp.use('/api', router);
apiApp.listen(process.env.PORT || port, () => console.log("api server listening to " + port));