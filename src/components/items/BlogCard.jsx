import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <div className="blogCard">
            <div className="blogImg">
                <Link to={'/'}><img src="/assets/images/seller-4.jpg" alt="" /></Link>
            </div>
            <div className="blogDetails">
                <div className="blogCategory">Category</div>
                <div className="time">10 min read</div>
                <div className="blogTitle"><Link to={'/'}>Blog Title</Link></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora ipsa iusto cum provident saepe vero enim accusantium, labore, error consequuntur ea laboriosam a odio itaque aliquid animi porro ad.</p>
                <div className="blogAuthor">
                    <Link to={'/'}><img src="/assets/images/avatar-4.webp" alt="" /></Link>
                    <div className="authorInfo">
                        <div className="blogAuthorName"><Link to={'/'}>Author Name</Link></div>
                        <div>Mar 17 2025</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard