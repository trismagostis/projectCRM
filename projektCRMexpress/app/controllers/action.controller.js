const Action = require("../models/Action");

function actionList(cb) {
    Action.find()
        .lean()
        .exec(function (err, posts) {
            if (err) {
                cb(err);
            } else {
                cb(null, posts);
            }
        });
}

function actionAdd(data, cb) {
    let newPost = new Action(data);

    newPost.save(function (err, post) {
        if (err) {
            cb(err);
        } else {
            cb(null, post);
        }
    });
}


function actionDelete(id, cb) {
    Action.deleteOne({ _id: id }, function (err, post) {
        if (err) {
            cb(err);
        } else {
            cb(null, post);
        }
    })
}

function actionGet(id, cb) {
    Action.findById(id).exec(function (err, post) {
        if (err) {
            cb(err);
        } else {
            cb(null, post);
        }
    });
}

module.exports = {
    list: actionList,
    add: actionAdd,
    get: actionGet,
    delete: actionDelete,
};