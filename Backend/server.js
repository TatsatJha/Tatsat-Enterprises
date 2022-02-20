const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/blog", {useNewURLParser: true})
const db = mongoose.connection
db.on("error", (error) => {console.log(error)})
db.once("open", ()=>{console.log("db")})

app.use(express.json())
const blogRouter = require("./routes/blogs")
app.use("/blogs", blogRouter)

app.listen(3001, ()=>console.log("server"))