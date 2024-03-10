const express = require("express");
const { connectToMongo } = require("./database/connect.js");
const { config } = require("dotenv");
config()
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000

connectToMongo()

const userRouter = require("./router/user.route.js");

app.get("/", (req, res) => {
    res.send("I Am Live")
})

app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
    console.log(`Server Listening on http://localhost:${PORT}`)
})