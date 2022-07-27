// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let ObjectId = Schema.ObjectId;
// const RatingSchema = new Schema({
//     user_id: {
//         type: ObjectId,
//         required: true,
//         ref: "User"
//     },
//     recipe_id: {
//         type: ObjectId,
//         required: true,
//         ref: "Recipe"
//     },
//     stars: {
//         type: Number,
//         min: 1,
//         max: 5,
//         required: true
//     }
// }, {
//     timestamps: true
// })

// module.exports = Rating = mongoose.model('Rating', RatingSchema);