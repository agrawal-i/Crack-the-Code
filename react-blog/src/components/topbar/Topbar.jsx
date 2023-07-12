import "./topbar.css"
import { Link } from "react-router-dom";
export default function TopBar() {
    const user = true;
    return (
        <div className ="top">
        <div className ="topLeft">
       <i className="topIcon fab fa-facebook-square"></i>
       <i className="topIcon fab fa-twitter-square"></i>
       <i className="topIcon fab fa-pinterest-square"></i>
       <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <div className = "topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/" > HOME</Link>   
                </li>
                <li className="topListItem"> <Link className="link" to="/user/about" > ABOUT</Link>   </li>
                <li className="topListItem"> <Link className="link" to="/user/contact" > CONTACT</Link>   </li>
                <li className="topListItem"> <Link className="link" to="/user/write" > WRITE</Link>   </li> 
                <li className="topListItem"> 
                {user && "LOGOUT"}
                 </li>               
                
            </ul>
        </div>
        <div className="topRight">
            {
                user?(
                    <img
            className = "TopImg"
            src=" https://unsplash.com/photos/a-woman-laying-on-top-of-a-bed-covered-in-feathers-vhjZD_UD1vM" alt=" "/>
           
                ) : (
                    <ul className="topList">
                     <li className="topListItem">
                    <Link className="link" to="/login">LOGIN</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/register">REGISTER</Link>
                    </li>  
                </ul>
                )
            }
           <i class="topSearchIcon fas fa-search"></i> 
        </div>
        </div>
    )
    
}