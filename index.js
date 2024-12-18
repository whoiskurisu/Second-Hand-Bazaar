require('dotenv').config();
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken')
const path = require("path");
const PORT = 5000;
const { connectDB } = require('./mongodb');

app.use(express.json()); // To parse the data in req.body so that we can access it in json
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public"))); // So that we dont need to readFile for every respective css, js and images

// All pages
// Home Page
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/index.html"));
});
// Search page
app.get("/search", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/search.html"));
});
// Contact Page
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/contact.html"));
});
// Signup Page
app.get("/signup", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/sign-up.html"));
});
// Login Page
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/log-in.html"));
});
// Cart page
app.get("/cart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/myCart.html"));
});
// Products route
app.get(`/products/:productID`, (req, res) => {
  res.sendFile(path.resolve(__dirname, `./public/html/products.html`));
});
// Wishlist Page
app.get("/wishlist", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/myWishlist.html"));
});
// Adding Product Page
app.get("/addProduct", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/addProduct.html"));
});


// GET APIs
// Cart Data
const { cartCollection } = require("./mongodb");
app.get("/api/v1/cart", async (req, res) => {
  const myData = await cartCollection.find();
  res.json(myData);
});

// Wishlist Data
const { wishlistCollection } = require("./mongodb");
app.get("/api/v1/wishlist", async (req, res) => {
  const myData = await wishlistCollection.find(req.query);
  res.json(myData);
});

// Product Data
const { productCollection } = require('./mongodb')

app.get("/api/v1/products", async (req, res) => {
  const products = await productCollection.find();
  const { search } = req.query;

  if (!search) {
    return res.json(products);
  }

  const searchValue = search.toLowerCase().replace(/\s/g, "");
  const filteredResult = products.filter(item =>
    item.name.toLowerCase().replace(/\s/g, "").startsWith(searchValue)
  );

  return res.json(filteredResult);

});

app.get("/api/v1/products/:productID", async (req, res) => {
  const products = await productCollection.find();
  const { productID } = req.params;
  const singleProduct = products.find((x) => x.id == productID);

  if (!singleProduct) {
    res.status(404).send('The product does not exist')
  }
  return res.json(singleProduct)
})


// POST APIs
// Add to Cart
app.post("/api/v1/cart", async (req, res) => {
  const data = req.body;
  await cartCollection.create(data);
});

// Add to Wishlist
app.post("/api/v1/wishlist", async (req, res) => {
  const data = req.body;
  await wishlistCollection.create(data);
});

// Collection for user credentials
const { authCollection } = require("./mongodb");

// SignUp functionality
app.post("/api/v1/signup", async (req, res) => {
  const check = await authCollection.findOne({ Email: req.body.Email }) // This email verification is not yet completed
  if (check == null) {
    await authCollection.create(req.body);
    return res.status(200).json({ success: true }); // JSON response
  }
  else {
    res.json({ success: false, message: "The email is already linked with another account." });
  }
});

// Login functionality
app.post("/api/v1/login", async (req, res) => {
  try {
    const user = await authCollection.findOne({ Email: req.body.email });
    if (user.Password === req.body.password) {

      // Assigning token / Setting cookie
      const token = jwt.sign({ email: user.Email }, process.env.ACCESS_TOKEN_SECRET);
      res.cookie("token", token)

      // Redirecting to home page after successful login
      res.redirect('/')
    } else {
      res.send("Wrong Password");
    }
  } catch {
    res.send("Wrong Credentials");
  }
});


// DELETE APIs
// Delete from Cart
app.delete("/api/v1/cart/:id", async (req, res) => {
  const { id } = req.params;
  await cartCollection.findOneAndDelete({ _id: id });
});

// Delete from Wishlist
app.delete("/api/v1/wishlist/:id", async (req, res) => {
  const { id } = req.params;
  await wishlistCollection.findOneAndDelete({ _id: id });
});


// In progress
// Adding Products API
const { addProductCollection } = require("./mongodb");
const { log } = require('console');

app.post("/api/v1/addProduct", async (req, res) => {
  const data = req.body;
  await addProductCollection.create(data);
})

// Add Product Data
app.get("/api/v1/addProduct", async (req, res) => {
  const myData = await addProductCollection.find();
  res.json(myData);
});


// Console log only if the DB is connected to the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
      console.log(`Website is live at http://localhost:${PORT}`);
    });

  } catch (error) {
    console.log(error)
  }
}

start(); // Calling function