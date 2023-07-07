import "./sidebar.css"
export default function Sidebar(){
    return (
        <div className ="sidebar">
           <div className ="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://unsplash.com/photos/Cy5dya5MAlI"
            alt="" />
            <p>
                Loremk ebeineqw jbefjqn fjejk
            </p>
           </div>
           <div className = "sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
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