var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => console.log(`Connected to Server`))
            .catch(err => console.log(`Error Detected!!!!`));

    require('../app/models/user.server.model')
    
    return db;
}