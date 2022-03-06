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
        <div className="p-2.5 pt-5 rounded-xl bg-orange-700 inline"> 
            <button onClick={()=>setOpen(!open)} className="p-2.5">
                <BsPencilFill size="24px"/>
            </button>
            <button onClick={handleDelete} className="p-2.5">
                <BsTrash size="24px"/>
            </button>
        </div>
    }
        
    </div>
  )
}

export default EditDelete