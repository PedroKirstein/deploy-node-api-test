const express = require("express")

const TestController = require("./controller/TestController")

const routes = express.Router()

routes.post("/",TestController.testBodyAndHeader)

routes.delete("/",TestController.testQuery)

routes.get("/",TestController.testList)

module.exports = routes 