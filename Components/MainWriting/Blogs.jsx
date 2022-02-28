import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


function Blogs() {
    const [blog, setBlogs] = useState([])
    const getBlogs = async () => {
        await axios.get("http://localhost:3000/api/blog").then((response) => {
            const blogs = response.data
            setBlogs(blogs)
        })
    }    
    useEffect(()=> getBlogs(), [])
    return (
        <div className='blogs'>
            {blog.map((blogs) => (
                <div className='blog'>
                    <h1>{blogs.title}</h1>
                    <p>{blogs.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Blogs