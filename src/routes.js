const express = require("express")

const routes = express.Router()

routes.post("/test", (request, response) => {
  const body = request.body

  console.log("Here your body: ", body)

  return response.json({
    status: "Info Send"
  })
})

module.exports = routes
