const express = require('express');
const {ProductsModel} = require('../models/products.models');

const productRoute = express.Router();

productRoute.get('/' , async(req,res)=>{
    try{
        const data = await ProductsModel.find();
        res.send(data);
    }catch{
        res.send('Something went Wrong!')
    }
})

productRoute.get('/category',async(req,res)=>{
    const category = req.query.category;
    try{
        const data = await ProductsModel.find({category});
        res.send(data);
    }catch{
        res.send('Product Not Found!!')
    }
})

productRoute.get('/backpacks',async(req,res)=>{
    try{
        const data = await ProductsModel.find({"category":"Backpacks"});
        res.send(data);
    }catch{
        res.send('No Backpacks Found')
    }
})

productRoute.get('/smartwatch',async(req,res)=>{
    try{
        const data = await ProductsModel.find({"category":"Smartwatch"});
        res.send(data);
    }catch{
        res.send('No Smartwatch Found')
    }
})

productRoute.get('/messengerbags',async(req,res)=>{
    try{
        const data = await ProductsModel.find({"category":"Messenger Bags"});
        res.send(data);
    }catch{
        res.send('No Messenger Bags Found')
    }
})



productRoute.post('/add', async(req,res)=>{
    const data = req.body;
    try{
        const productData = new ProductsModel(data);
        await productData.save();
        res.send(await productData.save());
    }catch{
        res.send('Error In Adding A Product')
    }
})


productRoute.patch('/update/:id', async(req,res)=>{
    const data = req.body;
    const id = req.params.id;
    try{
        const  updatedData = await ProductsModel.findByIdAndUpdate({_id:id},data);
        res.send(updatedData);
    }catch{
        res.send('Error In Updating A Product')
    }
})
productRoute.delete('/delete/:id', async(req,res)=>{
    const id = req.params.id;
    try{
        await ProductsModel.findByIdAndDelete({_id:id})
        res.send('Item Deleted')
    }catch{
        res.send('Error In Delete A Product')
    }
})




module.exports = {productRoute};
