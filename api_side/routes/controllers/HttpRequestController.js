const axios = require("axios");

const HttpRequestController = {
    getURL: ((req, res) => {
        const url = req.body.url;
        axios.get(`${url}`)
            .then((data) => {
                res.send(200, data);
            })
    }),
    postURL: ((req, res) => {
        const url = req.body.url;
        axios.post(`${url}`)
            .then((data) => {
                res.send(200, data)
            })
    })
}

module.exports = HttpRequestController;