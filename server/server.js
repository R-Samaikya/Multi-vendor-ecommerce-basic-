import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
dotenv.config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/orders", orderRoutes);

// Test API
app.get("/", (req, res) => {
  res.send("Multi Vendor Ecommerce API running");
});


// Routes
app.use("/api/products", productRoutes);

app.use("/api/auth", authRoutes);


// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});