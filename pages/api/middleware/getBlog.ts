import type { NextApiRequest, NextApiResponse, } from 'next'
import Blog from "../models/blog"

const getBlog = async (req: NextApiRequest, res:any) =>{
    let blog
    try {
        blog = await Blog.findById(req.query.id)
        if(blog == null) return res.status(404).json({message: "Can't find blog"})
    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }
    return blog
}
export{getBlog}