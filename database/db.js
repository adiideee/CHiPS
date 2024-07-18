const env =require('dotenv').config({path:"./.env"})
import { Pool } from "pg";


const pool = new Pool({
    user:process.env.DB_USERS,
    password: process.env.DB_PASSWORD,
    host:process.env.DB_HOST ,
    port:process.env.DB_PORT ,
    database:process.env.DB_NAME,
});

module.exports = pool;