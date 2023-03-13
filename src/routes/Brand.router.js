const express = require("express")
const {
	getAllBrands,
	createBrand,
	getBrandById,
	updateBrand
} = require("../controllers/Brand.controller")
const brandRouter = express.Router()
brandRouter.get("/", getAllBrands)
brandRouter.post("/", createBrand)
brandRouter.get("/:id", getBrandById)
brandRouter.put("/:id", updateBrand)

module.exports = brandRouter
