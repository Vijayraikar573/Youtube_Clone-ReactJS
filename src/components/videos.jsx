import React, { useEffect } from 'react'
import { useState } from 'react';
import VideoCard from '../components/videocard'
import '../styles/videos.css';

const Videos = () => {
    
    let[video,setvideo]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:5000/video')
            let data=await response.json();
            setvideo(data)
        }
        fetchData()

    },[])

    let removevideo=(title)=>{
        setvideo(video.filter(x=>x.title!==title))
    }
  return (
    <div className='videos' >
           <VideoCard data={video} remove={removevideo} />
           <VideoCard data={video.filter(x=>x.view>=20)} remove={removevideo} />
        </div>
  );
}

export default Videos;