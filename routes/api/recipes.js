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
    Recipe.findOne({ id: req.params.id })
        .then(async recipe => {
            let ans;
            await recipe.populate("author", "-email -recipes_liked -__v -password -recipes_rated").then((result) => {
                ans = result.toObject();
                ans.user_liked = false;
                ans.user_rating = null;
            });

            await User.findOne({ id: req.params.userid }).then((current_user) => {
                console.log("cu", current_user);
                if (current_user.recipes_liked.includes(recipe._id)) {
                    ans.user_liked = true;
                }
                current_user.populate('recipes_rated').then((result) => {
                    console.log(result.recipes_rated.length);
                    for (let i = 0; i < result.recipes_rated.length; i++) {
                        if (result.recipes_rated[i].recipe.equals(recipe._id)) {
                            console.log("???")
                            ans.user_rating = result.recipes_rated[i].rating;
                            break;
                        }
                    }
                });
            })
            console.log(ans, "ans");
            return res.json(ans);
        })
        .catch(err => console.log(err));
})


//post a recipe
//yo this is lacking!!!!! add mroe feilds
router.post("/", (req, res) => {
    const newRecipe = new Recipe(req.body);
    newRecipe
    .save()
    .then(recipe => {
        res.json(recipe)
    })
    .catch(err => console.log(err));
})

router.patch("/:id", (req, res) => {

    Recipe.findOneAndUpdate({id: req.params.id},
        req.body,
        { new: true, useFindAndModify: false },
        (err, recipe) => {
            if (err) return res.status(500).send(err);
            return res.json(recipe);
        })
})


module.exports = router;