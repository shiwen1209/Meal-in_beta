const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');


router.get("/", (req, res) => {
    Recipe.find({})
        .then((payload)=>res.json(payload))
        .catch(err => console.log(err));
})

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