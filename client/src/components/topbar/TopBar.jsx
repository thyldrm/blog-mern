import React from 'react'
import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = true;
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
                <Link className="link" to="/">
                    HOME
                </Link>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    {user && <li className="topListItem">LOGOUT</li>}
                </ul>
            </div>
            <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
                className="topImg"
                src="https://avatars.githubusercontent.com/u/59919927?v=4" alt=""
                />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}





