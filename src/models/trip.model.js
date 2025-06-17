const pool = require("../db/connection");

const createTrip = async (trip) => {
  const query = `INSERT INTO taxifast.trips
(
user_id,
driver_id,
start_location,
direction,
destination,
status,
payment_method
)
VALUES
(?,?,?,?,?,?,?);`;

  await pool.query(query, [
    trip.user_id,
    trip.driver_id,
    trip.start_location,
    trip.direction,
    trip.destination,
    trip.status,
    trip.payment_method,
  ]);

  const [lastInserted] = await pool.query(
    "SELECT * FROM taxifast.trips WHERE id = LAST_INSERT_ID();"
  );
  return lastInserted[0];
};

const acceptTrip = async (idTrip, data) => {
  const query = `update taxifast.trips set driver_id = ?, status = ? where id = ? and user_id = ?`;

  const trip = await pool.query(query, [
    data.driver_id,
    data.status,
    idTrip,
    data.user_id,
  ]);
  return trip;
};

const getTripsByStatus = async (status) => {
  const query = `select t.*, u.full_name from taxifast.trips t
    join taxifast.users u
    on u.id = t.user_id where status = ?;`;
  const trips = await pool.query(query, [status]);
  return trips[0];
};

const getTripsByUser = async (userId) => {
  const query = `select t.*, 
    u.full_name as user, 
    d.full_name as driver
    from taxifast.trips t
    join taxifast.users u
    on u.id = t.user_id 
    join taxifast.drivers d
    on d.id = t.driver_id 
    where user_id = ? 
    and (t.status =? or t.status =?);`;
  const trips = await pool.query(query, [userId, "Pendiente", "En Curso"]);
  return trips[0][0];
};

const getTripsByDriver = async (driverId) => {
  const query = `select t.*, u.full_name 
      from taxifast.trips t
        join taxifast.drivers d
        on d.id = t.driver_id
        join taxifast.users u
        on u.id = t.user_id 
      where t.driver_id = ? and t.status = ?;`;
  const trips = await pool.query(query, [driverId, "En Curso"]);
  return trips[0][0];
};

const getTripByDriver = async (driverId, tripId) => {
  const query = `select t.* from taxifast.trips t
      join taxifast.drivers d
      on d.id = t.driver_id 
      where t.id =? and t.driver_id = ? and t.status =?;`;
  const trips = await pool.query(query, [tripId, driverId, "En Curso"]);
  return trips[0][0];
};

const cancelTrip = async (idTrip, idUser) => {
  const query = `update taxifast.trips set status = ? where id = ? and user_id = ?`;

  const trip = await pool.query(query, [
    "Cancelado",
    idTrip,
    idUser
  ]);
  return trip;
};

const endTrip = async (idTrip, idDriver) => {
  const query = `update taxifast.trips set status = ? where id = ? and driver_id = ?`;

  const trip = await pool.query(query, [
    "Finalizado",
    idTrip,
    idDriver
  ]);
  return trip;
};

module.exports = {
  createTrip,
  acceptTrip,
  getTripsByStatus,
  getTripsByUser,
  cancelTrip ,
  getTripsByDriver,
  getTripByDriver,
  endTrip
};
