const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

app.use(cookieParser())

//cookies
// app.get("/", (req, res) => {
//     res.cookie("name", "mayur");
//     res.send("cookie saved!!")
// })

//encrypt
// app.get("/", (req, res) => {
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("pokemon", salt, function(err, hash) {
//             console.log(hash);
            
//         });
//     });
// })

//dcrypt
// app.get("/", (req,res) => {
//     bcrypt.compare("pokemon", "$2b$10$cPIqSnaKP6EY5jjf1MvJo.APb/g.g7ehZRTkwz./MzlIUf18/boKC", (err, result) => {
//         console.log(result);
        
//     })
//     res.send("working")
// })

app.get("/", (req, res) => {
    let token = jwt.sign({email: "mayur@gmail.com"}, "secret");
    res.cookie("token", token)
    console.log(token);
    res.send("done!!")
})

app.get("/read", (req, res) => {
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
    
})

app.listen(3000)