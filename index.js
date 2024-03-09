import express from "express"
import connectToMongo from "./database/connect.js"
import { config } from "dotenv"
config()
const app = express()
const PORT = process.env.PORT || 5000

connectToMongo()

app.get("/", (req, res) => {
    res.send("I Am Live")
})

app.listen(PORT, () => {
    console.log(`Server Listening on http://localhost:${PORT}`)
})