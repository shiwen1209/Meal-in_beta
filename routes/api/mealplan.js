const express = require("express")
const validate = require("../../validation/mealplan")
const router = express.Router()

// TODO: Create actual validator function
const MealPlan = require("../../models/MealPlan")
const User = require("../../models/User")

router.get("/", (req, res) => {
    MealPlan.MealPlan.find({}).limit(10).then(resp => {
        res.json(resp)
    }).catch(err => {
        res.status(400).send({ error: err.toString() })
    })
})

router.post("/", async (req, res) => {
    let data = req.body
    try {
        await validate.MealPlanPostBody.validateAsync(req.body)
    } catch (e) {
        res.status(400).json({ error: e })
        return
    }

    let doc = new MealPlan.MealPlan({
        name: data.name,
        owner_id: data.owner_id,
        meals: data.meals,
    })

    try {
        await doc.validate()
        let results = await doc.save()
        res.json(results)
    } catch (e) {
        res.status(400).json({ error: e })
    }

})

module.exports = router