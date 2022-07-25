const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

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
    }
}, {
    timestamps: true
})

UserSchema.plugin(AutoIncrement, {id: "user_id_counter", inc_field: 'id'});


module.exports = User = mongoose.model('User', UserSchema);