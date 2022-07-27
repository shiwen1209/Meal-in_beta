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

const MealDay = new Schema({
    day: {
        type: String,
        required: true,
        enum: Object.values(DaysOfWeek)
    }
})

function validateMealDayArray(arr) {
    return arr.length <= 7
}

const MealPlanSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: ObjectId,
        required: true,
        ref: "User"
    },
    meal_days: {
        type: [MealDay],
        required: true,
        validate: [validateMealDayArray, '{PATH} exceeds max size of 7']
    },
})

module.exports = {
    DaysOfWeek: DaysOfWeek,
    MealPlan: mongoose.model('MealPlan', MealPlanSchema),
}