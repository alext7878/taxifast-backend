const router = require("express").Router()
const tripController = require("../controllers/trip.controller")

router.post("/trip", tripController.createTrip )
router.put("/trip/accept/:idTrip", tripController.acceptTrip )
router.get("/trip", tripController.getTripsByStatus )
router.get("/trip/user/:userId", tripController.getTripsByUser )
router.put("/trip/:idTrip/user/:idUser", tripController.cancelTrip )
router.put("/trip/:idTrip/driver/:idDriver", tripController.endTrip )
router.get("/trip/driver/:driverId", tripController.getTripsByDriver )
router.get("/trip/:tripId/driver/:driverId", tripController.getTripByDriver)

module.exports = router