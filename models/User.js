const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let ObjectId = Schema.ObjectId

const RecipeRatingSchema = new Schema({
    recipe: {
        type: ObjectId,
        required: true,
        ref: "Recipe"
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    }
}, {
    timestamps: true
})

const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    bio: {
        type: String,
        required: false
    },
    pfp_url: {
        type: String,
        required: false
    },
    recipes_liked: [{
        type: ObjectId,
        ref: "Recipe"
    }],
    recipes_rated:[RecipeRatingSchema]
    
}, {
    timestamps: true
})

UserSchema.plugin(AutoIncrement, {id: "user_id_counter", inc_field: 'id'});


module.exports = User = mongoose.model('User', UserSchema);