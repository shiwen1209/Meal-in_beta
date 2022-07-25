const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');
const User = require('../../models/User');


// get all recipes
router.get("/", (req, res) => {
    Recipe.find({})
        .then(async (recipes) => {
            const payload = await Promise.all(recipes.map(async recipe => {
                const r = {};
                r.title = recipe.title
                r.num_ratings = recipe.num_ratings
                r.total_rating = recipe.total_rating
                r.author_name = await User.findOne({ _id: recipe.author_id }).then((res) => { return res.handle })
                r.authorImageUrl = "";
                return r;
            }))
            res.json(payload)
        }
        )
        .catch(err => console.log(err));
})

// get one recipe
router.get("/:id", (req, res) => {
    Recipe.findById(req.params.id)
        .then((payload) => res.json(payload))
        .catch(err => console.log(err));
})


//post a recipe
router.post("/", (req, res) => {
            const newRecipe = new Recipe({
                title: req.body.title,
                description: req.body.description,
                instructions: req.body.instructions
            });

        newRecipe
        .save()
        .then(recipe => {
            const payload = { title: recipe.title,
                description: recipe.description,
                instructions: recipe.instructions };
            res.json(payload)
        })
        .catch(err => console.log(err));
})

module.exports = router;