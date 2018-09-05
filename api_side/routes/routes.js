const express = require('express');
const router = express.Router();

const URLRequestController = require('./controllers/URLRequestController.js');
const ReverseController = require('./controllers/ReverseController.js');

router.route('/reverse')
    .post(ReverseController.reverseStr);

router.route('/url')
    .get(URLRequestController.getURL)
    .post(URLRequestController.postURL)

module.exports = router;