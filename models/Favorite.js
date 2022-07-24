const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Favorite = new Schema({
    user_id: {
        type: Schema.ObjectId,
        required: true
    },
    recipe_id: {
        type: Schema.ObjectId,
        required: true
    },
}, {
    timestamps: true
})

module.exports = Favorite = mongoose.model('Favorite', Favorite);