const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ObjectId = Schema.ObjectId
const FavoriteSchema = new Schema({
    user_id: {
        type: ObjectId,
        required: true,
        ref: "User"
    },
    recipe_id: {
        type: ObjectId,
        required: true,
        ref: "Recipe"
    },
}, {
    timestamps: true
})

module.exports = Favorite = mongoose.model('Favorite', FavoriteSchema);