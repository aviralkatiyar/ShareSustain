
const express=require("express");

const router=express.Router();
const order=require("../models/orders")



router.post('/myrequestdata',async(req,res)=>{
    try{

        let mydata = await order.findOne({'email':req.body.email})
        res.json({orderdata:mydata})

    }
    catch(error){
        res.send("Server Error", error.message)
    }
})
module.exports = router;