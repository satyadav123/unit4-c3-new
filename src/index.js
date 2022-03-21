const express=require("express")
const app=express()
 module.exports=app
 const usersController = require("./controllers/user.controllers");

app.use(express.json());

app.use("/users", usersController); // http://localhost:5000/users will go to usersController
