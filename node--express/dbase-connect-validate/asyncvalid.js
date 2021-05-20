const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playgorund', { useNewUrlParser: true,  useUnifiedTopology: true  } )
    .then(() => console.log('Connected to MongoDb'))
    .catch(err => console.error('cpould not connect to mongodb...', err));




// Create a Schema...
// String, Number, Date, Buffer, Boolean, ObjectID, Array...s
const courseSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255,
        // match: /pattern/
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network']
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
                // return v && v.length > 0;
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
        max: 200
    }
})

const Course = mongoose.model('Course', courseSchema);


// Savign to Database
async function createCourse() {
    const course = new Course({
        name: "Angular Course",
        category: 'web',
        author: "Mosh",
        // tags: [],
        tags: null,
        isPublished: true,
        price: 15
    })
    try {
        //await course.validate(); //returns a valid of void
        const result = await course.save();
        console.log(result);
    } catch (ex) {
        console.log(ex.message);
    }
}
createCourse();

