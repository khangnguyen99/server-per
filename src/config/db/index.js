const mongoose = require("mongoose")

const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb://localhost:27017/TestPer_dev", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log(`MongoDB Connected: ${conn.connection.host}`)
	} catch (err) {
		console.log(err)
		
	}
}
module.exports = {connectDB}
