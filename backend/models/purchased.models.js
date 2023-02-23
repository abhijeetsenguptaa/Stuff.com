const mongoose = require('mongoose');

const purchasedSchema = mongoose.Schema({
    "name":String,
    "email":String,
    "price":Number,
    "purchased_by":String
})


const PurchasedModel = mongoose.model('purchase_list',purchasedSchema);



module.exports = {PurchasedModel};