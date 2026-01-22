import BlogCard from "../items/BlogCard";
import { blogs } from "../../constants/data";

const Blogs = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="sectionTitle">
                        <div className="sectionHeading">Latest Blogs</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora ipsa iusto cum provident saepe vero enim accusantium, labore, error consequuntur ea laboriosam a odio itaque aliquid animi porro ad.</p>
                    </div>
                    <div className="blogGrid">
                        {
                            blogs.map((item, index) => (
                                <BlogCard key={index} item={item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs;