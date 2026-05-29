const express = require("express");
const cors = require("cors");


const productRoutes = require(
  "./routes/productRoutes"
);

const authRoutes = require(
  "./routes/authRoutes"
);

require("dotenv").config();

const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "ShoppyGlobe API Running",
  });
});




app.use("/products", productRoutes);
app.use("/", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

