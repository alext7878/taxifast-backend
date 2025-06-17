const router = require("express").Router()
const authController = require("../controllers/auth.controller")

router.post("/auth/login", authController.login )
router.post("/auth/register", authController.register )
router.post("/auth/register/driver", authController.registerDriver )


module.exports = router
