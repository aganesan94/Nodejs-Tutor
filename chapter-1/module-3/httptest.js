/**
 * Created by AGanesan on 11/24/2015.
 * The following code to be used to test http connections
 */
'use strict';
var http = require("http");
var port = 3333;
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello World");
}).listen(port);
console.log("Running on Port " + port);