const mongoose = require("mongoose");

const adminsSchema = mongoose.Schema(
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

const AdminsModel = mongoose.model("admins", adminsSchema);



module.exports = {AdminsModel} ;