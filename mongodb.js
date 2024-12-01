const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/2ndHBdatabase")

  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(() => {
    console.log("Failed to connect");
  });

// Schema for signup

const signupSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
    trim: true,
  },
  LastName: {
    type: String,
    required: true,
    trim: true,
  },
  Email: {
    type: String,
    required: true,
    trim: true,
  },
  Password: {
    type: String,
    required: true,
    trim: true,
  },
});

// Collection for signup

const authCollection = new mongoose.model("signup-datas", signupSchema);

// Schema for cart and wishlist

const cart_wlSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  district: {
    type: String,
    required: true,
    trim: true,
  },
});

// Collection for cart and wishlist

const cartCollection = new mongoose.model("cart-datas", cart_wlSchema);
const wishlistCollection = new mongoose.model("wishlist-datas", cart_wlSchema);

module.exports = { authCollection, cartCollection, wishlistCollection };
