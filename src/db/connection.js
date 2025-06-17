const mysql = require("mysql2/promise.js")

const pool = mysql.createPool({
    host: 'localhost',
    port: 3307,
    database: 'taxifast',
    user: 'root',
    password: 'root'
})

module.exports = pool