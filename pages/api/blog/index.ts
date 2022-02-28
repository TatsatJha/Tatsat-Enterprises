// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDb from "../middleware/mongodb"
import blog from "../models/blog"


async function handler( req: NextApiRequest, res: NextApiResponse) {


  switch (req.method){
    case "GET":
      try {
        const blogs = await blog.find()
        res.json(blogs)
      } catch (err){res.status(500)}
      break;
    case "POST":
      // console.log("we're here baby")
      const blogEntry = new blog({
        title: req.body.title,
        content: req.body.content
      })
      try {
        const newBlog = await blogEntry.save()
        res.status(201).json(newBlog)
      } catch (error: any) {
        res.status(400).json(error.message)
      }
      break;
    case "DELETE":
      try {
        const blogs = await blog.deleteMany()
        res.json(blogs)
      } catch (error:any) {res.status(500)}
      break;
  }
  
}
  
export default connectDb(handler)
