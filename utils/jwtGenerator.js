// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken"
require('dotenv').config();

function jwtGenerator(user_id) {
    const payload = {
        user: user_id
    }
   return jwt.sign(payload, process.env.jwtSecret, {expiresIn: process.env.jwtaccessexpiry  })
}

module.exports =jwtGenerator;