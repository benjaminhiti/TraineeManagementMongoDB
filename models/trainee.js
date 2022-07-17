const mongoose = require('mongoose');


const traineeSchema = new mongoose.Schema({
   firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    stack:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber: String
})

const trainee = mongoose.model('trainee',traineeSchema)

module.exports = trainee