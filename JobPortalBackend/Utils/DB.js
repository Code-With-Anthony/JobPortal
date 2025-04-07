import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(`Error in DB connection: ${error}`);
    process.exit(1);
  }
};

export default ConnectDB;
