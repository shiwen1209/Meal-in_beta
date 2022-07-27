const Joi = require('joi')

const MealPlanPostBody = Joi.object({
    name: Joi.string().required(),
    owner_id: Joi.string().alphanum().required(),
    meals: Joi.array().min(1).max(3 * 7)
})

module.exports = {
    MealPlanPostBody
}