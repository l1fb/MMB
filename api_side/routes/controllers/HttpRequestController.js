const axios = require("axios");

const HttpRequestController = {
    getURL: ((req, res) => {
        //mvp+
        //dynamic query parameter search
        
        //mvp - get request to the given url
        let url = req.query.url;
        axios.get(url)
            .then((result) => {
                let load = JSON.stringify(result.data)
                res.status(200).send(load);
            })
            .catch((err) => {
                res.status(404).send(err);
            })
    }),
    postURL: ((req, res) => {
        let reqBodyUrl = req.body.data.url;
        // console.log(req.body)
        //mvp+
        //dynamic search parameter functionality
        let configObj = {};
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
        //mvp - posts request send back to the user
        axios.post(reqBodyUrl, configObj)
            .then((result) => {
                let load = JSON.stringify(result.data);
                res.status(201).send(load);
            })
            .catch((err) => {
                res.status(404).send(err);
        })
    })
};

module.exports = HttpRequestController;