const model = require("../models/trip.model");

const createTrip = async (req, res, next) => {
  try {
    const trip = await model.createTrip(req.body);
    res.status(200).json(trip);
  } catch (error) {
    console.error("Error al crear viaje:", error);
    res.status(500).json({ error: "Error al crear viaje" });
  }
};

const acceptTrip = async (req, res, next) => {
  try {
    const { idTrip } = req.params;
    const trip = await model.acceptTrip(idTrip, req.body);
    res.status(200).json(trip);
  } catch (error) {
    console.error("Error al aceptar viaje:", error);
    res.status(500).json({ error: "Error al aceptar viaje" });
  }
};

const getTripsByStatus = async (req, res, next) => {
  try {
    const {status} = req.query
    const trips = await model.getTripsByStatus(status)
    res.status(200).json(trips);
  } catch (error) {
    console.error("Error al aceptar viaje:", error);
    res.status(500).json({ error: "Error al aceptar viaje" });
  }
};

const getTripsByUser = async (req, res, next) => {
  try {
    const {userId} = req.params
    const trips = await model.getTripsByUser(userId)
    res.status(200).json(trips);
  } catch (error) {
    console.error("Error al obtener viaje:", error);
    res.status(500).json({ error: "Error al obtener viaje" });
  }
};

const getTripsByDriver = async (req, res, next) => {
  try {
    const {driverId} = req.params
    const trips = await model.getTripsByDriver(driverId)
    res.status(200).json(trips);
  } catch (error) {
    console.error("Error al obtener viaje:", error);
    res.status(500).json({ error: "Error al obtener viaje" });
  }
};

const getTripByDriver = async (req, res, next) => {
  try {
    const {driverId, tripId} = req.params
    const trips = await model.getTripByDriver(driverId, tripId)
    res.status(200).json(trips);
  } catch (error) {
    console.error("Error al obtener viaje:", error);
    res.status(500).json({ error: "Error al obtener viaje" });
  }
};

const cancelTrip = async (req, res, next) => {
  try {
    const { idTrip, idUser } = req.params;
    const trip = await model.cancelTrip(idTrip, idUser);
    res.status(200).json(trip);
  } catch (error) {
    console.error("Error al cancelar viaje:", error);
    res.status(500).json({ error: "Error al cancelar viaje" });
  }
}

const endTrip = async (req, res, next) => {
  try {
    const { idTrip, idDriver } = req.params;
    const trip = await model.endTrip(idTrip, idDriver);
    res.status(200).json(trip);
  } catch (error) {
    console.error("Error al finalizar viaje:", error);
    res.status(500).json({ error: "Error al finalizar viaje" });
  }
}

module.exports = {
  createTrip,
  acceptTrip,
  getTripsByStatus,
  getTripsByUser,
  cancelTrip ,
  getTripsByDriver,
  getTripByDriver,
  endTrip,
};
