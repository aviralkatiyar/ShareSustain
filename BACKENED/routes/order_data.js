const express=require("express");

const router=express.Router();
const order=require("../models/orders")



router.post('/orderdata', async (req, res) => {
    let data = req.body.request_data
    await data.splice(0,0,{O_date:req.body.request_date})
    

   
    let eId = await order.findOne({ 'email': req.body.email })    
    console.log(eId)
    if (eId===null) {
        try {
            console.log(data)
            console.log("1231242343242354",req.body.email)
            await order.create({
                email: req.body.email,
                request_data:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await order.findOneAndUpdate({email:req.body.email},
                { $push:{request_data: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send(404)("Server Error", error.message)
        }
    }
})




module.exports = router;