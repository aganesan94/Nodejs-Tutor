'use strict';
exports.render = function(req, res){
    console.log("Executing the express controller");
    res.send("Hello");
}