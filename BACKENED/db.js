const mongoose = require('mongoose');

const mongoURI = "mongodb://0.0.0.0:27017/dontwastefood";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('connected');
        
        const db = mongoose.connection.db;
        const fetched_data = db.collection("food_items");
        
        const data = await fetched_data.find({}).toArray();
        const foodCategory = mongoose.connection.db.collection("foodcategory")
        const ds=await  foodCategory.find({}).toArray();
        
       global.food_items=data;
       global.foodcat=ds;
       
       

       
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

module.exports = mongoDB;
