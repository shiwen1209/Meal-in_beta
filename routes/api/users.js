const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../../config/keys');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const Recipe = require('../../models/Recipe');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        handle: req.user.handle,
        email: req.user.email,
        _id: req.user._id,
    });
})

// sign up
router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            errors.email = "Email already exists";
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                handle: req.body.handle,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = { id: user.id, handle: user.handle };

                            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            });
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// login
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            errors.email = "This email does not exist";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user.id, handle: user.handle, _id: user._id };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});


router.get("/:id", async(req, res) => {
    const ans = {};
    User.findOne({id: req.params.id}).then( async (user) => {
        ans.user = {
            handle: user.handle,
            bio: user.bio,
            id: user.id,
            _id: user._id,
            pfp_url: user.pfp_url ///we should stick with just 1 tbh. i prefer id since it took me 90 min to get autoincrement to work
        };

        await user.populate("recipes_liked", "_id title category num_ratings total_rating image_url id");
        ans.recipes_liked = user.recipes_liked;

        return Recipe.find({author: user._id}) //this kind of trash, can be optimized with adding subdocuments in User for Recipes-Created, with pre save middleware to auto-assoicate
                                                 
    }).then((recipes) => {
        ans.recipes_created = [];
        for(let i = 0; i < recipes.length; i++)
        {
            let oneRecipe = {};
            oneRecipe = {
                title: recipes[i].title,
                id: recipes[i].id,
                _id: recipes[i]._id,
                image_url: recipes[i].image_url,
                total_rating: recipes[i].total_rating,
                num_ratings: recipes[i].num_ratings
            }
            ans.recipes_created.push(oneRecipe);
        }
        res.json(ans);
    }).catch(err => console.log(err));
});


router.patch("/:id",  (req, res) => {
    User.findOneAndUpdate({ id: req.params.id },
        req.body,
        { new: true, useFindAndModify: false },
        (err, user) => {
            if (err) return res.status(500).send(err);
            return res.json(user);
        })
})

module.exports = router;

