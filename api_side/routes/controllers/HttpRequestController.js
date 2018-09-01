const axios = require("axios");
const urlHelper = require('url');


const HttpRequestController = {
    getURL: ((req, res) => {
        let url = req.query;
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
        let configObj = {};
        //mvp+
        //dynamic search parameter functionality
        // let parsedBody = JSON.parse(req.body);
        //parse through the req.body
        // for(let key in parsedBody) {
        //     //extract the key that is not url
        //     if(key !== 'url') {
        //         //set it as a new parameter
        //         //[key] = key.value
        //         configObj[key] = parsedBody[key];
        //     };
        // };
        axios.post(reqBodyUrl, configObj)
            .then((result) => {
                console.log(result.data)
                res.status(201).send(result.data);
            })
            .catch((err) => {
                console.log('err', err)
                res.status(404).send(err);
        })
    })
};

module.exports = HttpRequestController;