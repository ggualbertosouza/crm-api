import { DB_CONNECT } from "@/config/config.js";
import mongoose from "mongoose";

const URI = DB_CONNECT as string;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Connection failed", error);
    process.exit(1);
  }
};

export default connectDb;
