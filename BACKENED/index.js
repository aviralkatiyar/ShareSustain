const express=require("express");
const app=express();
const mongoDB=require("./db")
const cors=require("cors")


const port=5000;

app.use((req,res,next)=>{
res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
);
next();
})
mongoDB()
app.get("/",(req,res)=>{
    res.send("Hello");
})
app.use(express.json());

app.use('/api',require("./routes/CreateUser"));
app.use('/api',require("./routes/Displaydata"));
app.use('/api', require("./routes/order_data"));
app.use('/api',require("./routes/myorderdata"));

app.listen(port,()=>{
    console.log(`listening at ${port}`);
})