const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NutrientSchema = new Schema({
    "calories": {
        type: Number,
        required: false,
        default: 0
    },
    "carbohydrates_g": {
        type: Number,
        required: false, default: 0
    },
    "fat_g": {
        type: Number,
        required: false, default: 0
    },
    "saturated_fat_g": {
        type: Number,
        required: false, default: 0
    },
    "cholesterol_mg": {
        type: Number,
        required: false, default: 0
    },
    "protein_g": {
        type: Number,
        required: false, default: 0
    },
    "sugars_g": {
        type: Number,
        required: false, default: 0
    },
    "protein_g": {
        type: Number,
        required: false, default: 0
    },
    "dietary_fiber_g": {
        type: Number,
        required: false, default: 0
    },
    "sodium_mg": {
        type: Number,
        required: false, default: 0
    },
    "calories_from_fat": {
        type: Number,
        required: false, default: 0
    },
    "calcium_mg": {
        type: Number,
        required: false, default: 0

    },
    "iron_mg": {
        type: Number,
        required: false, default: 0
    },
    "magneisum_mg": {
        type: Number,
        required: false, default: 0

    },
    "potassium_mg": {
        type: Number,
        required: false, default: 0

    },
    "vitamin_a_iu_IU": {
        type: Number,
        required: false, default: 0

    },
    "niacin_equivalents_mg": {
        type: Number,
        required: false, default: 0

    },
    "vitamin_c_mg": {
        type: Number,
        required: false, default: 0

    },
    "folate_mcg": {
        type: Number,
        required: false, default: 0

    },
    "thiamin_mg": {
        type: Number,
        required: false, default: 0
    }
}, {
    timestamps: true
})

module.exports = Nutrients = mongoose.model('Nutrients', NutrientSchema)