import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import ConnectDB from "./Utils/DB.js";

import UserRoutes from "./Routes/UserRoutes.js";
import CompanyRoutes from "./Routes/CompanyRoutes.js";

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 1111;

const corsOption = {
  origin: ["http://localhost:1111"],
  credentials: true,
};

// Middlewares
app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", UserRoutes);
app.use("/api/company", CompanyRoutes);

// MongoDB connection
ConnectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
