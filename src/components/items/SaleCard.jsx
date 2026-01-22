import { FaStar } from 'react-icons/fa';
import { FaBasketShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SaleCard = ({item}) => {
    return (
        <div className="sellerCard withBg">
            <div className="sellerImg">
                <Link to="/">
                    <img
                        alt=""
                        src={item.img}
                    />
                </Link>
            </div>

            <div className="sellerContent">
                <div className="sellerCategory">
                    <Link to="/">{item.category}</Link>
                </div>

                <div className="starRated">
                    <FaStar /><FaStar /><FaStar />
                    <FaStar /><FaStar />
                </div>

                <div className="sellerName fsSale">
                    {item.name}
                </div>

                <div className="sellerAuthor">
                    By: <span>{item.author}</span>
                </div>

                <div className="price fsSale">
                    ${item.price} <span>${item.oldPrice}</span>
                </div>

                <div className="bookLeft">
                    <div className="progreStats">
                        <div className="progressBar">
                            <div style={{ width: `${item.leftBooks / 100}%` }}></div>
                        </div>
                        <div>{item.leftBooks} Books Left</div>
                    </div>

                    <button className="cartIcon">
                        <FaBasketShopping fill="#fff" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SaleCard