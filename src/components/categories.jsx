import "../styles/categories.css"
import { Link } from "react-router-dom";
const Categories = () => {
    let links=[
        {link:"All"},
        {link:"Cricket"},
        {link:"Netflix"},
        {link:"Amazon"},
        {link:"Music"},
        {link:"Sports"},
        {link:"Sandalwood"},
        {link:"games"}

]
    return ( 
        <div className="categories">
            <div className="categorieslinks">
            <ul>
                {links.map((data)=>{
                    return(
                        
                        <li><Link>{data.link}</Link></li>
                    )
 } ) }
            </ul>
        </div>
        </div>
     );
}
 
export default Categories;