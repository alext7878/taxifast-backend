const router = require("express").Router()
const userController = require("../controllers/user.controller")

router.get("/user/:id", userController.getUser )



module.exports = router