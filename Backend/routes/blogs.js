const express = require("express")
const router = express.Router()
const blog = require("../../pages/api/models/blog")

router.get("/", async (req, res) =>{
    try {
        const blogs = await blog.find()
        res.json(blogs)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
router.post("/", async (req, res) =>{
    const blogEntry = new blog({
        title: req.body.title,
        content: req.body.content
    })
    try {
        const newBlog = await blogEntry.save()
        res.status(201).json(newBlog)
    } catch (error) {
        res.status(400).json(err.message)
    }
})

module.exports = router