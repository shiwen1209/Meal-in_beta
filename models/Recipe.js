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

const NutrientSchema = new Schema({
    "calories":{
        type: Number,
        required: false, 
        default: 0
    },
    "carbohydrates_g":{
        type: Number,
        required: false, default: 0
    },
    "fat_g":{
        type: Number,
        required: false, default: 0
    },
    "saturated_fat_g":{
        type: Number,
        required: false, default: 0
    },
    "cholesterol_mg":{
        type: Number,
        required: false, default: 0
    },
    "protein_g":{
        type: Number,
        required: false, default: 0
    },
    "sugars_g":{
        type: Number,
        required: false, default: 0
    },
    "protein_g":{
        type: Number,
        required: false, default: 0
    },
    "dietary_fiber_g":{
        type: Number,
        required: false, default: 0
    },
    "sodium_mg":{
        type: Number,
        required: false, default: 0
    },
    "calories_from_fat":{
        type: Number,
        required: false, default: 0
    },
    "calcium_mg":{
        type: Number,
        required: false, default: 0

    },
    "iron_mg":{
        type: Number,
        required: false, default: 0
        
    },
    "magneisum_mg":{
        type: Number,
        required: false, default: 0

    },
    "potassium_mg":{
        type: Number,
        required: false, default: 0
        
    },
    "vitamin_a_iu_IU":{
        type: Number,
        required: false, default: 0

    },
    "niacin_equivalents_mg":{
        type: Number,
        required: false, default: 0

    },
    "vitamin_c_mg":{
        type: Number,
        required: false, default: 0

    },
    "folate_mcg":{
        type: Number,
        required: false, default: 0

    },
    "thiamin_mg":{
        type: Number,
        required: false, default: 0
    }
}, {
    timestamps: true
})


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
    author_id:{
        type: ObjectId,
        required: true,
        ref: "User"
    },
    author_handle: {
        type: String,
        required: true
    },
    author_pfp_url: {
        type: String,
        required: false
    },
    // meal_type: { //Breakfast, Lunch, Dinner, Snack/Drink? <- DONT NEED THIS
    //     type: [String],
    //     required: false
    // },
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
    num_favorites: {
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
        type: NutrientSchema,
        required: false
    }
}, {
    timestamps: true
})

RecipeSchema.plugin(AutoIncrement, {id: "recipe_id_counter",inc_field: 'id'});
module.exports = Recipe = mongoose.model('Recipe', RecipeSchema);