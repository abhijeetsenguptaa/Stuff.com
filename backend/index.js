const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {connection} =require('./configs/connection')
const {adminsRoute} = require('./routes/admin.routes');
const {userRoute} = require('./routes/users.routes')
const {productRoute} = require('./routes/products.routes')
const {purchaseRoute} = require('./routes/purchase.routes')
const {authentication} = require('./middleware/authentication.middleware');
const app = express();
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('Welcome to the Homepage.')
})
app.use('/admin',adminsRoute)
app.use('/users',userRoute);
app.use(authentication)
app.use('/products',productRoute);
app.use('/purchase',purchaseRoute);
app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log('Connected to the Database');
    }catch{
        console.log('Error in connecting to the Database');
    }
    console.log(`Server is running at the port : ${process.env.port}`);
})