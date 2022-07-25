const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');
const User = require('../../models/User');


// get all recipes
router.get("/", (req, res) => {
    Recipe.find({})
        .then((recipes)=>{
            const payload = recipes.map((recipe)=>{
                const r = {};
                // const author = User.findOne({_id: recipe.author_id});
                r.author = "Test user"; // Update later
                r.authorImageUrl = "";
                r._id = recipe._id;
                r.title = recipe.title;
                return r
            })
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