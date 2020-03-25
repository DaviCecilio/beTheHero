const express = require("express")
const routes = express.Router()

const OngController = require("./controllers/ongControllers")
const IncidentsController = require("./controllers/incidentControllers")
const ProfileController = require("./controllers/profileControllers")
const SessionController = require("./controllers/sessionController")

routes.post("/sessions", SessionController.create)

routes.get("/allOngs", OngController.index)
routes.post("/ongs", OngController.create)

routes.get("/profile", ProfileController.index)

routes.get("/allIncidents", IncidentsController.index)
routes.post("/incidents", IncidentsController.create)
routes.delete("/incidents/:id", IncidentsController.delete)

module.exports = routes
