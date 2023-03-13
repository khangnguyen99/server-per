const mongoose = require("mongoose")
const Product = require("../models/Product")
/*
* @desc Get all products
* @route GET /api/product
* @access Public
*/


const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({})
		res.status(201).json(products)
	} catch (error) {
		res.status(400).json({message: error.message})
	}
}

const createProduct = async (req, res) => {
	const {name, type, brand, priceFor10ml, priceForFull, img, concentration} = req.body
	const id = new mongoose.Types.ObjectId()
	try {
		const product = await Product.create({
			name,
			type,
			brand,
			concentration,
			priceFor10ml,
			priceForFull,
			img,
			id,
			_id: id
		})
		res.status(201).json(product)
	} catch (error) {
		console.log(error)
		res.status(400).json({message: error.message})
	}
}
const getProductById = async (req, res) => {
	const {id} = req.params
	try {
		const product = await Product.findById(id)
		res.status(201).json(product)
	} catch (error) {
		res.status(400).json({message: error.message})
	}
}
const updateProduct = async (req, res) => {
	const {id} = req.params
	const {name, type, brand, priceFor10ml, priceForFull, img, concentration} = req.body
	try {
		const product = await Product.findById(id).update({
			name,
			type,
			brand,
			priceFor10ml,
			priceForFull,
			img,
			concentration
		})
		res.status(201).json(product)
	} catch (error) {
		res.status(400).json({message: error.message})
	}
}
const deleteProduct = async (req, res) => {
	const {id} = req.params
	try {
		await Product.deleteOne({id})
		res.status(201).send("Delete complete")
	} catch (error) {
		res.status(400).json({message: error.message})
	}
}
const sortPriceAscending = async (req, res) => {
	try {
		const products = await Product.find().sort({priceForFull: 1})
		res.status(201).json(products)
	} catch (error) {
		res.status(400).json({message: error.message})
	}
}
const sortPriceDescending = async (req, res) => {
	try {
		const products = await Product.find().sort({priceForFull: -1})
		res.status(201).json(products)
	} catch (error) {
		res.status(400).json({message: error.message})
	}
}

const getProductByConcentrationAndBrand = async (req, res) => {
	const searchString = {}

	if (req.query.concentration) {
		searchString.concentration = {$regex: req.query.concentration, $options: "i"}
	}
	if (req.query.brand) {
		searchString.brand = {$regex: req.query.brand, $options: "i"}
	}

	try {
		const product = await Product.find(searchString)
		res.status(201).json(product)
	} catch (error) {
		res.status(400).json({message: error.message})
	}
}
const getProductByName = async (req, res) => {
	const searchString = {}

	if (req.query.name) {
		searchString.name = {$regex: req.query.name, $options: "i"}
	}
	try {
		const product = await Product.find(searchString)
		res.status(201).json(product)
	} catch (error) {
		res.status(400).json({message: error.message})
	}
}

module.exports = {
	getAllProducts,
	createProduct,
	getProductById,
	updateProduct,
	deleteProduct,
	sortPriceAscending,
	sortPriceDescending,
	getProductByConcentrationAndBrand,
	getProductByName
}
