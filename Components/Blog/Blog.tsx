import React, { useState } from 'react'
import EditDelete from './EditDelete'

type blogProp = {
    title: String,
    content: String,
    date: String,
    id: String,
    v: String
}
function Blog(blogs: blogProp) {
    const [hover, setHover] = useState(false)
    const [open, setOpen] = useState(false)

    return (
        <div className = "border-b-2 border-slate-900" onMouseOver={(e)=>setHover(true)}  onMouseLeave={(e)=>{if(!open){setHover(false)}}}>
            {(hover)? <EditDelete setOpen={setOpen} open={open}id={blogs.id}></EditDelete>:<></>}
            <div className='p-4 mx-28'>
                <h1 className='text-4xl p-5 font-bold '>{blogs.title}</h1>
                <h2>{blogs.date}</h2>
                <p className='font-serif p-5 text-lg'>{blogs.content}</p>
            </div> 
        </div>
  )
}

export default Blog