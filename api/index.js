const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors=require("cors");
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose.connect("mongodb+srv://admin:admin@cluster0.zvwn3yq.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected To MongooseDB!");
}).catch((err)=>{
    console.log("Error Connecting To MongoDB! ",err);
});


app.listen(port, ()=>{
    console.log("Server is running on port 8000!");
});
