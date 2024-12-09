const path = require('path')

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("index")
})

app.get("/profile/:username", function(req, res) {
    res.send(`Welcom, ${req.params.username}!!`);
})

app.get("/author/:username/:age", function(req, res) {
    res.send(`Welcome ${req.params.username}, you are ${req.params.age} year old!`);
})

app.listen(3000, ()=> {
    console.log("Host 3000 is running....");
})