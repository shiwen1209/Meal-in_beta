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

    Recipe.findByIdAndUpdate(r_long_id, {
        $inc: {
            total_rating: req.body.rating,
            num_ratings: 1
        }
    },
        { new: true }, ((err, ans) => {
            if (err) {
                console.log(err);
            }
            else {
                // console.log("OKAYY??", ans);
            }
        }))

    User.findOneAndUpdate({ id: u_id }, { $push: { recipes_rated: newRating } }, { new: true },
        ((err, ans) => {
            if (err) { console.log(err) }
            else {
                // console.log(ans, "ans");
            }
            let my_response = { recipe_id: r_id, user_id: u_id, rating: req.body.rating };

            return res.json(my_response);
        })
    );
})

router.patch("/", async (req, res) => {
    console.log(req);
    const u_id = req.body.userId;
    const r_id = req.body.recipeId;
    const newRating = req.body.rating;

    let r_long_id = await Recipe.findOne({ id: r_id }).then((result) => result._id);

    let oldRating = await User.findOne({ id: u_id }).then((result) => {
        for (let i = 0; i < result.recipes_rated.length; i++) {
            if (result.recipes_rated[i].recipe.equals(r_long_id)) {
                // console.log("found!", i, result.recipes_rated[i]);
                return result.recipes_rated[i].rating;
            }
        }
    });

    let ratingChange = req.body.rating - oldRating;
    console.log("Rating net diff: ", ratingChange);

    Recipe.findByIdAndUpdate(r_long_id, {
        $inc: {
            total_rating: ratingChange
        }
    },
        { new: true }, ((err, ans) => {
            if (err) {
                console.log(err);
            }
            else {
                // console.log("OKAYY??", ans);
            }
        }))


    User.findOneAndUpdate({ id: u_id, "recipes_rated.recipe": r_long_id }, { "recipes_rated.$.rating": newRating }, { new: true },
        ((err, ans) => {
            if (err) {
                console.log(err);
            }
            else {
                // console.log(ans, "ans");
            }
            let my_response = { recipe_id: r_id, user_id: u_id, rating: req.body.rating };

            return res.json(my_response);
        })
    );
})

router.delete("/", async (req, res) => {
    console.log(req);
    const u_id = req.body.userId;
    const r_id = req.body.recipeId;

    let r_long_id = await Recipe.findOne({ id: r_id }).then((result) => result._id);

    Recipe.findByIdAndUpdate(r_long_id, {
        $inc: {
            total_rating: -1 * req.body.rating,
            num_ratings: -1
        }
    },
        { new: true }, ((err, ans) => {
            if (err) {
                console.log(err);
            }
            else {
                // console.log("OKAYY??", ans);
            }
        }))

    User.findOneAndUpdate({ id: u_id }, { $pull: { recipes_rated: { recipe: r_long_id } } }, { new: true },
        ((err, ans) => {
            if (err) { console.log(err) }
            console.log(ans);
            let my_response = { recipe_id: r_id, user_id: u_id };

            return res.json(my_response);
        })
    );
})

module.exports = router;