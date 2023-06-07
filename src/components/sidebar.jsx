import '../styles/sidebar.css'
import { Link } from 'react-router-dom';
const Sidebar = () => {

    let links=[
        {image:"/images/home.svg",link:"Home"},
        {image:"/images/aperture-outline.svg",link:"Shorts"},
        {image:"/images/bar-chart-outline.svg",link:"Subscriptioins"},
        {image:"/images/book-outline.svg",link:"Library"},
        {image:"/images/repeat-outline.svg",link:"History"},
        {image:"/images/trending-up.svg",link:"Trending"},
        {image:"/images/storefront-outline.svg",link:"Shopping"},
        {image:"/images/camera-outline.svg",link:"Movies"},
        {image:"/images/headset-outline.svg",link:"Music"},
        {image:"/images/football-outline.svg",link:"Sports"}
    ]
    return ( 
        <div className="sideBar">
            <div className="sidebarLinks">
                <ul>
                {links.map((data)=>{
                    return(
                        
                        <li><img src={data.image} width="25" alt=""/><Link>{data.link}</Link></li>
                    )
 } ) }
                    
                </ul>
            </div>
                             
        </div>
     );
}
export default Sidebar;