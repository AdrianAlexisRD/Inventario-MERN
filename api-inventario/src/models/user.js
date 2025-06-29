const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    empleado:{
        type: String ,
        required: true ,
        trim: true
    }

})

module.exports = mongoose.model('user', userSchema);