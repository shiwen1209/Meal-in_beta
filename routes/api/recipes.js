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
                r.author_name = await User.findOne({ _id: recipe.author }).then((res) => { 
                    return "test_name";
                })
                r.authorImageUrl = "";
                r.image_url = recipe.image_url;
                r._id = recipe._id;
                r.id = recipe.id;
                return r;
            }))
            res.json(payload)
        }
        )
        .catch(err => console.log(err));
})

// get one recipe
// router.get("/:id", (req, res) => {
//     Recipe.findOne({id: req.params.id})
//     .then(async recipe => 
//     {
//         console.log("recipe: ", recipe);
//         let ans;
//         await recipe.populate("author", "-email -recipes_liked -id -__v -password").then((result) => {ans = result;});
//         return res.json(ans);
//     })
//     .catch(err => console.log(err));
// })

router.get("/:id/:userid", (req, res) => {
    Recipe.findOne({id: req.params.id})
    .then(async recipe => 
    {
        // console.log("recipe real shit", recipe);
        let ans;
        await recipe.populate("author", "-email -recipes_liked -__v -password -recipes_rated").then(async result => {
            ans = result;
            ans.user_liked = false;
            await User.findOne({ id: req.params.userid }).then((current_user) => {
                console.log(current_user, "cu");
                console.log(current_user.recipes_liked);
                console.log(recipe._id);
                if (current_user.recipes_liked.includes(recipe._id)) {
                    ans.user_liked = true;
                }
                // current_user.populate('recipes_liked').then((result) => result.recipes_liked.forEach((ele) => 
                // {
                //     if(ele._id === recipe._id)
                //     {
                //         console.log("found em", ele);
                //     }
                // }));
            })
        });
        
        console.log(ans, "ans");
        return res.json(ans);
    })
    .catch(err => console.log(err));
})


//post a recipe
//yo this is lacking!!!!! add mroe feilds
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