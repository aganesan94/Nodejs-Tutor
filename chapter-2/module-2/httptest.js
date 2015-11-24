'use strict';

var connect = require("connect");
var port = 3333;
var app = connect();

var print = function (req,res){
    res.setHeader("Content-Type","text/plain");
    res.end("Hello World");
}

app.use(print);
app.listen(port);
console.log("Server started in port " + port);