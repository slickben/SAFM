const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const cors = require("cors")

const mongoose = require('mongoose');

const route = require('./router/accout.js')

// mongodb+srv://slickben:OOdjbqlfevhjpYEk@cluster0-44ijz.mongodb.net/test?retryWrites=true&w=majority
// mongodb+srv://benson:a2mE.64KdzZf@cluster0-tffeu.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://benson:a2mE.64KdzZf@cluster0-tffeu.mongodb.net/test?retryWrites=true&w=majority")
    .then( () => {
        console.log("connection to mongoDB atlas suscessful");
    })
    .catch( (error) => {
        console.log("unable to connect to mongoDB atlas");
        console.error(error);
    });
app.use(cors());

app.use(bodyparser.json());

app.use("/api", route)


module.exports = app;