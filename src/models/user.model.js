const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    //   lastName: String,
    email: { type: String, required: true, unique: true },
     gender: {
       type: String,
       enum: ["Male", "Female","Other"],
        required:true,
    },
    // birthdate: { type: Date, required: false }, // new Date()
    age: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("validinfos", userSchema);
