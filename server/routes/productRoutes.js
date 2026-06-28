import express from "express";
import Product from "../models/Product.js";

const router = express.Router();


// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
});


// Add product
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.json(product);

  } catch (error) {
    res.status(500).json({
      message: "Product not created"
    });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(product);

  } catch (error) {
    res.status(500).json({
      message: "Update failed"
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product deleted"
    });

  } catch (error) {
    res.status(500).json({
      message: "Delete failed"
    });
  }
});

export default router;