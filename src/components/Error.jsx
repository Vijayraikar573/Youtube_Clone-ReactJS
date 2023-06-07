import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Error.css'
const Error = () => {
  return (
    <div className='error'>
      <div className="err">
        <img src="/images/404m.png" alt=""/>
        <p>This page is not available sorry for that.<br/>Try something else</p>
        </div>
        <div className="you">
        <img src="/images/youtube.png" alt="" width={"150px"} />
        </div>
        <Link to='/'><button>Go back</button></Link>
        </div>
  )
}

export default Error