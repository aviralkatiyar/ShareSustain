const mongoose=require("mongoose")
const {Schema}=mongoose;

const RequestSchema=new Schema({

   
    email:{
        type:String,
        required:true
    }
    ,
    request_data:
    {
        type:Array,
        required:true,
    },
    


});




module.exports=mongoose.model("order",RequestSchema);