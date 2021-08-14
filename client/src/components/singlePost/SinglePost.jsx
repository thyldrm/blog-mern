import "./singlepost.css"
import { useState,useEffect } from 'react'
import { useLocation } from 'react-router'
import axios from "axios"
import { Link } from "react-router-dom";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:8080/api/posts/" + path);
            setPost(res.data)
        };
        getPost()
    }, [path])

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
            {post.photo && 
                <img src={post.photo} alt="" className="singlePostImg"
                />
            }
                <h1 className="singlePostTitle">{post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: 
                    <Link to={`/?user=${post.username}`} className="link">
                    <b>{post.username}</b>
                    </Link>
                    </span>
                    <span className="singlePostDate">{post.createdAt}
                    </span>
                </div>
                <p className="singlePostDesc">{post.desc}</p>
            </div>
        </div>
    )
}
