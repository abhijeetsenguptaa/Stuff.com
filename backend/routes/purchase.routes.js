const express = require('express');
const {PurchasedModel} = require('../models/purchased.models');
const { productRoute } = require('./products.routes');


const purchaseRoute = express.Router();


purchaseRoute.get('/purchased_by',async(req,res)=>{
    const purchased_by = req.query.purchased_by;
    try{
        const data = await PurchasedModel.find({purchased_by});
        res.send(data);
    }catch{
        res.send('No Data Available')
    }
})


purchaseRoute.post('/add',async(req,res)=>{
    const item = req.body;
    try{
        const data = new PurchasedModel(item);
        await data.save();
        res.send(data);
    }catch{
        res.send('Something went Wrong!')
    }
})


purchaseRoute.delete('/delete/:id', async(req,res)=>{
    const id = req.params.id;
    try{
        await PurchasedModel.findByIdAndDelete({_id:id})
        let remainingData = await PurchasedModel.find();
        res.send(remainingData)
    }catch{
        res.send('Error In Delete A Product')
    }
})
module.exports = {purchaseRoute}