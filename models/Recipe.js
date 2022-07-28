const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Nutrients = require('./Nutrients')

const AutoIncrement = require('mongoose-sequence')(mongoose);

let ObjectId = Schema.ObjectId

const RecipeSchema = new Schema({
    // _id:{
    //     type: Number
    // },
    title: {
        type: String,
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
    author: {
        type: ObjectId,
        required: true,
        ref: "User"
    },
    budget: { //1,2,3,4
        type: Number,
        required: false
    },
    num_ratings: {
        type: Number,
        default: 0
    },
    total_rating: {
        type: Number,
        default: 0
    },
    yield: {
        type: String,
        default: '',
        required: false
    },
    // ingredients:[RecipeIngredientSchema], //<- should be like this later
    ingredients: {
        type: [String]
    },
    num_likes: {
        type: Number,
        default: 0,
        required: false // update later
    },
    image_url: {
        type: String,
        require: false
    },
    category: {
        type: String,
        required: false
    },
    prep_time: {
        type: String,
        required: false
    },
    nutrients: {
        type: Nutrients.schema,
        required: false
    }
}, {
    timestamps: true
})

RecipeSchema.plugin(AutoIncrement, { id: "recipe_id_counter", inc_field: 'id' });
module.exports = Recipe = mongoose.model('Recipe', RecipeSchema);