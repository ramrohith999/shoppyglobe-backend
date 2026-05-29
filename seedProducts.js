require("dotenv").config();

const mongoose = require("mongoose");

const Product = require("./models/Product");

const connectDB = require("./config/db");

const seedProducts = async () => {
  try {
    await connectDB();

    await Product.deleteMany();

    await Product.insertMany([
      {
        name: "iPhone 15",
        price: 79999,
        description: "Apple smartphone",
        stockQuantity: 25,
      },

      {
        name: "Samsung S24",
        price: 69999,
        description: "Samsung flagship",
        stockQuantity: 20,
      },

      {
        name: "MacBook Air",
        price: 99999,
        description: "Apple laptop",
        stockQuantity: 10,
      },
    ]);

    console.log("Products inserted");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedProducts();