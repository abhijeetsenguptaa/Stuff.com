const express = require('express');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const {AdminsModel} = require('../models/admin.models');
const {UsersModel} = require('../models/users.models');
const {checkEmail} = require('../middleware/checkEmail.middleware');
const {inputChecker} = require('../middleware/inputChecker.middleware');



const adminsRoute = express.Router();


adminsRoute.get('/',async(req,res)=>{
    try{
        const data = await UsersModel.find();
        res.send(data)
    }catch{
        res.send('Something went Wrong')
    }
})

adminsRoute.delete('/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        await UsersModel.findByIdAndDelete({_id:id});
        res.send('User Deleted')
    }catch{
        res.send('Error in deleting a user!')
    }
})
adminsRoute.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await AdminsModel.find({email});
        if(user.length==1){
            bcrypt.compare(password,user[0].password,async(err,result)=>{
                if(result){
                    const token = jsonwebtoken.sign({email:user[0].email},process.env.key,{expiresIn:"1hr"});
                    res.send({'email':email,'token':token});
                }else{
                    res.send('Wrong Credentials')
                }
            })
        }
    }catch{
        res.send('Error in Login')
    }
})

adminsRoute.use(inputChecker)
adminsRoute.use(checkEmail);
adminsRoute.post('/register',async(req,res)=>{
    const {name,email,gender,age,password} = req.body;
    try{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.send('Error in encrypting the password')
            }else{
                const userData = new AdminsModel({name,email,gender,age,password:hash});
                userData.save();
                res.send('New User has been registered')
            }
        })
    }catch{
        res.send('Error In Registration')
    }
})



module.exports = {adminsRoute};