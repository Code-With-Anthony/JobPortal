import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import ConnectDB from "./Utils/DB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 1111;

const corsOption = {
  origin: ["http://localhost:1111"],
  credentials: true,
};
app.use(cors(corsOption));
app.use(express.json());

// Routes

// MongoDB connection
ConnectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
