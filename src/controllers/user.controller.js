const userModel = require("../models/user.model");

const getUser = async (req, res, next) => {
  try {
    const {id} = req.params
    const user = await userModel.getUser(id);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    res.status(500).json({ error: "Error al obtener usuario" });
  }
};

module.exports = {
  getUser,
};