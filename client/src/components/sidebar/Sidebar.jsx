import "./sidebar.css"
export default function Sidebar(){
    return (
        <div className ="sidebar">
           <div className ="sidebarItem">
            <span className="sidebarTitle">ABOUT US</span>
            <p>
                This website is aimed at helping students by providing them interview preparations and internship experiences of our alumni members.
            </p>
           </div>
           <div className = "sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Computer Science</li>
                <li className="sidebarListItem">Electronics </li>
                <li className="sidebarListItem">Electrical</li>
                <li className="sidebarListItem">Mechanical</li>
                <li className="sidebarListItem">Civil</li>
                <li className="sidebarListItem">Chemical</li>
                <li className="sidebarListItem">Biotechnology</li>

                </ul>
           </div>
           <div className="sidebarItem"></div>
           <span className="sidebarTitle">FOLLOW US</span>
           <div className="sidebarSocial">
           <i className="sidebarIcon fab fa-facebook-square"></i>
           <i className="sidebarIcon fab fa-twitter-square"></i>
           <i className="sidebarIcon fab fa-pinterest-square"></i>
           <i className="sidebarIcon fab fa-instagram-square"></i>
        
           </div>
        </div>
    )
}