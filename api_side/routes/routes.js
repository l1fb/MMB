const express = require('express');
const router = express.Router();

const HttpRequestController = require('./controllers/HttpRequestController.js');
const ReverseController = require('./controllers/ReverseController.js');

router.route('/reverse')
    .post(ReverseController.reverseStr);

router.route('/url')
    .get(HttpRequestController.getURL)
    .post(HttpRequestController.postURL)

module.exports = router;