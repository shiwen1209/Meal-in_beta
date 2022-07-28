const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');

router.get("/", (req, res) => {
    console.log("requestt", req.query);
    // for(let i = 0; i < req.query.length; i++)
    // {
    //     console.log("going in", req.query[i])
    //     Recipe.find(req.query[i])
    // }
    Recipe.find({
        '_id': { $in: req.query.info}
    }).select("ingredients nutrients title").exec((err, result) => {
        console.log("yo?", result);
        return res.json(result);
    })
})

module.exports = router;
