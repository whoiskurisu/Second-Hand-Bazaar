// async function fetchData() {
//   try {
//     const value = document.querySelector("#text-1001");
//     const inp = document.querySelector("#inp").value;

//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inp}`);

//     if (!response.ok) {
//       throw new Error("Could not fetch resource");
//     }

//     const data = await response.json();
//     // const pokename = data.name;
//     // console.log(data.name);
//     value.textContent = data.name;
//   } catch (error) {
//     console.error(error);
//   }
// }

const { log } = require("console");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

app.use(express.json()); // To parse the data in req.body so that we can access it in json
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public"))); // So that we dont need to readFile for every respective css, js and images

// Home Page
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/index.html"));
});

// Products route
app.get(`/products/:productID`, (req, res) => {
  // const { productID } = req.params;
  res.sendFile(path.resolve(__dirname, `./public/html/products.html`));
});

// Contact Page
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/contact.html"));
});

// Signup Page
app.get("/signup", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/sign-up.html"));
});

// SignUp functionality
const { authCollection } = require("./mongodb");

app.post("/signup", async (req, res) => {
  const data = {
    FirstName: req.body.fname,
    LastName: req.body.lname,
    Email: req.body.email,
    Password: req.body.password,
  };
  await authCollection.insertMany([data]);

  res.sendFile(path.resolve(__dirname, "./public/html/index.html"));
});

// Login Page
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/log-in.html"));
});

// LogIn functionality
app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ Email: req.body.email });
    if (check.Password === req.body.password) {
      res.sendFile(path.resolve(__dirname, "./public/html/index.html"));
    } else {
      res.send("Wrong Password");
    }
  } catch {
    res.send("Wrong Credentials");
  }
});

// Cart page
app.get("/cart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/myCart.html"));
});

// Add to Cart functionality
const { cartCollection } = require("./mongodb");

app.post("/cart", async (req, res) => {
  const data = req.body;
  data.id = req.get("Referer").slice(-4);

  await cartCollection.create(data);
  res.sendFile(path.resolve(__dirname, "./public/html/myCart.html"));
});

// Delete from cart
app.patch("/cart", async (req, res) => {
  await cartCollection.deleteMany(req.body);
  res.status(201);
});

// Cart API
app.get("/api/cart", async (req, res) => {
  const myData = await cartCollection.find(req.query); // req.query helps to filter the products that we search in url
  res.json(myData);
});

// Wishlist Page
app.get("/wishlist", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "./public/html/wishlist.html"));
});

// Add to Wishlist functionality
const { wishlistCollection } = require("./mongodb");

app.post("/wishlist", async (req, res) => {
  const data = {
    id: req.get("Referer").slice(-4),
    color: req.body.color,
    quantity: req.body.quantity,
    address: req.body.address,
    district: req.body.district,
  };

  await wishlistCollection.insertMany([data]);
  res.send("Wishlist");
});

// Delete from wishlist
app.patch("/wishlist", async (req, res) => {
  let productId = req.body.id;
  await wishlistCollection.deleteMany({ id: productId });
  res.status(201);
});

// Wishlist API
app.get("/api/wishlist", async (req, res) => {
  const myData = await wishlistCollection.find(req.query);
  res.json(myData);
});

// Products API
const products = require("./data");

app.get("/api/products", (req, res) => {
  res.json(products);
});

// Search functionality
app.get("/search", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/search.html"));
});

app.listen(PORT, () => {
  console.log(`Website is live at http://localhost:${PORT}`);
});
