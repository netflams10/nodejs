const mongoose = require('mongoose');
const express = require('express');
const app = express()
const genre = require('./routes/genre')

mongoose.connect('mongodb://localhost/vidly', { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(`Connected to Mongo Dbase`)
    .catch(err => console.error("Couln't connect to MongoDBase..." + err));

app.use(express.json())
app.use('', genre);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`))