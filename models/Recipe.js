const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import RecipeIngredient from "./RecipeIngredient.js"


const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author_id: {
        type: Schema.ObjectId,
        required: true
    },
    description: {
        type: String,
        required: false
    }, 
    instructions: {
        type: [String],
        required: true
    },
    prep_time: {
        type: Number,
        required: false //could be true, but doubt
    },
    category: {
        type: [String], //could just be string
        required: false
    },
    meal_type: { //Breakfast, Lunch, Dinner, Snack/Drink?
        type: [String],
        required: false
    },
    budget: { //1,2,3,4
        type: Number,
        required: false
    },
    num_ratings: {
        type: Number,
        default: 0,
        required: true
    },
    total_rating: {
        type: Number,
        default: 0, 
        required: true
    },
    ingredients: {
        type: [RecipeIngredient],
        required: true
    },
    num_favorites: {
        type: Number,
        default: 0,
        required: true
    }
    
}, {
    timestamps: true
})

module.exports = Recipe = mongoose.model('Recipe', RecipeSchema);