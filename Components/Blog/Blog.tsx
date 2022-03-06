import React, { useState } from 'react'
import EditDelete from './EditDelete'

type blogProp = {
    title: String,
    content: String,
    id: String,
    v: String
}
function Blog(blogs: blogProp) {
    const [hover, setHover] = useState(false)
    
    return (
        <div onMouseOver={(e)=>setHover(true)}  onMouseLeave={(e)=>setHover(false)}>
            {(hover)? <EditDelete id={blogs.id}></EditDelete>:<></>}
            <div className='p-4 mx-28'>
                <h1 className='text-4xl p-5'>{blogs.title}</h1>
                <p className='font-serif p-5 text-lg'>{blogs.content}</p>
            </div> 
        </div>
  )
}

export default Blog