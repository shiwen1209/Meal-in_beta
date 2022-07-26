const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');
const User = require('../../models/User');

router.post("/", async (req, res) => {
    console.log(req);
    const u_id = req.body.userId;
    const r_id = req.body.recipeId;

    let r_long_id = await Recipe.findOne({ id: r_id }).then((result) => result._id);

    let newRating = { recipe: r_long_id, rating: req.body.rating };

    User.findOneAndUpdate({ id: u_id }, { $push: { recipes_rated: newRating } }, { new: true },
        ((err, ans) => {
            if (err) { console.log(err) }
            else {
                console.log(ans, "ans");
            }
            return res.json(ans);
        })
    );
})

router.patch("/", async (req, res) => {
    console.log(req);
    const u_id = req.body.userId;
    const r_id = req.body.recipeId;
    const newRating = req.body.rating;

    let r_long_id = await Recipe.findOne({ id: r_id }).then((result) => result._id);

    User.findOneAndUpdate({ id: u_id, "recipes_rated.recipe": r_long_id }, { "recipes_rated.$.rating": newRating }, { new: true },
        ((err, ans) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(ans, "ans");
            }

            return res.json(ans);
        })
    );
})

router.delete("/", async (req, res) => {
    console.log(req);
    const u_id = req.body.userId;
    const r_id = req.body.recipeId;

    let r_long_id = await Recipe.findOne({ id: r_id }).then((result) => result._id);

    User.findOneAndUpdate({ id: u_id }, { $pull: { recipes_rated: { recipe: r_long_id } } }, { new: true },
        ((err, ans) => {
            if (err) { console.log(err) }
            console.log(ans);
            return res.json(ans);
        })
    );
})

module.exports = router;