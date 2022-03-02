import axios from "axios";
import React from 'react'
import { BsTrash, BsPencilFill} from "react-icons/bs"

function EditDelete(data:any) {
    const handleDelete = ()=>{
        axios.delete(`http://localhost:3000/api/blog/${data.id}`)
    }
    
  return (
    <div>
        <button onClick={handleDelete}>
            <BsPencilFill size="24px"/>
        </button>
        <button onClick={handleDelete}>
            <BsTrash size="24px"/>
        </button>
    </div>
  )
}

export default EditDelete