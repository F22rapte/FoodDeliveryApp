const mongoose = require("mongoose");
const mongoURL = "mongodb+srv://riteshverma832:mongoose45@cluster0.xcytfqi.mongodb.net/GooFood?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, { useNewUrlParser: true });

    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_item");
    const foodCategory = await mongoose.connection.db.collection("foodCategory");

    const data = await fetched_data.find({}).toArray();
    const catData = await foodCategory.find({}).toArray();

    global.food_item = data;
    global.foodCategory = catData;
    
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;
