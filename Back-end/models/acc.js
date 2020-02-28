const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const userShema = new mongoose.Schema({
    name: String,  
    email: String,
    password: {type: String, select: false},
    
})

userShema.plugin(passportLocalMongoose, {usernameField: 'email'})
module.exports = mongoose.model('User', userShema)