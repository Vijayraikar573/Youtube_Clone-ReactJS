import React from 'react'
import '../styles/videos.css';
import { Link } from 'react-router-dom';

const Videocard = (prop) => {
  let video=prop.data
  let removevideo=prop.remove
    
  return (
    <div className='videos'>
     
        {video.map(data=>(
            <div className="videolist">
            <img src={data.thumbnail} height="202" width="360" alt=""/>
            <p className='title'>{data.title}</p> 
            <div className="one">
            <p>{data.channelname}</p> 
            <p>{data.view}M views</p> 
            </div>
            <div className="two">
                <Link onClick={()=>removevideo(data.title)}>Not interested</Link>
            </div>
        </div>
    
        ))}
    </div>
  )
}

export default Videocard;