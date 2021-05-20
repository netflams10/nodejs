const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/mongo-exercises', { useNewUrlParser: true,  useUnifiedTopology: true  } )
    .then(() => console.log('Connected to MongoDb Exercise'))
    .catch(err => console.error('cpould not connect to mongodb...', err));

const courseSchema = new mongoose.Schema({
    tags: [String],
    date: Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema)

async function publishedExercise () {
    return await Course
        .find({isPublished: true, tags: 'backend'})
        .sort({name: 1}) // sort('-name') =>descending
        .select({name:1, author: 1}); // select('name author')
    // console.log(result);
}

async function publishedFrontBack () {
    return await Course
        .find({ isPublished: true, tags: {$in: ['backend', 'frontend'] } })
        .sort('-price')
        .select('name author price'); 
}

async function newpublishedFrontBack () {
    return await Course
        .find({ isPublished: true})
        .or([{tags: 'frontend'}, {tags: 'backend'}])
        .sort('-price')
        .select('name author price'); 
}

async function thirdExerciseTitle () {
    return await Course
        .find({ isPublished: true})
        .or([
            { price: { $gte: 15 } }, 
            { name: /.*by.*/i }
        ])
        .sort('-price')
        .select('name author price'); 
}

// return an await
async function run () {
    // const courses = await publishedExercise()
    // const courses = await publishedFrontBack();
    // const courses = await newpublishedFrontBack();
    const courses = await thirdExerciseTitle();
    console.log(courses)
}

run();