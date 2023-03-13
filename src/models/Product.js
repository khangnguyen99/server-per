const mongoose = require("mongoose")
const {Schema} = mongoose

const ProductSchema = new Schema(
	{
		id: mongoose.Types.ObjectId,
		name: {type: String, required: true},
		type: {type: String, required: true},
		brand: {type: String, required: true},
		concentration: {type: String, required: true},
		priceFor10ml: {type: Number, required: true},
		priceForFull: {type: Number, required: true},
		img: [String]
	},
	{
		timestamps: true
	}
)

ProductSchema.pre(/^find/, function (next) {
	this.select("-_id -__v")
	next()
})
const Product = mongoose.model("Product", ProductSchema)
module.exports = Product
