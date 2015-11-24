'use strict';

var connect = require("connect");
var port = 3333;
var app = connect();
app.listen(port);
console.log("Server started in port " + port);