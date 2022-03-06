import axios from 'axios'
import React, { useState } from 'react'
import BlogForm from "./BlogForm"

function BlogMaker() {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    
    const handleSubmit = ()=>{
        if(title === "" || content === ""){
            setOpen(!open)
            return
        }
        axios.post("http://localhost:3000/api/blog", {title: title, content:content})
        setOpen(!open)
    }
  return (
    <div>
        {open ? 
        <BlogForm submit={handleSubmit} title={title} content={content} setTitle={setTitle} setContent={setContent}></BlogForm> 
        : <button className='p-4 bg-orange-700 rounded-xl shadow-inner m-3 ml-6' onClick={()=>setOpen(!open)}>Create Blog</button> }
    </div>
  )
}

export default BlogMaker