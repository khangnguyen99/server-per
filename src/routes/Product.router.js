const express = require("express")
const {
	getAllProducts,
	createProduct,
	getProductById,
	updateProduct,
	deleteProduct,
	sortPriceAscending,
	sortPriceDescending,
	getProductByConcentrationAndBrand,
  getProductByName
} = require("../controllers/Product.controller")
const productRouter = express.Router()

productRouter.get("/", getAllProducts)
productRouter.post("/", createProduct)
productRouter.get("/:id", getProductById)
productRouter.put("/:id", updateProduct)
productRouter.delete("/:id", deleteProduct)
productRouter.get("/sort/price/ascending", sortPriceAscending)
productRouter.get("/sort/price/descending", sortPriceDescending)
productRouter.get("/sort/concentration", getProductByConcentrationAndBrand)
productRouter.get("/sort/name", getProductByName) 


module.exports = productRouter
