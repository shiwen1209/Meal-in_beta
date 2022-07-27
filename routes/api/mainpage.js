const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');

router.get("/", async (req, res) => {
    Recipe.find({})
        .then(async (recipes) => {
            let categories = {
                "appetizers-and-snacks": [],
                "breakfast-and-brunch": [],
                "desserts": [],
                "drinks": [],
                "main-dish": [],
                "meat-and-poultry": [],
                "salad": [],
                "world-cuisine": []
            };

            let category_names = Object.keys(categories);

            for (let i = 0; i < recipes.length; i++) //in future when massive recipe database, prematurely exit loop after hitting amount of what we want using a counter. also can do one-by-one category-specific search
            {
                console.log("one entry:", recipes[i].category);
                if (category_names.includes(recipes[i].category) && categories[recipes[i].category].length < 9) {
                    let newRecipe = {};
                    newRecipe.title = recipes[i].title;
                    newRecipe._id = recipes[i]._id;
                    newRecipe.id = recipes[i].id;

                    newRecipe.num_likes = recipes[i].num_likes;
                    newRecipe.author = recipes[i].author;
                    newRecipe.num_ratings = recipes[i].num_ratings;

                    newRecipe.total_rating = recipes[i].total_rating;
                    newRecipe.image_url = recipes[i].image_url;

                    categories[recipes[i].category].push(newRecipe);
                }
            }
            return res.json(categories);
        })
        .catch(err => console.log(err));
})

module.exports = router;