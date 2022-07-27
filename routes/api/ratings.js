const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');
const User = require('../../models/User');

//non-operational atm

//change total_ratings and num_ratings in backend too!

router.post("/", (req, res) => {
    const u_id = req.body.userId;
    const r_id = req.body.recipeId;
    User.findOne({id: u_id}).then((usr) => {
        usr.populate("ratings").then((res) => 
        {
            console.log(res.ratings);
            
        })
    })
})

module.exports = router;
