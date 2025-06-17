const model = require("../models/auth.model");
const userModel = require("../models/user.model");
const driverModel = require("../models/driver.model");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.getUserByEmail(email);
    const driver = await driverModel.getDriverByEmail(email);

    if (user) {
      if (user.password_hash !== password) {
        res.status(400).send({ message: "contraseña incorrecta" });
      }

      res.status(200).json(user)
      return
    } else if (driver) {
      if (driver.password_hash !== password) {
        res.status(400).send({ message: "contraseña incorrecta" });
      }
      res.status(200).json(driver)
      return
    }

    res.status(404).send({ message: "usuario o contraseña incorrectos" });
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res, next) => {
  try {
    const user = await model.register(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const registerDriver = async (req, res, next) => {
  try {
    const user = await model.registerDriver(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
  register,
  registerDriver,
};
