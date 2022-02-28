import React from 'react'
import axios from 'axios'
import { useState } from 'react'


function Blogs() {
    const [blog, setBlogs] = useState([])
    const getBlogs = async () => {
        await axios.get("http://localhost:3000/api/blog").then((response) => {
            console.log(response)
            const blogs = response.data
            setBlogs(blogs)
        })
    }    
    return (
        <div className='blogs'>
            <button onClick={getBlogs}> Show me the good </button>
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