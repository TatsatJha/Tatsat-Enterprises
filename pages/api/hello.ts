// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDb from "./middleware/mongodb"
import blog from "./models/blog"


async function handler( req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method)
    try {
      const blogs = await blog.find()
      res.json(blogs)
  } catch (err) {
      res.status(500)
  }
  
}
export default connectDb(handler)
// router.get("/", async (req, res) =>{
//   try {
//       const blogs = await blog.find()
//       res.json(blogs)
//   } catch (err) {
//       res.status(500).json({message: err.message})
//   }
// })
// router.post("/", async (req, res) =>{
//   const blogEntry = new blog({
//       title: req.body.title,
//       content: req.body.content
//   })
//   try {
//       const newBlog = await blogEntry.save()
//       res.status(201).json(newBlog)
//   } catch (error) {
//       res.status(400).json(err.message)
//   }
// })
