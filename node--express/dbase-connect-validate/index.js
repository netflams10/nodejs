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
    tags: [String],
    date: { type: Date, default: Date.now },
    // price is required if isPublished is true
    // Arrow function can't work cause of *this*
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished; },
        min: 10,
        max: 200
    }
})

// mongoose.model('Singular name of the Object Model', the schema variable)
const Course = mongoose.model('Course', courseSchema);


// Savign to Database
async function createCourse() {
    const course = new Course({
        name: "Angular Course",
        category: '-',
        author: "Mosh",
        tags: ['Node', 'Frontend'],
        isPublished: true,
        // price: 15
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

// Built in Validaton in mongoose
async function mongooseValidator () {
    const course = new Course({
        // name: "Angular Course",
        author: "Mosh",
        tags: ['Node', 'Frontend'],
        isPublished: true
    })
    try {
        const result = await course.save();
        console.log(result);
    } catch (ex) {
        console.log(ex.message);
    }
}

// mongooseValidator();
