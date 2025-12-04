
import mongoose from "mongoose";


export async function connectDB() {
  const url = "mongodb://localhost:27017/food_sme_app"
  try {
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection;
    }

    await mongoose.connect(process.env.MONGO_URI || url);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
}
