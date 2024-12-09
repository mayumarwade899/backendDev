const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("middleware excuted!!");
    next()
})

app.get("/", function(req, res) {
    res.send("Welcome to Backend dev")
})

app.get("/profile", (req, res, next)=> {
    console.log("profile middleware")
    next();
    // next(new Error("not implemented"))
},
(req, res) =>{
    res.send("Welcome Mayur!")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something went wrong")
})

app.listen(3000);