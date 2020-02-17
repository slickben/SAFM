const bcrypt = require("bcrypt")
const Account = require("../models/acc.js")
// const jwt = require("jsonwebtoken")


exports.createAccount = (req, res, next) => {
    console.log(req.body)
    bcrypt.hash(req.body.password, 10).then( (hash) => {
        console.log(hash)
        const user = new Account({
            email: req.body.email,
            password: hash,
            name: req.body.name
        })
        user.save().then( () => {
            res.status(201).json({
                message: "User Added Successful"
            })
        }).catch( (error) =>{
            res.status(500).json({
                error: error
            })
        })
    })

};
