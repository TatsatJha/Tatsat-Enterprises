import React from 'react'

type props= {
    submit: any
    title: any
    setTitle: any
    content: any
    setContent: any
}

function BlogForm(props:props) {
  return (
    <div className='p-12'> 
        <input className = "block m-3 p-6" value={props.title} onChange={(event)=>{props.setTitle(event.target.value)}} name="Title"></input>
        <input className = "block m-3 p-6 w-full" value={props.content} onChange={(event)=>{props.setContent(event.target.value)}} name = "Content"></input>
        <button onClick={props.submit}>Submit</button>
    </div>
  )
}

export default BlogForm