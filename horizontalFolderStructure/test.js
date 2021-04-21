// var mongoUrl = 'mongodb://localhost/mean';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

console.log(`Connected to mongoose DB`);
// mongoose.connect('mongodb://localhost/mean', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// })
// mongoose.connect(mongoUrl, {useMongoClient: true})
// mongoose.connection.on('error', err => (`Mongo connection error --->>> ${err}`));