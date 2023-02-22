const {UsersModel} = require('../models/users.models');


const inputChecker = (req,res,next) => {
    const {name,email,gender,age,password} = req.body;
    if(name!=""&&email!=""&&gender!=""&&age!=""&&password!=""){
        next();
    }else{
        res.send('Fill up all the input fields!!')
    }
}


module.exports = {inputChecker};