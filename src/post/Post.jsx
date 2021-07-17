import "./post.css"


export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://picsum.photos/id/1/1200/800"
            alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        Example 1
                    </span>
                    <span className="postCat">
                        Example 2
                    </span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor, sit amet
                </span>
                <hr />
                <span className="postDate">
                    1 hour ago
                </span>
            </div>
            <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis quam ea doloribus voluptas corporis tempora recusandae deserunt maxime sint illo cupiditate, libero cumque, hic officiis omnis dolorum eligendi animi quisquam provident voluptatibus sunt. Ad molestiae, explicabo unde minus amet rerum recusandae minima architecto itaque.</p>
        </div>
    )
}
