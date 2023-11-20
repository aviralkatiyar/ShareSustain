const mongoose=require("mongoose")
const {Schema}=mongoose;

const PostSchema=new Schema({

    CategoryName:{
        type:String,
        required:true
    },
    item_name:{
        type:String,
        required:true
    },
    
quantity
:{
        type:Number,
        required:true
    }
    ,
   
description
:
    {
        type:String,
        required:true
    },
    image_url
    :
    {
        type:String,
        required:true
    }


});

module.exports=mongoose.model("food_items",PostSchema);