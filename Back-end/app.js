const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const cors = require("cors")

const mongoose = require('mongoose');
const path = require('path')
const passport = require('passport')
const dotenv = require('dotenv')
const flash = require('connect-flash')
const session = require('express-session')
const localStratige = require('passport-local').Strategy

//user model
const User = require('./models/acc')

dotenv.config({path: './config.env'})

mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => { console.log("we are connected")}).catch(err => console.log(err))

//middleware for session
app.use(session({
    secret: 'SAFM login/sign up application',
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStratige({usernameField: 'email'}, User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// middleware for flash messages
app.use(flash())

// setting globaling 
app.use( (req, res, next) => {
     res.locals.sucess_msg = req.flash(('sucess_msg'));
     res.locals.error_msg = req.flash(('error_msg'));
     next()
})

const route = require('./router/accout.js')

// mongodb+srv://slickben:OOdjbqlfevhjpYEk@cluster0-44ijz.mongodb.net/test?retryWrites=true&w=majority
// mongodb+srv://benson:a2mE.64KdzZf@cluster0-tffeu.mongodb.net/test?retryWrites=true&w=majority
// mongoose.connect("mongodb+srv://benson:a2mE.64KdzZf@cluster0-tffeu.mongodb.net/test?retryWrites=true&w=majority")
//     .then( () => {
//         console.log("connection to mongoDB atlas suscessful");
//     })
//     .catch( (error) => {
//         console.log("unable to connect to mongoDB atlas");
//         console.error(error);
//     });
app.use(cors());

app.use(bodyparser.json());

app.use("/api", route)

const port = process.env.PORT

app.listen(port, () => {
    console.log("serve runing post ", port)
})


// module.exports = app;