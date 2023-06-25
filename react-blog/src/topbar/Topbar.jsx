import "./topbar.css"

export default function TopBar() {
    return (
        <div className ="top">
        <div className ="topLeft">
       <i className="topicon fab fa-facebook-square"></i>
       <i className="topicon fab fa-twitter-square"></i>
       <i className="topicon fab fa-pinterest-square"></i>
       <i className="topicon fab fa-instagram-square"></i>
        </div>
        <div className = "topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">About</li>
                <li className="topListItem">Contact</li>
                <li className="topListItem">Write</li> 
                <li className="topListItem">LOGOUT</li>               
                
            </ul>
        </div>
        <div className="topRight">
           <i class="topSearchIcon fas fa-search"></i> 
        </div>
        </div>
    )
    
}