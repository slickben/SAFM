const bcrypt = require("bcrypt")
const User = require("../models/acc.js")
const passport = require('passport')


exports.createAccount = (req, res, next) => {
    const {email, password, name} = req.body
    const userData = {
        name: name,
        email: email
    }
    console.log(userData)
    User.register( userData, password, (err, user) => {
        console.log(password)
        if(err){
            console.log( "ERROR:" + err)
            req.flash('error_msg', "ERROR:" + err)
        }
        
        passport.authenticate('local') (res, req, () => {
            console.log(user +"account created")
            req.flash('sucess_msg', "account created")
        })
    })

    // bcrypt.hash(req.body.password, 10).then( (hash) => {
    //     console.log(hash)
    //     const user = {
    //         email: req.body.email,
    //         password: hash,
    //         name: req.body.name
    //     }
    //     user.save().then( () => {
    //         res.status(201).json({
    //             message: "User Added Successful"
    //         })
    //     }).catch( (error) =>{
    //         res.status(500).json({
    //             error: error
    //         })
    //     })
    // })

};
