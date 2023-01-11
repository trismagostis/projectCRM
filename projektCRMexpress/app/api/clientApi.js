const express = require("express");
const router = express.Router();

const client = require("../controllers/client.controller");
const auth = require("../middlewares/auth");

router.use(express.json());
router.get("/all", auth, function (req, res) {
  client.list(function (err, clients) {
    if (err) {
      res.status(404);
    }
    res.json(clients);
  });
});

router.get("/:id", function (req, res) {
  client.get(req.params.id, function (err, post) {
    if (err) res.send(err);
    res.json(post);
  });
});

router.post("/add", function (req, res) {
  client.add(req.body, function (err, post) {
    if (err) {
      console.log(err);
      res.status(404);
      res.json({ error: "post not created" });
    }
    res.json(post);
  });
});

router.delete("/delete/:id", function (req, res) {
  client.delete(req.params.id, function (err, data) {
    if (err) {
      res.status(404);
      res.json({ error: "post not created" });
    }
    res.json(data);
  });
});

module.exports = router;
