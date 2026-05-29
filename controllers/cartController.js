const Cart = require("../models/Cart");
const Product = require("../models/Product");
const mongoose = require("mongoose");

// ADD TO CART
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId) {
      return res.status(400).json({
        message: "Product ID is required",
      });
    }

    if (
      !mongoose.Types.ObjectId.isValid(
        productId
      )
    ) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    const product = await Product.findById(
      productId
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const cartItem = await Cart.create({
      userId: req.user.userId,
      productId,
      quantity: quantity || 1,
    });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({
      message: "Failed to add product",
    });
  }
};

// UPDATE CART QUANTITY
const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;

    const cartItem = await Cart.findById(
      req.params.id
    );

    if (!cartItem) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    if (quantity < 1) {
      return res.status(400).json({
        message:
          "Quantity cannot be less than 1",
      });
    }

    cartItem.quantity = quantity;

    await cartItem.save();

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update cart",
    });
  }
};

// DELETE CART ITEM
const deleteCartItem = async (req, res) => {
  try {
    const cartItem = await Cart.findById(
      req.params.id
    );

    if (!cartItem) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    await Cart.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:
        "Cart item removed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to remove item",
    });
  }
};

module.exports = {
  addToCart,
  updateCartItem,
  deleteCartItem,
};