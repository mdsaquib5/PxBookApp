import { Link } from "react-router-dom";

const TopCategories = () => {
    return (
        <>
            <section className="parallaxBg">
                <div className="container">
                    <div className="categorySection">
                        <div className="trendingHeading">Top Categories</div>
                        <div className="categoryGrid">
                            <div className="categoryCard">
                                <div className="thumbImg">
                                    <img src="/assets/images/cat-1.png" alt="cat-1" />
                                    <div className="circleShape">
                                        <img src="/assets/images/circle-shape.png" alt="" />
                                    </div>
                                </div>
                                <Link to={'/'}>Designed Books <span>(24 Items)</span></Link>
                            </div>
                            <div className="categoryCard">
                                <div className="thumbImg">
                                    <img src="/assets/images/cat-1.png" alt="cat-1" />
                                    <div className="circleShape">
                                        <img src="/assets/images/circle-shape.png" alt="" />
                                    </div>
                                </div>
                                <Link to={'/'}>Designed Books <span>(24 Items)</span></Link>
                            </div>
                            <div className="categoryCard">
                                <div className="thumbImg">
                                    <img src="/assets/images/cat-1.png" alt="cat-1" />
                                    <div className="circleShape">
                                        <img src="/assets/images/circle-shape.png" alt="" />
                                    </div>
                                </div>
                                <Link to={'/'}>Designed Books <span>(24 Items)</span></Link>
                            </div>
                            <div className="categoryCard">
                                <div className="thumbImg">
                                    <img src="/assets/images/cat-1.png" alt="cat-1" />
                                    <div className="circleShape">
                                        <img src="/assets/images/circle-shape.png" alt="" />
                                    </div>
                                </div>
                                <Link to={'/'}>Designed Books <span>(24 Items)</span></Link>
                            </div>
                            <div className="categoryCard">
                                <div className="thumbImg">
                                    <img src="/assets/images/cat-1.png" alt="cat-1" />
                                    <div className="circleShape">
                                        <img src="/assets/images/circle-shape.png" alt="" />
                                    </div>
                                </div>
                                <Link to={'/'}>Designed Books <span>(24 Items)</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopCategories;