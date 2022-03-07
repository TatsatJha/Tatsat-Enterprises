import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import EditDelete  from "./EditDelete";
import Blog from './Blog';

function Blogs() {
    const [blog, setBlogs] = useState<any[]>([])
        
    useEffect(()=> {
        const getBlogs = async () => {
            await axios.get("http://localhost:3000/api/blog").then((response) => {
                const blogs = response.data
                setBlogs(blogs)
            })
        }
    getBlogs()}, [blog])

    return (
        <div className='w-1/2'>
            {blog.map((blogs) => (<Blog date={blogs.date} title={blogs.title} content={blogs.content} id={blogs._id} v={blogs._v}></Blog>))}
        </div>
    )
}

export default Blogs