/**
 * Created by AGanesan on 11/24/2015.
 * The following code to be used to test http connections
 */

var http = require("http");
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello World");
}).listen("3333");