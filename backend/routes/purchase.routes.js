const express = require('express');
const {PurchasedModel} = require('../models/purchased.models');


const purchaseRoute = express.Router();


purchaseRoute.get('/email',async(req,res)=>{
    const email = req.query.email;
    try{
        const data = await PurchasedModel.find({email});
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
module.exports = {purchaseRoute}