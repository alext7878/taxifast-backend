const driverModel = require("../models/driver.model");

const getDriver = async (req, res, next) => {
  try {
    const { id } = req.params;
    const driver = await driverModel.getDriver(id);
    res.status(200).json(driver);
  } catch (error) {
    console.error("Error al obtener conductor:", error);
    res.status(500).json({ error: "Error al obtener conductor" });
  }
};

module.exports = {
  getDriver,
};