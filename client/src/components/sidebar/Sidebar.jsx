import "./sidebar.css"
import { useState,useEffect } from 'react'
import axios from "axios";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(()=> {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data)
        }
        getCats();
    },[])
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
                    {cats.map((c)=>
                        <li className="sidebarListItem">{c.name}</li>
                    )}
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
