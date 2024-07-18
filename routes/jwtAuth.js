// const router = require("express").Router();
import express from "express"
 const router=express.Router()

const pool = require("../database/db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization"); 
// registering

router.post("/register", validInfo, async (req, res) => {
    try {
        // 1. destructure the req.body (name, email, password)

        const { name, email, password } = req.body;

        // 2. check if user exist (if user exist then throw error)

        const user = await pool.query("select * from users where user_email = $1", [
            email,
        ]);

        // res.json(user.rows);

        if (user.rows.length !== 0) {
            return res.status(401).send("User already exist");
        }

        // 3. Bcrypt the user password

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPassword = await bcrypt.hash(password, salt);

        // 4. enter the new user inside our database

        const newUser = await pool.query(
            "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, bcryptPassword]
        );
        // res.json(newUser.rows[0]);
        // 5. genrating our jwt token

        const token = jwtGenerator(newUser.rows[0].user_id);

       return  res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// login route

router.post("/login", validInfo, async(req,res)=>{
    try{


        // console.log(validInfo);
        // 1. destructure the req.body

        const {email, password} = req.body;
        // 2. check if user doesn't exist (if not then we throw error)
        
        const user = await pool.query("Select * from users where user_email = $1",[
            email
        ]);

        if (user.rows.length === 0){
            return res.status(401).json("Password or Email is incorrect");
        }
        
        // 3. check if incoming password is the same the database password
        
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

        if(!validPassword) {
            return res.status(401).json("Password is incorrect");
        }
        
        // 4. give the jwt token


        const token = jwtGenerator(user.rows[0].user_id);

        res.json({token});

    }catch (err) {
        console.log(err.message);
    }
});

router.post("/verify", authorization, async (req, res)=>{
    try {
        res.json(true);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
})


module.exports = router;
