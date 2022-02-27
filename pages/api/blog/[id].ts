import type { NextApiRequest, NextApiResponse } from 'next'
import connectDb from "../middleware/mongodb"
import Blog from "../models/blog"
import {getBlog} from "../middleware/getBlog"

async function handler( req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { id, name },
        method,
      } = req
    switch (req.method){
    case "GET":
        try {
            const blog = await Blog.findById(id)
        res.status(200).json(blog)
        } catch (err){res.status(500)}
        break;
    case "DELETE":
        try {
        const blogs = await Blog.deleteMany()
        res.json(blogs)
        } catch (error:any) {res.status(500)}
        break;
    default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowed`)      
    }
}
  
export default connectDb(handler)
