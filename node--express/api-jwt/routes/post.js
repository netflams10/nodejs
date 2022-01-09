const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({ posts: { posts: "Random data you shouldn't access!!!" } })
})

module.exports = router;