import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

const RatedCard = ({ item }) => {
  return (
    <div className="ratedCard">
      <div className="ratedImg">
        <Link to={'/'}>
          <img src={item.img} alt="Top Rated Book" />
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
        <Link to={'/'} className="ratedName">{item.name}</Link>
        <div className="sellerAuthor">By: <span>{item.author}</span></div>
        <div className="bookPrice">$ {item.price} <span>$ {item.discount}</span><button className="cartIcon"><FaBasketShopping fill="#fff" /></button></div>
      </div>
    </div>
  )
}

export default RatedCard;