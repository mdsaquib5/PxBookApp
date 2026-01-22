import { Link } from "react-router-dom";

const BlogCard = ({item}) => {
    return (
        <div className="blogCard">
            <div className="blogImg">
                <Link to={'/'}><img src={item.img} alt="" /></Link>
            </div>
            <div className="blogDetails">
                <div className="blogCategory">{item.category}</div>
                <div className="time">{item.time}</div>
                <div className="blogTitle"><Link to={'/'}>{item.title}</Link></div>
                <p>{item.para}</p>
                <div className="blogAuthor">
                    <Link to={'/'}><img src="/assets/images/avatar-4.webp" alt="" /></Link>
                    <div className="authorInfo">
                        <div className="blogAuthorName"><Link to={'/'}>{item.author}</Link></div>
                        <div>{item.date}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard