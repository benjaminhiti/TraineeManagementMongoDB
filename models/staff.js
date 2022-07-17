const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
   firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    role:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber: String
})

const staff = mongoose.model('staff',staffSchema)

module.exports = staff