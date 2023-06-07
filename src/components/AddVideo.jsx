import React from 'react'
import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/AddVideo.css'
const AddVideo = () => {
  let Navigate=useNavigate()
  let thumbnail=useRef(null)
  let title=useRef(null)
  let channelname=useRef(null)
  let view=useRef(null)
  let submit=(e)=>{
    e.preventDefault()
    let data={
      channelname:channelname.current.value,
      title:title.current.value,
      views:view.current.value,
      thumbnail:thumbnail.current.value
    }
    fetch("http://localhost:5000/video",{
          method:'POST',
          headers:{"Content-Type":'application/json'},
          body:JSON.stringify(data)
    })
    alert("submitted");
    Navigate('/');
  }
  return (
    <div className='addvideo'>
        
        
        <div className='address'>
        <h1>AddVideo</h1>
        <div className='detail'>
        <form action="" onSubmit={submit} >
        <input ref={thumbnail} type="text" placeholder="thumbnail" />
        <input ref={title} type="text" placeholder="title"/>
        <input ref={channelname} type="text" placeholder="channelname"/>
        <input ref={view} type="number" placeholder="view" className='space'/>
        
        <div className='btn'>
        <button>Add Video</button>
        
        </div>
        </form>
        </div>
        </div>
       
       <div className='img-video'>
          <img src="/images/gift.jpg" alt="" height={"600px"} width={"500px"}/>
         
       </div>
        
        </div>
       
  )
}

export default AddVideo