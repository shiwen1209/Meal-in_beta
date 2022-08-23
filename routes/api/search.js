const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');
const User = require('../../models/User');

router.get("/", (req, res) => {
    let filter = {};
    let sortFilter = '';

    // console.log(req.query);

    let title = req.query.title;
    let budget = parseInt(req.query.budget);
    let category = req.query.category;

    // console.log("budget is", budget);
    // let rating = req.query.rating; 
    //above needs refactoring the schema but im lazy, if needed pls contact me - charlie
    let sortme = req.query.sortme;
    if (title)
        filter.title = { $regex: title, $options: "i" };
    if (budget)
        filter.budget = budget;
    if (category)
        filter.category = category;

    // if(rating)
    // {
    //     filter.average_rating = {$gte: rating};
    // }

    //
    if (sortme) {
        if (sortme === 'popularity') {
            sortFilter = '-num_likes';
        }
        else if (sortme === 'recent') {
            sortFilter = '-createdAt'
        }
    }


    // console.log("filter?");
    // console.log(filter);

    //note: sorting can be added later, but it requires converting an array of ObjectIds back into an array of objects

    Recipe.find(filter).sort(sortFilter).limit(20).exec().then((result) => {
        // console.log("res", result);
        return res.json(result);
    });

})

module.exports = router;







