const mongoose = require('mongoose');

const purchasedSchema = mongoose.Schema({
    "name":String,
    "email":String,
    "price":Number,
    "category":String,
    "purchased_on":String,
    "purchased_by":String
})


const PurchasedModel = mongoose.model('purchase_list',purchasedSchema);



module.exports = {PurchasedModel};