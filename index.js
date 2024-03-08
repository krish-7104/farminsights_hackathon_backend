import express from "express"
const app = express()

app.get("/", (req, res) => {
    res.send("I Am Live")
})

app.listen(5000, () => {
    console.log("Server Listening on http://localhost:5000")
})