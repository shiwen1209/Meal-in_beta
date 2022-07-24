const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeIngredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // ingredient_id: {
    //     type: Schema.ObjectId,
    //     required: true
    // },
    unit_type: {
        type: String,
        required: false
    }, 
    unit_amount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = RecipeIngredient = mongoose.model('RecipeIngredient', RecipeIngredientSchema);