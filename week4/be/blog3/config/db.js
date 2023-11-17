const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI; // access database URI from .env


const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI);
  console.log(`Connected to database`);
};

module.exports = connectDB;
