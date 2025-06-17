const pool = require("../db/connection")

const getDriverByEmail = async(email) => {
    const query = "select * from taxifast.drivers where email = ?;"
     const driver = await pool.query(query, [email])
    return driver[0][0]
}

module.exports = {
    getDriverByEmail
}