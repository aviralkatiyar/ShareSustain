const express= require("express");
const food_items=require("../models/post")

const router=express.Router();

router.post("/postdata",async(req,res)=>{
    try{
        await 
        food_items.create({
           
CategoryName:req.body.CategoryName,
item_name:req.body.item_name,

quantity:req.body.quantity,



description:req.body.quantity,
image_url:req.body.image_url



          
    
    
        })
    res.json({success:true});
      }
      catch(err){
       console.log(err);
       res.json({success:false});
      }
    })
    module.exports = router;