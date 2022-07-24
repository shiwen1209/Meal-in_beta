const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Rating = new Schema({
    user_id: {
        type: Schema.ObjectId,
        required: true
    },
    recipe_id: {
        type: Schema.ObjectId,
        required: true
    },
    stars: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    }
}, {
    timestamps: true
})

module.exports = Rating = mongoose.model('Rating', Rating);