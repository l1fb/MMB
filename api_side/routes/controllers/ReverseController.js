const reverseCommands = {
    reverseStr: ((req, res) => {
        console.log('what is in here?', req.body)
        res.send(202, req.body)
    })
}

module.exports = reverseCommands;