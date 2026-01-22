import { useEffect, useState } from 'react';
import { calculateTimeLeft, formatTime } from '../../constants/timer';
import { FaStar } from 'react-icons/fa';
import { FaBasketShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const FlashSale = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft('2026-01-28 00:00:00'));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft('2026-01-28 00:00:00'));
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <section className="saleBg">
                <div className="container">
                    <div className="saleGrid">
                        <div className="bgTitle">
                            <div className="sectionHeading">Flash Sale</div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                                tempora ipsa iusto cum provident saepe vero enim accusantium,
                                labore, error consequuntur ea laboriosam a odio itaque aliquid
                                animi porro ad.
                            </p>
                            <div className='timer'>
                                <div className="timerValue">{formatTime(timeLeft.days)}</div>
                                <span>:</span>
                                <div className="timerValue">{formatTime(timeLeft.hours)}</div>
                                <span>:</span>
                                <div className="timerValue">{formatTime(timeLeft.minutes)}</div>
                                <span>:</span>
                                <div className="timerValue">{formatTime(timeLeft.seconds)}</div>
                            </div>
                        </div>
                        <div className="saleTestimonial">
                            <div className="sellerCard withBg">
                                <div className="sellerImg">
                                    <Link to={'/'}><img alt="" src="/assets/images/seller-1.jpg" /></Link>
                                </div>
                                <div className="sellerContent">
                                    <div className="sellerCategory"><Link to={'/'}>Adventure</Link></div>
                                    <div className="starRated">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <div className="sellerName fsSale">A Heavy Lift</div>
                                    <div className="sellerAuthor">
                                        By: <span>John Doe</span>
                                    </div>
                                    <div className="price fsSale">
                                        $12.99 <span>$14.99</span>
                                    </div>
                                    <div className='bookLeft'>
                                        <div className='progreStats'>
                                            <div className='progressBar'></div>
                                            <div>47 Books Left</div>
                                        </div>
                                        <button className="cartIcon"><FaBasketShopping fill="#fff" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FlashSale;