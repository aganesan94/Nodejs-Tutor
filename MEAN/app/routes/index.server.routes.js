module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    console.log("Executing the express router");
    app.get('/', index.render);
};