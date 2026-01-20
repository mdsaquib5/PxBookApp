import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const BookCard = ({item}) => {
    return (
        <Link className="bookCard">
            <div className="bookImg">
                <div className="rating">
                    <div className="star"><FaStar fill="#fff" /></div>
                    <div className="ratingText">{item.rating}</div>
                </div>
                <img src={item.img} alt={item.name} />
            </div>
            <div className="bookDetails">
                <div className="bookCategory">{item.category}</div>
                <div className="bookName">{item.name}</div>
                <div className="bookAuthor"><span>By:</span> {item.author}</div>
                <div className="bookPrice">$ {item.price} <span>$ {item.discount}</span></div>
            </div>
        </Link>
    )
}

export default BookCard;