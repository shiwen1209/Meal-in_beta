const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ingredient = new Schema({
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
        required: true
    }, 
    unit_amount: {
        type: Integer,
        required: true
    },
    
}, {
    timestamps: true
})

module.exports = Ingredient = mongoose.model('Ingredient', Ingredient);