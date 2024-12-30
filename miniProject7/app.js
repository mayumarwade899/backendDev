const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/posts");

app.get("/", (req, res) => {
    res.send("Heyy!");
})

app.get("/create", async (req, res) => {
    let user = await userModel.create({
        username: "mayur",
        email: "mayur@gmail.com",
        age: 25
    })

    res.send(user)
})

app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
        postdata: "Hello, this is mayur's data!",
        user: "6771918380a89f013d57e35b",
    })

    let user = await userModel.findOne({_id: "6771918380a89f013d57e35b"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user})
})

app.listen(3000);