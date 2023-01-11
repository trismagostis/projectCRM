const express = require("express");
const router = express.Router();

const user = require("../controllers/user.controller");

router.post("/signup", function (req, res) {
  user.add(req.body, function (err, user) {
    if (err) {
      res.status(404);
      res.json({
        error: "User not created",
      });
    } else {
      res.json({ signup: "ok", username: user.username });
    }
  });
});

router.post("/login", function (req, res) {
  user.login(req.body, function (err, token) {
    if (err) {
      res.status(404);
      res.json({
        error: "User not logged",
      });
    } else if (token) {
      res.json({ success: true, username: req.body.username, jwt: token });
    } else {
      res.json({
        success: false,
        message: "username or password do not match",
      });
    }
  });
});

module.exports = router;
