const express = require("express");
const cors = require('cors');
const route = require('./route/route');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: false}));
const port = process.env.PORT || 3000;

app.use('/v1', route);
app.listen(port, () => console.log(`Server listening on port ${port}`));