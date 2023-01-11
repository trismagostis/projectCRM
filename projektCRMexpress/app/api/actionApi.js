const express = require("express");
const router = express.Router()

const action = require("../controllers/action.controller");


router.use(express.json());
router.get("/all", function (req, res) {
    action.list(function (err, posts) {
        if (err) {
            res.status(404);
            res.json({error: "post not created"})
        }
        res.json(posts)
    });
});

router.post("/add", function (req, res) {
    //console.log(req.body)
    action.add(req.body, function (err, post) {
        if (err) {
            console.log(err)
            res.status(404);
            res.json({error: "post not created"})
        }
        res.json(post);
    });
});

router.delete("/delete/:id", function (req, res) {
    action.delete(req.params.id, function (err, data) {
        if (err) {
            res.status(404);
            res.json({error: "post not created"})
        }
        res.json(data)
    })
})

module.exports = router;