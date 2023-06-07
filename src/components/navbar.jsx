import '../styles/navbar.css';

import MicIcon from '../images/mic.svg';
import SearchIcon from '../images/search.svg';
import VideoIcon from '../images/videocam.svg';
import Notificationicon from '../images/notifications.svg';
import menu from '../images/menu.svg';
import {Link} from "react-router-dom";
import Logo from '../images/youtube_logo_icon_167938.png';
import { useState } from 'react';

const Navbar = () => {


 const [toggle,setToggle] = useState(false)

  const menubar = () => {
     setToggle(prev => prev = !prev)
    
     console.log(toggle)
  }

    return ( 
        <div className="navbar">

            <div className="logo" >
            <img src={menu} alt="" width="35px" style={{marginRight:"10px"}} onClick={menubar}/>
              <Link to="/">  <img src={Logo} width="125" alt=""/></Link>
                </div>
            <div className="searchbar">
                <input type="search"  placeholder='search' />
                <img src={SearchIcon} width="25" alt="" style={{marginRight:"15px"}} className="searchicon"/>
                
                <img src={MicIcon} width="25" alt="" style={{marginRight:"15px"}}/>
            </div>
            <div className="profile">
            <Link to="/about" className='link'>About</Link>
            <Link to="/addvideo" className='link'>AddVideo</Link>
            <img src={VideoIcon} width="25" alt="" style={{marginRight:"15px"}} />
            
                <img src={Notificationicon} width="25" alt="" style={{marginRight:"15px"}} />
            
                <img src="../images/pic.jpg" width="35" alt="" style={{marginRight:"75px"}} className='picon'/>
                
                
            </div>
                
        
        </div>
     );
}
 
export default Navbar;