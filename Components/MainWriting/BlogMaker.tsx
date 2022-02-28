import axios from 'axios'
import React, { useState } from 'react'

function BlogMaker() {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const handler = ()=>{
        setOpen(!open)
    }
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
        <div className='p-12'> 
            <input className = "block m-3 p-6" value={title} onChange={(event)=>{setTitle(event.target.value)}} name="Title"></input>
            <input className = "block m-3 p-6 w-full" value={content} onChange={(event)=>{setContent(event.target.value)}} name = "Content"></input>
            <button onClick={handleSubmit}>Submit</button>
        </div> 
        : <button className='p-6 bg-orange-700' onClick={handler}>Create Blog</button> }
    </div>
  )
}

export default BlogMaker