const axios = require("axios");
const urlHelper = require('url');

const HttpRequestController = {
    getURL: ((req, res) => {
        const url = urlHelper.parse(req.body.url);
        axios.get(url)
            .then((result) => {
                res.status(200).send(result.data);
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }),
    postURL: ((req, res) => {
        
        axios.post('https://reqres.in/api/users')
            .then((result) => {
                res.status(200).json(result.data);
            })
            .catch((err) => {
                res.status(404).send(err);
        })
    })
};

module.exports = HttpRequestController;