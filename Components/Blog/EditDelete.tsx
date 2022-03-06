import axios from "axios";
import React, { useState } from 'react'
import BlogForm from "./BlogForm";
import { BsTrash, BsPencilFill} from "react-icons/bs"

function EditDelete(data:any) {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    
    const handleSubmit = ()=>{
        if(title === "" || content === ""){
            setOpen(!open)
            return
        }
        axios.put(`http://localhost:3000/api/blog/${data.id}`, {title: title, content:content})
        setOpen(!open)
    }

    const handleDelete = ()=>{
        axios.delete(`http://localhost:3000/api/blog/${data.id}`)
    }

  return (
    <div>
        {open ? 
        <BlogForm submit={handleSubmit} title={title} content={content} setTitle={setTitle} setContent={setContent} id={data.id}></BlogForm> 
        :
        <div className= " p-1.5 my-9 mx-20 rounded-xl bg-orange-700 inline absolute animate-fadeIn "> 
            <button onClick={()=>setOpen(!open)} className="p-2 py-3 block border-b-2">
                <BsPencilFill size="22px"/>
            </button>
            <button onClick={handleDelete} className="p-2 py-3 block">
                <BsTrash size="22px"/>
            </button>
        </div>
    }
        
    </div>
  )
}

export default EditDelete