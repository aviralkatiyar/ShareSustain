const express=require("express");

const router=express.Router();

router.post("/fooddata",(req,res)=>{
    try{
          
          res.send([global.food_items,global.foodcat])

    }
    catch(err){
            console.log(err.message);
            res.send("server error");
    }
})

module.exports=router;