const express = require("express")
const cors = require("cors")
const app = express()

const authRoutes = require("./routes/auth.routes")
const userRoutes = require("./routes/user.routes")
const driverRoutes = require("./routes/driver.routes")
const tripRoutes = require("./routes/trip.routes")

app.use(express.json())
const corsOptions = {
    origin: "http://localhost:4200"
}
app.use(cors(corsOptions))

app.use(authRoutes)
app.use(userRoutes)
app.use(tripRoutes)

//app.use(driverRoutes)

app.listen(3000, () => {
    console.log("este servidor esta corriendo");
})
