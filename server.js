const express = require("express");
const cors = require("cors");


const productRoutes = require(
  "./routes/productRoutes"
);

const authRoutes = require(
  "./routes/authRoutes"
);

const protect = require(
  "./middleware/authMiddleware"
);

const cartRoutes = require(
  "./routes/cartRoutes"
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

app.get(
  "/protected",
  protect,
  (req, res) => {
    res.json({
      message:
        "Protected route accessed",
      user: req.user,
    });
  }
);



app.use("/products", productRoutes);
app.use("/", authRoutes);
app.use("/cart", cartRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

