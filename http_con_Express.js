const express = require('express');
const colors = require('colors');

const server = express();

server.get('/',function (req,res) {
    res.send(req.ip.toString());
    res.end;   
})

server.listen(3000,function () {
    console.log('Puerto 3000'.red);
})