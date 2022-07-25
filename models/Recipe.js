const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AutoIncrement = require('mongoose-sequence')(mongoose);

let ObjectId = Schema.ObjectId

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
    //mb recipe_id idk
}, {
    timestamps: true
})
//????? EXTRANEOUS? change to a require import



const RecipeSchema = new Schema({
    // _id:{
    //     type: Number
    // },
    title: {
        type: String,
        required: true
    },
    author_id: {
        type: ObjectId,
        ref: "User",
        required: false
    },
    description: {
        type: String,
        required: false
    }, 
    instructions: {
        type: [String],
        required: false
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
        default: 0
    },
    total_rating: {
        type: Number,
        default: 0    
    },
    ingredients:[RecipeIngredientSchema],
    num_favorites: {
        type: Number,
        default: 0,
        required: true
    }
}, {
    timestamps: true
})

RecipeSchema.plugin(AutoIncrement, {id: "recipe_id_counter",inc_field: 'id'});
module.exports = Recipe = mongoose.model('Recipe', RecipeSchema);