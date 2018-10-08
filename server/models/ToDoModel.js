const mongoose = require("mongoose");

var Todo = mongoose.model("Todo",{
    name : {
        type: String,
        required: true
    },
    completed : {
        type: Boolean,
        default: false
    },
    star : {
        type: Boolean,
        default: false
    },
    create : {
        type: Date,
        default : Date.now() 
    }
})

module.exports = {Todo}