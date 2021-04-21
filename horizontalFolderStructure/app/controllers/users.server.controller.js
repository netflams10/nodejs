var User = require('mongoose').model('User');


// Registering a user
exports.create = function (req, res, next) {
    var user = new User(req.body);

    user.save(function (err) {
        if (err) {
            return next(err)
        } else {
            res.json(user);
        }
    });
};

// fetching all users
exports.list = function (req, res, next) {
    User.find({}, function (err, users) {
        if (err) {
            return next(err)
        } else {
            res.json(users);
        }
    })
}

// Modern fetching of users
exports.dynamic = function (req, res, next) {
    User.find({}, 'username email', {
        skip: 10,
        limit: 10
    }, function (err, users) {
        if (err) {
            return next(err)
        } else {
            return res.json(users);
        }
    })
}

// fetch a single User...
exports.read = function (req, res) {
    res.json(req.user);
}

exports.userByID = function (req,res, next, id) {
    User.findOne({
        _id: id
    }, function (err, user) {
        if (err) {
            return next(err)
        } else {
            req.user = user
            next();
        }
    })
}

// find ById and Update...
exports.update = function (req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function (err, user) {
        if (err) {
            return next(err)
        } else {
            res.json(user)
        }
    })
}

// delete byId
exports.delete = function (req, res, next) {
    req.user.remove (function (err) {
        if (err) {
            return next(err)
        } else {
            res.json(req.user);
        }
    })
}