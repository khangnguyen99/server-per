const express = require("express")
const cors = require("cors")
const db = require("./src/config/db")
const app = express()
const port = 6969
const {mainRoute} = require("./src/routes")
app.use(cors())
db.connectDB()
app.use(express.urlencoded())
app.use(express.json())
app.use("/api/v1", mainRoute)

app.get("/", (req, res) => {
	res.send("Hello World!")
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
