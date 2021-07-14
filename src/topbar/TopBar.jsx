import React from 'react'
import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-linkedin"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                className="topImg"
                src="https://avatars.githubusercontent.com/u/59919927?v=4" alt=""
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
