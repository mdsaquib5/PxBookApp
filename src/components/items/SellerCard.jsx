import { FaStar } from "react-icons/fa";

const SellerCard = ({ item }) => {
    return (
        <div className="sellerCard withBg">
            <div className="sellerImg">
                <img src={item.img} alt="" />
            </div>
            <div className="sellerContent">
                <div className="sellerCategory">Best Seller</div>
                <div className="sellerName">{item.name}</div>
                <div className="sellerAuthor">By: <span>{item.author}</span></div>
                <div className="price">${item.price} <span>${item.discount}</span></div>
                <div className="sellerBtn">
                    <button className="btn cartBtn">Add to Cart</button>
                    <button className="btn ctaBtn">Buy Now</button>
                </div>
                <div className="selleRating"><FaStar fill="#cc6201" />{item.rating}</div>
            </div>
        </div>
    )
}

export default SellerCard;