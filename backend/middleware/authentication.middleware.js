const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();


const authentication = (req,res,next) => {
    const token = req.headers.authorization;
    if(token){
        jsonwebtoken.verify(token,process.env.key,(err,decode)=>{
            if(decode){
                // userID = decode.userID;
                // req.body.userID = userID;
                email = decode.email;
                req.body.added_by = email;
                req.body.purchased_by = email;
                next();
            }
        })
    }else{
        res.send('Protected Route : User need to login');
    }
}

module.exports = {authentication}