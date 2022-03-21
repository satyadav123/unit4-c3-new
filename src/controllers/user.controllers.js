const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/user.model");

const router = express.Router();

router.post("/",
body("firstName")
.trim()
.not()
.isEmpty()
.bail()
.withMessage("First Name cannot be empty")
.isLength({ min: 4 })
.withMessage("First Name must be at least 4 characters"),

body("lastName")
.trim()
.not()
.isEmpty()
.bail()
.withMessage("last Name cannot be empty")
.isLength({ min: 4 })
.withMessage("last Name must be at least 4 characters"),
body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),
    body("age")
    .not()
    .isEmpty()
    .withMessage("Age cannot be empty")
    .isNumeric()
    .withMessage("Age must be a number between 1 and 120")
    .custom((val) => {
      if (val < 1 || val > 100) {
        throw new Error("Incorrect age provided");
      }
      return true;
    }),
    body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),
    body("password")
    .not()
    .isEmpty()
    .withMessage("password cannot be empty")
    .withMessage("password should be more than 6"),
    
async(req,res)=>{
    try {
        const users=await User.create(req.body);
        
        return res.send(users);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
});
module.exports = router;
