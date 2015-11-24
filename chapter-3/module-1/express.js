/**
 * Created by AGanesan on 11/24/2015.
 */
'use strict';

var express = require("express");
var app = express();
var port = 3333;

var expressMessage = function(req, res){
    res.send("Hello Express!!");
};
app.use("/",expressMessage);
app.listen(port);
console.log("Server Started successfully on port " + port);