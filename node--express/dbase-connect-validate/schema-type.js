const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playgorund', { useNewUrlParser: true,  useUnifiedTopology: true  } )
    .then(() => console.log('Connected to MongoDb'))
    .catch(err => console.error('cpould not connect to mongodb...', err));


const courseSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'],
        lowercase: true,
        // uppercase: true,
        trim: true
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function (v, callback) {
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result)
                }, 4000);
            },
            message: 'A course should have at least one tag.'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished; },
        min: 10,
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
})

const Course = mongoose.model('Course', courseSchema);


async function createCourse() {
    const course = new Course({
        name: "Angular Course",
        category: 'Web',
        author: "Mosh",
        tags: ['frontend'],
        isPublished: true,
        price: 15.8
    })
    try {
        const result = await course.save();
        console.log(result);
    } catch (ex) {
        for (field in ex.errors) 
            console.log(ex.errors[field].message)
    }
}
// createCourse();

async function getCourses () {
    const courses = await Course
        .find({_id: '609e9e9e28274a3e92342e86'})
        .sort({name: 1})
        .select({name: 1, tags: 1, price: 1});
    console.log(courses[0].price);
}

getCourses();


