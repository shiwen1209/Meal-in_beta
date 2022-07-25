const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ObjectId = Schema.ObjectId
const ImageSchema = new Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
}, {
    timestamps: true
})

module.exports = Image = mongoose.model('Image', ImageSchema);