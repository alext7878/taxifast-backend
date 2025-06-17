const pool = require("../db/connection");

const register = async (user) => {
  const query = `INSERT INTO taxifast.users
    (
    full_name,
    phone_number,
    email,
    password_hash
    )
    VALUES (?,?,?,?);`;

  await pool.query(query, [
    user.full_name,
    user.phone_number,
    user.email,
    user.password_hash,
  ]);

  const [lastInserted] = await pool.query(
    "SELECT * FROM taxifast.users WHERE id = LAST_INSERT_ID();"
  );
  return lastInserted[0];
};

const registerDriver = async (driver) => {
  try {
    const query = `INSERT INTO taxifast.drivers
    (
    full_name,
    phone_number,
    email,
    password_hash,
    license_number,
    plate_number,
    vehicle_model,
    vehicle_color
    )
    VALUES (?,?,?,?,?,?,?,?);`;

    await pool.query(query, [
      driver.full_name,
      driver.phone_number,
      driver.email,
      driver.password_hash,
      driver.license_number,
      driver.plate_number,
      driver.vehicle_model,
      driver.vehicle_color,
    ]);

    const [lastInserted] = await pool.query(
      "SELECT * FROM taxifast.drivers WHERE id = LAST_INSERT_ID();"
    );
    return lastInserted[0];
  } catch (error) {
    console.error("Error al obtener conductor:", error);
  }
};

module.exports = {
  register,
  registerDriver,
};
