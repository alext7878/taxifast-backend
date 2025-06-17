const pool = require("../db/connection")

const getUser = async (userId) => {
  try {
    const query = "select * from taxifast.users where id = ?;"
    const user = await pool.query(query, [userId])
    return user[0][0]
  } catch (error) {
    console.error("Error al obtener usuario:", error);
  }
};

const getUserByEmail = async(email) => {
    const query = "select * from taxifast.users where email = ?;"
     const user = await pool.query(query, [email])
    return user[0][0]
}


module.exports = {
  getUser,
  getUserByEmail
};
