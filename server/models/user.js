const mongoose = require('mongoose')
const {Schema} = mongoose
const userSchema = new Schema({
    name:String,
    email:{type:String, unique:true},
    password:String
})

// created a model which will have a collection 'User' having schema as 'userSchema'
const User = mongoose.model('User',userSchema)
module.exports = User