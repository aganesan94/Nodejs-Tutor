/**
 * Created by AGanesan on 11/24/2015.
 */
'use strict';
var express = require('./config/express');
var app = express();
app.listen(3333);
//module.exports = app;
console.log('Server running at http://localhost:3333/');
