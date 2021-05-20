const Joi = require('joi');
const express = require('express');
const app = express();

// returns piece of middleware => req.body
app.use(express.json());

// Environment Variable [PORT]
// Linux Terminal ['export', 'PORT=7770']
const port = process.env.PORT || 3000

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

// HTTP Verbs
app.get('/', (req, res) => {
    res.send("Hello World!!!");
});

app.get("/api/courses", (req, res) => {
    // res.send([1,2,3]);
    res.send(courses);
});

// /api/courses/1 [uses to read req or get single course]
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID not found')
    res.send(course);
})

// params /api/posts/:year/:month
app.get('/api/posts/:year/:month', (req, res) => {
    // res.send(req.params);
    // query parameter => api/posts/2018/1?sortBy=name
    res.send(req.query)
})

app.post('/api/courses', (req, res) => {
    const {error} = validateCourse(req.body)
    if (error) return res.status(400).send(error.details[0].message); 
    // Validation logic
    // if (!req.body.name || req.body.length < 3) {
    //     // 400 Bad Request
    //     res.status(400).send('Name is required and should be minimum of 3 characters.')
    //     // so the rest cant be validated
    //     return;
    // }

    // Schema defines an object
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

// Update a Course
app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID not found')
    // if not return 404

    const {error} = validateCourse(req.body)
    if (error) return res.status(400).send(error.details[0].message); 

    course.name = req.body.name;
    res.send(course)

    // Validate
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

// app.put()
// app.post()
// app.delete()

app.listen(port, () => console.log(`listening on port ${port}...`))