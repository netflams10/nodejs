process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var express = require('./config/express');

var db = mongoose();
var app = express()
app.listen(5000);
module.exports = app;

// console.log(module)

console.log('Server running at http://localhost:5000');