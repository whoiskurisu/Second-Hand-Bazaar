const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
dotenv.config();

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const token = req.cookies.auth_token;

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.redirect('/login');
      }
      return res.status(403).json({ message: "Invalid token" });
    }
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = {
  authenticateToken,
};