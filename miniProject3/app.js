const express = require("express");
const app = express();

const userModel = require("./userModel");

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/create", async (req, res) => {
  let newUser = await userModel.create({
    name: "montu",
    userName: "montu005",
    email: "montu@gmail.com",
  });

  res.send(newUser);
});

app.get("/read", async (req, res) => {
  //for all users  
  let users = await userModel.find();
  
  //for one user
//   let users = await userModel.findOne({name: "montu"});

  res.send(users)
});

app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { userName: "mayur005" },
    { name: "mayur marwade" },
    { new: true }
  );
  res.send(updatedUser);
});

app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({userName: "mayur005"})
    res.send(users)
})

app.listen(3000);
