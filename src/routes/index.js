const express = require("express")
const mainRoute = express.Router()

const productRouter = require("./Product.router")
const brandRouter = require("./Brand.router")

mainRoute.use("/product", productRouter)
mainRoute.use("/brand", brandRouter)

module.exports = {mainRoute}
