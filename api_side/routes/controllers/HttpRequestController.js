const axios = require("axios");
const urlHelper = require('url');


const HttpRequestController = {
    getURL: ((req, res) => {
        let url = urlHelper.parse(req.body.url);
        axios.get(url)
            .then((result) => {
                res.status(200).send(result.data);
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }),
    postURL: ((req, res) => {
        
        let reqBodyUrl = req.body.url;
        axios.post(reqBodyUrl)
            .then((result) => {
                res.status(200).send(result.data);
            })
            .catch((err) => {
                console.log('err', err)
                res.status(404).send(err);
        })
    })
};

module.exports = HttpRequestController;