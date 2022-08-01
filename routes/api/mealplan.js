const express = require("express")
const validate = require("../../validation/mealplan")
const mongoose = require("mongoose")
const router = express.Router()

// TODO: Create actual validator function
const MealPlan = require("../../models/Mealplan")
const Recipe = require("../../models/Recipe")
const Nutrients = require("../../models/Nutrients")
const User = require("../../models/User")

const nutrientFields = (Object.keys(Nutrients.schema.paths)).filter(key => {
    return ['__v', '_id', 'createdAt', 'updatedAt'].indexOf(key) == -1
})

async function calculateCalories(mealPlan) {
    let rid = []
    for (meal of mealPlan.meals) {
        rid.push(mongoose.Types.ObjectId(meal.recipe_id))
    }
    let nutrients = {}
    for (key of nutrientFields) {
        nutrients[key] = 0
    }
    try {
        // $in query checks if it's in the set
        let recipes = await Recipe.find({
            _id: {
                $in: rid
            }
        })

        // Accumulate calories over all recipes

        for (r of recipes) {
            for (key of nutrientFields) {
                if (key in r.nutrients) {
                    nutrients[key] += r.nutrients[key]
                }
            }
        }
    } catch (e) {
        console.log("Could not make recipe find request", e)
        return -1
    }
    for (key of nutrientFields) {
        nutrients[key] /= rid.length
    }
    return nutrients
}

async function wrapPlan(mealPlan) {
    let nutrients = await calculateCalories(mealPlan)
    return { nutrients: nutrients, mealplan: mealPlan }
}

router.get("/", (req, res) => {
    MealPlan.MealPlan.find({}).limit(10).then(async resp => {
        res.json(resp)
    }).catch(err => {
        res.status(400).send({ error: err.toString() })
    })
})


router.get("/:id", (req, res) => {
    console.log("TRYING TO GET ID")
    MealPlan.MealPlan.findOne({ _id: req.params.id }).then(resp => {
        wrapPlan(resp).then(resp => {
            res.json(resp)
        }).catch(err => {
            console.log("This was the err")
            res.status(400).send({ error: err.toString() })
        })
    }).catch(err => {
        console.log("This was err 2")
        res.status(400).send({ error: err.toString() })
    })
})

router.post("/", async (req, res) => {
    let data = req.body
    try {
        await validate.MealPlanPostBody.validateAsync(req.body)
    } catch (e) {
        res.status(400).json({ error: e.toString() })
        return
    }

    let doc = new MealPlan.MealPlan({
        name: data.name,
        owner_id: data.owner_id,
        meals: data.meals
    })

    try {
        await doc.validate()
        let results = await doc.save()
        let wrapped = await wrapPlan(results)
        res.json(wrapped)
    } catch (e) {
        res.status(400).json({ error: e.toString() })
    }
})


module.exports = router
