const express = require("express");
const { connectToMongo } = require("./database/connect.js");
const { config } = require("dotenv");
const userRouter = require("./router/user.route.js");
const blogRouter = require("./router/blog.route.js");
const liveStockRouter = require("./router/stock.route.js");
const postRouter=require("./router/post.route.js");
const replyRouter=require("./router/reply.route.js");
const expenseRouter=require("./router/expense.route");

const cors = require("cors")
config()
const app = express()
app.use(express.json())
app.use(cors("*"))

const PORT = process.env.PORT || 5000

connectToMongo()

app.get("/", (req, res) => {
    res.send("I Am Live")
})

app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/liveStock", liveStockRouter);
app.use("/api/v1/post",postRouter);
app.use("/api/v1/reply",replyRouter);
app.use("/api/v1/expense",expenseRouter);

app.listen(PORT, () => {
    console.log(`Server Listening on http://localhost:${PORT}`)
})