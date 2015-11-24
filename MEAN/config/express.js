/**
 * Created by AGanesan on 11/24/2015.
 */

'use strict';
var express = require('express');
module.exports = function() {
    var app = express();
    require('../app/routes/index.server.routes.js')(app);
    console.log("Executing the express configuration");
    return app;
};