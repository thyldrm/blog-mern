import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
                <img 
                src="https://picsum.photos/seed/picsum/300/300" 
                alt="" 
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda molestias expedita, impedit illum ea quisquam?
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">example 1</li>
                    <li className="sidebarListItem">example 2</li>
                    <li className="sidebarListItem">example 3</li>
                    <li className="sidebarListItem">example 4</li>
                    <li className="sidebarListItem">example 5</li>
                    <li className="sidebarListItem">example 6</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">follow</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-linkedin"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}
