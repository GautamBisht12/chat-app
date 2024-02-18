import mongoose from "mongoose";

export const connect = async () => {
  const URI = process.env.MONGO_URI;
  try {
    await mongoose.connect(URI).then(() => {
      console.log("Database Connected");
    });
  } catch (error) {
    console.log("Error connecting to databse :", error.message);
  }
};
