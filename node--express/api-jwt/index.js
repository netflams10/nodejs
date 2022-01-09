const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import Routes
const authRoutes = require('./routes/auth');
const postRoute = require('./routes/post');


dotenv.config();
//connect to DB
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true  },
    () => console.log('Connected to DB!!')
);

// Middleware

//body Parser...
app.use(express.json());


/**
 * Route Middleware
 * means all auth route has to have this points
 * "/api/user" =>
 * before calling (Everything in the auth route is going to have this prefix)
 */
app.use('/api/user', authRoutes);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log("Server Up and running"))