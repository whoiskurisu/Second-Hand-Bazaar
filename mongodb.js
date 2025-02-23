const mongoose = require("mongoose");

// Connecting to DB
const connectDB = (url)=>{
return mongoose
.connect(url)
}


// Schema for products
const productSchema = new mongoose.Schema({
  id: Number // Didn't define other fields (Had to define id because of the schema conflict betwn id and _id)
}, { strict: false })

// Collection for products
const productCollection = mongoose.model("product-data", productSchema);


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
    type: Number,
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
  email: {
    type: String,
    required: true,
    trim: true,
  },
});

// Collection for cart and wishlist
const cartCollection = new mongoose.model("cart-data", cart_wlSchema);
const wishlistCollection = new mongoose.model("wishlist-data", cart_wlSchema);


// Schema for addProduct
const addProduct = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
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
  image: {
    type: String,
    required: true,
    trim: true,
  }
});

// Collection for addProduct
const addProductCollection = new mongoose.model("add-product-data", addProduct);

// Exporting
module.exports = { connectDB, productCollection, authCollection, cartCollection, wishlistCollection, addProductCollection };

