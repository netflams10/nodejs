const express = require('express');
const router = express.Router();

app.get('/', (req, res) => {
    res.render('index', {title: "My Exporess App", message: "Hello"});
});

module.exports = router;