const mongoose = require('mongoose');


const categorySchema = mongoose.Schema({
    "image":String,
    "category":String,
    "title":String
})



const CategoryModel = mongoose.Model('categories',categorySchema);