const Pool = require("pg").Pool

const pool = new Pool({
    user:"postgres",
    password: "opengis",
    host: "localhost",
    port: 5433,
    database: "jwt_tutorial"
});

module.exports = pool;