// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken"

require("dotenv").config();

//this middleware will on continue on if the token is inside the local storage

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("token");

  // Check if not token
  if (!token) {
    return res.status(403).json({ msg: "authorization denied" });
  }

  // Verify token
  try {
    //it is going to give use the user id (user:{id: user.id})
    const verify = jwt.verify(token, process.env.jwtSecret);

    req.user = verify.user;
    next(); // used tp passthe data
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};