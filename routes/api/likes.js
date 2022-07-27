const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');
const User = require('../../models/User');

router.post("/", async (req, res) => {
    const u_id = req.query.userId;
    const r_id = req.query.recipeId;
    console.log("uuuuuuuuuu" + u_id);
    console.log("rrrrrrrrr" + r_id)
    let r_long_id = await Recipe.findOne({ id: r_id }).then((result) => {
        console.log("recipe", result);
        return result._id;
    });


    Recipe.findByIdAndUpdate(r_long_id, {
        $inc: {
            num_likes: 1
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

    User.findOneAndUpdate({ id: u_id }, { $push: { recipes_liked: r_long_id } }, { new: true },
        ((err, ans) => {
            if (err) { console.log(err) }
            else {
                // console.log(ans, "ans");
            }
            let my_response = { recipe_id: r_id, user_id: u_id };

            return res.json(my_response);
        })
    );
})

router.delete("/", async (req, res) => {
    const u_id = req.query.userId;
    const r_id = req.query.recipeId;
    console.log ("reqqqqqqq" + req.body);
    console.log("reqqqqqqq" + req.params);
    console.log("reqqqqqqq" + req.query);
    console.log("uuuuuuu" + u_id)
    console.log("rrrrrrrrr" + r_id)
    let r_long_id = await Recipe.findOne({ id: r_id }).then((result) => result._id);
    
    Recipe.findByIdAndUpdate(r_long_id, {
        $inc: {
            num_likes: -1
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

    User.findOneAndUpdate({ id: u_id }, { $pull: { recipes_liked: r_long_id } }, { new: true },
        ((err, ans) => {
            if (err) { console.log(err) }
            console.log(ans);
            let my_response = { recipe_id: r_id, user_id: u_id };

            return res.json(my_response);
        })
    );
})

module.exports = router;