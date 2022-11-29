const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const home = require("./routers/home");
const app = express();

require('dotenv').config();

const cors = require("cors");
app.use(cors({ origin: true }));


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const port = process.env.PORT || 4000;

app.use('/',home)



mongoose.connect('mongodb+srv://Registration:2111087@cluster0.wexksa1.mongodb.net/mernstacks?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true}).then(()=>{
        console.log("connected");
        app.listen(port);
    }).catch((err)=>{
        console.log(err);
    })

    // const db =mongoose.connection;

    // db.on('error',() =>{console.log(error);})
    // db.once('open',() =>{
    //     console.log("connected");
    //     app.listen(port);})
    
app.use(express.static('views'));
app.use('/images', express.static('images'));