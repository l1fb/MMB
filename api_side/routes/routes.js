const express = require('express');
const router = express.Router();

const HttpRequestController = require('./controllers/profileCtrl.js');
const ReverseController = require('./controllers/userCtrl.js');

router.route('/reverse')
    .post(ReverseController.reverseStr);

router.route('/http')
    .get(HttpRequestController.getURL)
    .post(HttpRequestController.postURL)

module.exports = router;