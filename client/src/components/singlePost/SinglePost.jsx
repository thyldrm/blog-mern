import "./singlepost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://picsum.photos/id/1/1200/800" alt="" className="singlePostImg"
                />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>TT</b>
                    </span>
                    <span className="singlePostDate">1 hour ago
                    </span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus nobis aliquid quibusdam aliquam, enim nisi nemo repudiandae asperiores! Pariatur minus saepe facere odio cumque repellendus animi iste, in adipisci sequi, excepturi est nesciunt ad voluptatum atque corporis. Nam at quisquam incidunt vitae, delectus voluptatibus. Quia velit dolorum laboriosam, architecto distinctio nemo dolor excepturi nobis officiis culpa temporibus odio. Vel a doloribus natus. Maxime dolorum fugit magnam? Autem nam minus suscipit obcaecati exercitationem rerum voluptatem rem odio praesentium earum sit eaque accusamus nihil repellendus architecto ducimus, commodi dolores, sapiente velit maiores expedita porro. Similique ut sapiente laboriosam exercitationem itaque eaque. Inventore doloribus doloremque nesciunt officiis excepturi repudiandae voluptate iure magni, quae sit ipsum, mollitia illo odio recusandae voluptatem, laborum soluta! Temporibus maxime distinctio laudantium illum tenetur dolore neque. Ullam labore minus blanditiis quia architecto eligendi unde, iusto animi expedita velit magni. Quos adipisci accusantium fugiat minus, sit nostrum facere officia vero.</p>
            </div>
        </div>
    )
}
