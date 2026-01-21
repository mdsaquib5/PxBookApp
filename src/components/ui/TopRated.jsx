import { Link } from "react-router-dom";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

const TopRated = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="titleBtn">
                        <div className="sectionHeading">10 Top Rated Books</div>
                        <Link to={'/'} className="btn borderBtn">View more <FaArrowRight /></Link>
                    </div>
                    <div className="ratedGrid">
                        <div className="ratedCard">
                            <div className="ratedImg">
                                <Link to={'/'}>
                                    <img src="assets/images/seller-1.jpg" alt="Top Rated Book" />
                                </Link>
                            </div>
                            <div className="ratedDetails">
                                <div className="starRated">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <Link to={'/'} className="ratedName">A Heavy Lift</Link>
                                <div className="sellerAuthor">By: <span>John Doe</span></div>
                                <div className="bookPrice">$ 12.99 <span>$ 14.99</span><button className="cartIcon"><FaBasketShopping fill="#fff" /></button></div>
                            </div>
                        </div>
                        <div className="ratedCard">
                            <div className="ratedImg">
                                <Link to={'/'}>
                                    <img src="assets/images/seller-1.jpg" alt="Top Rated Book" />
                                </Link>
                            </div>
                            <div className="ratedDetails">
                                <div className="starRated">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <Link to={'/'} className="ratedName">A Heavy Lift</Link>
                                <div className="sellerAuthor">By: <span>John Doe</span></div>
                                <div className="bookPrice">$ 12.99 <span>$ 14.99</span><button className="cartIcon"><FaBasketShopping fill="#fff" /></button></div>
                            </div>
                        </div>
                        <div className="ratedCard">
                            <div className="ratedImg">
                                <Link to={'/'}>
                                    <img src="assets/images/seller-1.jpg" alt="Top Rated Book" />
                                </Link>
                            </div>
                            <div className="ratedDetails">
                                <div className="starRated">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <Link to={'/'} className="ratedName">A Heavy Lift</Link>
                                <div className="sellerAuthor">By: <span>John Doe</span></div>
                                <div className="bookPrice">$ 12.99 <span>$ 14.99</span><button className="cartIcon"><FaBasketShopping fill="#fff" /></button></div>
                            </div>
                        </div>
                        <div className="ratedCard">
                            <div className="ratedImg">
                                <Link to={'/'}>
                                    <img src="assets/images/seller-1.jpg" alt="Top Rated Book" />
                                </Link>
                            </div>
                            <div className="ratedDetails">
                                <div className="starRated">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <Link to={'/'} className="ratedName">A Heavy Lift</Link>
                                <div className="sellerAuthor">By: <span>John Doe</span></div>
                                <div className="bookPrice">$ 12.99 <span>$ 14.99</span><button className="cartIcon"><FaBasketShopping fill="#fff" /></button></div>
                            </div>
                        </div>
                        <div className="ratedCard">
                            <div className="ratedImg">
                                <Link to={'/'}>
                                    <img src="assets/images/seller-1.jpg" alt="Top Rated Book" />
                                </Link>
                            </div>
                            <div className="ratedDetails">
                                <div className="starRated">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <Link to={'/'} className="ratedName">A Heavy Lift</Link>
                                <div className="sellerAuthor">By: <span>John Doe</span></div>
                                <div className="bookPrice">$ 12.99 <span>$ 14.99</span><button className="cartIcon"><FaBasketShopping fill="#fff" /></button></div>
                            </div>
                        </div>
                        <div className="ratedCard">
                            <div className="ratedImg">
                                <Link to={'/'}>
                                    <img src="assets/images/seller-1.jpg" alt="Top Rated Book" />
                                </Link>
                            </div>
                            <div className="ratedDetails">
                                <div className="starRated">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <Link to={'/'} className="ratedName">A Heavy Lift</Link>
                                <div className="sellerAuthor">By: <span>John Doe</span></div>
                                <div className="bookPrice">$ 12.99 <span>$ 14.99</span><button className="cartIcon"><FaBasketShopping fill="#fff" /></button></div>
                            </div>
                        </div>
                        <div className="ratedCard">
                            <div className="ratedImg">
                                <Link to={'/'}>
                                    <img src="assets/images/seller-1.jpg" alt="Top Rated Book" />
                                </Link>
                            </div>
                            <div className="ratedDetails">
                                <div className="starRated">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <Link to={'/'} className="ratedName">A Heavy Lift</Link>
                                <div className="sellerAuthor">By: <span>John Doe</span></div>
                                <div className="bookPrice">$ 12.99 <span>$ 14.99</span><button className="cartIcon"><FaBasketShopping fill="#fff" /></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopRated;