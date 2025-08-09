const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error(err));

const ProductSchema = new mongoose.Schema({
  faceShape: String,
  glass: [
    {
      type: { type: String },
      image: String,
    },
  ],
});

const Product = mongoose.model("Product", ProductSchema);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Eyewear API" });
});

app.get("/api/products", async (req, res) => {
  const { faceShape } = req.query;
  try {
    if (faceShape) {
      // Case insensitive search for specific face shape
      const products = await Product.find({ 
        faceShape: { $regex: new RegExp(faceShape, 'i') }
      });
      console.log('Found products:', products); // Debug log
      res.json(products);
    } else {
      // If no face shape specified, return all products
      const products = await Product.find();
      console.log('All products:', products); // Debug log
      res.json(products);
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error fetching products");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,"0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
