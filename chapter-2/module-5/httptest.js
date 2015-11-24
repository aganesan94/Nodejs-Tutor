'use strict';

var connect = require("connect");
var port = 3333;
var app = connect();

var printRequestParams = function(req, resp, next){
    console.log("Printing Request parameters");
    next();
}

var print1 = function (req,res){
    res.setHeader("Content-Type","text/plain");
    res.end("Print 1");
    console.log("Print 1");
}

var print2 = function (req,res){
    res.setHeader("Content-Type","text/plain");
    res.end("Print 2");
    console.log("Print 2");
}


app.use(printRequestParams);
app.use("/print1", print1);
app.use("/print2", print2);
app.listen(port);
console.log("Server started in port " + port);