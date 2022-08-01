const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ObjectId = Schema.ObjectId;

const DaysOfWeek = {
    Monday: 'mon',
    Tuesday: 'tue',
    Wednesday: 'wed',
    Thursday: 'thu',
    Friday: 'fri',
    Saturday: 'sat',
    Sunday: 'sun',
}

const MealType = {
    Breakfast: 'breakfast',
    Lunch: 'lunch',
    Dinner: 'dinner'
}

const MealDay = new Schema({
    day: {
        type: String,
        required: true,
        enum: Object.values(DaysOfWeek)
    },
    meal_type: {
        type: String,
        required: true,
        enum: Object.values(MealType)
    },
    recipe_id: {
        type: ObjectId,
        ref: "Recipe"
    },
    recipe_title: {
        type: String,
        required: true,
    }
})


function validateMealDayArray(arr) {
    return arr.length <= 7 * 3 && arr.length >= 1
}

const MealPlanSchema = new Schema({
    name: {
        type: String,
        required: true,
        // unique: true,
    },
    owner_id: {
        type: ObjectId,
        ref: "User",
        // unique: true,
        required: true,
    },
    meals: {
        type: [MealDay],
        required: true,
        validate: [validateMealDayArray, '{PATH} exceeds max size of 21']
    },
})

// MealPlanSchema.index({name: 1, owner_id: 1})

module.exports = {
    DaysOfWeek: DaysOfWeek,
    MealPlan: mongoose.model('MealPlan', MealPlanSchema),
    MealType: MealType,
}