const reverseCommands = {
    reverseStr: ((req, res) => {
        const originStr = req.body.str;
        let reversedStr = "";

        //O(n) time complexity
        for (let i = originStr.length - 1; i >= 0; i--) {
            reversedStr += originStr[i];
        }
        res.send(201, reversedStr);
    })
}

module.exports = reverseCommands;