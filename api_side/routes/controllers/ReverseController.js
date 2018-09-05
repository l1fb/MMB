const reverseCommands = {
    reverseStr: ((req, res) => {
        const originStr = req.body.data;
        let reversedStr = "";

        //O(n) time complexity
        for (let i = originStr.length - 1; i >= 0; i--) {
            reversedStr += originStr[i];
        }
        res.status(201).send(reversedStr);
    })
}

module.exports = reverseCommands;