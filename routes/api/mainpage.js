const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');

router.get("/", async (req, res) => {
    Recipe.find({})
        .populate('author', '-password -email -recipes_liked -recipes_rated')
        .then(async (recipes) => {
            let ans = [];
            let categories = {
                "appetizers-and-snacks": 0,
                "breakfast-and-brunch": 0,
                "desserts": 0,
                "drinks": 0,
                "main-dish": 0,
                "meat-and-poultry": 0,
                "salad": 0,
                "world-cuisine": 0
            };

            let category_names = Object.keys(categories);

            for (let i = 0; i < recipes.length; i++) //in future when massive recipe database, prematurely exit loop after hitting amount of what we want using a counter. also can do one-by-one category-specific search
            {
                // console.log("one entry:", recipes[i].category);
                if (category_names.includes(recipes[i].category) && categories[recipes[i].category] < 8) {
                    let newRecipe = {};
                    newRecipe.title = recipes[i].title;
                    newRecipe._id = recipes[i]._id;
                    newRecipe.id = recipes[i].id;
                    newRecipe.prep_time = recipes[i].prep_time;
                    newRecipe.num_likes = recipes[i].num_likes;
                    newRecipe.author = recipes[i].author;
                    newRecipe.num_ratings = recipes[i].num_ratings;

                    newRecipe.total_rating = recipes[i].total_rating;
                    newRecipe.category = recipes[i].category;
                    newRecipe.image_url = recipes[i].image_url;
                    categories[recipes[i].category] += 1;
                    ans.push(newRecipe);
                }
            }
            return res.json(ans);
        })
        .catch(err => console.log(err));
})

module.exports = router;