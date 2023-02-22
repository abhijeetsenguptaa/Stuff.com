const {UsersModel} = require('../models/users.models');



const checkEmail = async(req,res,next) => {
    const {email} = req.body;
    try{
        const user = await UsersModel.find({email});
        if(user.length==1){
            res.send('Email-id already Registered')
        }else{
            next();
        }
    }catch{
        res.send('Something went Wrong!')
    }
}


module.exports = {checkEmail};