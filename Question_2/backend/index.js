const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const Product = require("./model/product");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Products");
}

app.use(
  cors({
    origin: [process.env.FRONTEND],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.post("/products/add", async (req, res) => {
  const { name, price, category, inStock } = req.body;
  try {
    if(!name || !price || !category || inStock === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (price <= 0) {
      return res.status(400).json({ message: "Price must be a positive number" });
    }
    const product = new Product({
      name,
      price,
      category,
      inStock,
    });
    await product.save();
    res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding product" });
  }  
});
app.get("/products/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
    console.log(error);
    
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
