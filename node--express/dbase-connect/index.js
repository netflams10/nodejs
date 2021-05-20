const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playgorund', { useNewUrlParser: true,  useUnifiedTopology: true  } )
    .then(() => console.log('Connected to MongoDb'))
    .catch(err => console.error('cpould not connect to mongodb...', err));




// Create a Schema...
// String, Number, Date, Buffer, Boolean, ObjectID, Array...s
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean 
})

// mongoose.model('Singular name of the Object Model', the schema variable)
const Course = mongoose.model('Course', courseSchema);


// SAvign to Database
async function createCourse() {
    const course = new Course({
        name: "Angular Course",
        author: "Mosh",
        tags: ['Node', 'Frontend'],
        isPublished: true
    })
    
    const result = await course.save();
    
    console.log(result);
}

// createCourse();
// Query Documents
// find => list of document, finById, findOne

async function getCourses () {
    // const courses = await Course.find();
    // passing a filter object [1 indicate decending order]
    const courses = await Course.find({author: "Mosh", isPublished: true})
        .limit(10)
        .sort({name: 1})
        .select({name: 1, tags: 1})
    console.log(courses);
}

async function comparisonOperator () {
    // comparison Operators
    // eq(equal), ne(not equal), gt | gte(geater than [equal]), lt | lte(less than [equal])
    // in, nin(not in) 
    const courses = await Course
        // .find({author: "Mosh", isPublished: true})
        // .find({price: 10})
        // .find({price: { $gt: 10, $lte: 20 } })
        // .find({ price: { $in: [10, 15, 20] } })
        .limit(10)
        .sort({name: 1})
        .select({name: 1, tags: 1})
    console.log(courses);
}

async function logicalOperator () {
    // or and and
    const courses = await Course
        .find()
        .or([ { author: "Mosh"}, {isPublished: true } ])
        .and([])
        .limit(10)
        .sort({name: 1})
        .select({name: 1, tags: 1})
    console.log(courses);
}

async function regexOperator () {
    // ^ => string that start with something [/^Mosh/ => string starts with Mosh]
    // $ => Indicates the end of the string.
    // i => For case Insensitive /Hamedani$/i
    // .* =>s earch through out
    const courses = await Course
        .find({author: /^Mosh/ })
        // Ends with Hamadani
        .find({author: /Hamedani$/ })
        // Contains Mosh
        .find({author: /.*Mosh.*/i })
        .limit(10)
        .sort({name: 1})
        .select({name: 1, tags: 1})
    console.log(courses);
}

async function counting () {
    const courses = await Course
        .find({ author: 'Mosh', isPublished: true })
        .limit(10)
        .sort({name: 1})
        .countDocuments();
    console.log(courses);
}

async function pagination () {
    // skip => is used for pagination
    // /api/courses?pageNumber=2&pageSize=10
    const pageNumber = 2;
    const pageSize = 10;

    const courses = await Course
        .find({ author: 'Mosh', isPublished: true })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({name: 1})
        .countDocuments();
    console.log(courses);
}

async function pagination () {
    const courses = await Course
        .find({ author: 'Mosh', isPublished: true })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({name: 1})
        .countDocuments();
    console.log(courses);
}

async function updateCourse(id) {
    // Approach: Query first
    // findById()
    // Modify its properties
    // save()
    // const course = await Course.findById(id);
    // if(!course) return ;
    // course.isPublished = true;
    // course.author = 'Another Author';
    // const result = await course.save()
    // console.log(result);

    // Approach: Update first
    // Update directly
    // Optionally: get the updated document
    // const result = await Course.updateOne({ _id: id}, {
    //     $set: {
    //         author: 'Mosh',
    //         isPublished: false
    //     }
    // })

    const result = await Course.findByIdAndUpdate(id, {
        $set: {
            author: 'Jason',
            isPublished: false
        }
    }, {new: true});

    console.log(result);
    // course.set({
    //     isPublished: true,
    //     author: 'Another Author'
    // })
}

async function removeCourse (id) {
    // const result = await Course.deleteOne({_id: id});
    // console.log(result);
    // Delete Multiple Document
    const course = await Course.findByIdAndRemove(id);
    console.log(course)
}


// getCourses()
// counting();
// updateCourse('609e48425a841ef016c19d30');
removeCourse('609e46f548c017ef2e783c38')