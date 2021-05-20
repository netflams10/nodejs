// const startupDebugger = require('debug')('app:startup');
// const dbDebugger = require('debug')('app:db');
const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger')
const express = require('express');
const app = express();

// if not set process.env.NODE_ENV ==>> undefined
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
// console.log(`app: ${app.get('env')}`)
// managing configuraion using rc (might set up diff dbase for development and production)
// Debugging...

app.set('view engine', 'pug');
app.set('views', './views') // optional only to overide normal engine

// app.use() is used to install middle in our route pipeline...
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());
// app.use(morgan('tiny'));

console.log('Application Name: ' + config.get('name'))
console.log('Mail Server: ' + config.get('mail.host'))
console.log('Mail Password: ' + config.get('mail.password'))

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    // export DEBUG=startup to see only the debugger
    // export DEBUG=app:artup,app:db
    // or use a wildcard export DEBUG=app:*
    // startupDebugger('Morgan enabled...')
    debug('Morgan enabled...'); // shorter than writing debug
    // console.log('Morgan Enabled!')
}

//DB work
// dbDebugger('Connected to the Database');

// visit localhost:port/static-files

// Logging of http request only in development environment
// setting our environment export NODE_ENV=pduction

app.use(logger);

// app.use(logger);

const port = process.env.PORT || 3000

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

app.get('/', (req, res) => {
    // res.send("Hello World!!!");
    res.render('index', {title: "My Exporess App", message: "Hello"});
});

app.get("/api/courses", (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID not found')
    res.send(course);
})


app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query)
})

app.post('/api/courses', (req, res) => {
    const {error} = validateCourse(req.body)
    if (error) return res.status(400).send(error.details[0].message); 

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID not found')

    const {error} = validateCourse(req.body)
    if (error) return res.status(400).send(error.details[0].message); 

    course.name = req.body.name;
    res.send(course)
})

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID not found')

    const index = courses.indexOf(course);
    courses.splice(index, 1)
    res.send(course);
})

function validateCourse (course) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema)
}

app.listen(port, () => console.log(`listening on port ${port}...`))