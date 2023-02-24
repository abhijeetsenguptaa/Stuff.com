const mongoose = require('mongoose');

const purchasedSchema = mongoose.Schema({
    "name":String,
    "price":Number,
    "category":String,
    "purchased_on":String,
    "purchased_by":String
},{
    versionKey:false
})


const PurchasedModel = mongoose.model('purchase_list',purchasedSchema);



module.exports = {PurchasedModel};