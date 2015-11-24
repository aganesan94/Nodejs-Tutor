'use strict';

var connect = require("connect");
var port = 3333;
var app = connect();

var printRequestParams = function(req, resp, next){
    console.log("Printing Request parameters");
    next();
}

var print = function (req,res){
    res.setHeader("Content-Type","text/plain");
    res.end("Hello World");
    console.log("Send Response");
}

app.use(printRequestParams);
app.use(print);
app.listen(port);
console.log("Server started in port " + port);