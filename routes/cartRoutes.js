const express = require("express");

const router = express.Router();

const protect = require(
  "../middleware/authMiddleware"
);

const {
  addToCart,
  updateCartItem,
  deleteCartItem,
} = require(
  "../controllers/cartController"
);

router.post("/", protect, addToCart);

router.put(
  "/:id",
  protect,
  updateCartItem
);

router.delete(
  "/:id",
  protect,
  deleteCartItem
);

module.exports = router;