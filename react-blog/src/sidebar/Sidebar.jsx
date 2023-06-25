import "./sidebar.css"
export default function Sidebar(){
    return (
        <div className ="sidebar">
           <div className ="sideBarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src=""
            alt="" />
            <p>
                Loremk ebeineqw jbefjqn fjejk
            </p>
           </div>
           <div className = "sideBarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
                </ul>
           </div>
           <div className="sideBarItem"></div>
           <span className="sidebarTitle">FOLLOW US</span>
           <div className="sidebarSocial">
           <i className="sideBarIcon fab fa-facebook-square"></i>
           <i className="sideBarIcon fab fa-twitter-square"></i>
           <i className="sideBarIcon fab fa-pinterest-square"></i>
           <i className="sideBarIcon fab fa-instagram-square"></i>
        
           </div>
        </div>
    )
}