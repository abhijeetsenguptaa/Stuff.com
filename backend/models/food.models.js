const mongoose = require('mongoose');


const foodSchema = mongoose.Schema({
    "image":String,
    "title":String,
    "price":String,
    "description":String,
    "quantity":String,
    "MRP":String,
    "discount":String
})



const FoodModel = mongoose.Model('foods',foodSchema);