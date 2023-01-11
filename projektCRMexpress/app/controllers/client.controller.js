const Client = require("../models/Client");

function clientList(cb) {
  Client.find()
    .lean()
    .exec(function (err, posts) {
      if (err) {
        cb(err);
      } else {
        cb(null, posts);
      }
    });
}

function clientAdd(data, cb) {
  let newPost = new Client(data);

  newPost.save(function (err, post) {
    if (err) {
      cb(err);
    } else {
      cb(null, post);
    }
  });
}


function clientDelete(id, cb) {
  Client.deleteOne({_id: id}, function (err, post) {
    if (err) {
      cb(err);
    } else {
      cb(null, post);
    }
  })
}

function postGet(id, cb) {
  Client.findById(id).exec(function (err, post) {
    if (err) {
      cb(err);
    } else {
      cb(null, post);
    }
  });
}

module.exports = {
  list: clientList,
  add: clientAdd,
  get: postGet,
  delete: clientDelete,
};