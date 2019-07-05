const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    "fname": {
        type: String,
        trim: true,
        required: [true, 'First Name missing']
    },
    "lname": {
        type: String,
        trim: true,
        required: [true, 'Last name missing']
    },
    "email": {
        type: String,
        trim: true,
        required: [true, 'Email missing']
    },
    "password": {
        type: String,
        trim: true,
        required: [true, 'Password missing']
    }
})




const userModel = mongoose.model('userCollection', userSchema);
module.exports = userModel;