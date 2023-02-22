const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    gender: String,
    age: Number,
    password: String,
  },
  {
    versionKey: false,
  }
);

const UsersModel = mongoose.model("users", usersSchema);



module.exports = {UsersModel} ;