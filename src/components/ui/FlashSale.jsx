// 1. React imports
import { useEffect, useState } from 'react';

// 2. Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// 3. Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// 4. Utils
import { calculateTimeLeft, formatTime } from '../../constants/timer';
import { sale } from '../../constants/data';

// 5. Icons
import { FaStar } from 'react-icons/fa';
import { FaBasketShopping } from 'react-icons/fa6';

// 6. Router
import { Link } from 'react-router-dom';

const FlashSale = () => {
    const [timeLeft, setTimeLeft] = useState(
        calculateTimeLeft('2026-01-28 00:00:00')
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft('2026-01-28 00:00:00'));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    
    const swiperConfig = {
        modules: [Navigation],
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 600,
        grabCursor: true,
        breakpoints: {
            // 1800px → 1440px
            1440: {
                slidesPerView: 2,
            },
            1240: {
                slidesPerView: 2,
            },
            // 1240px → 1024px
            1024: {
                slidesPerView: 1,
            },
            // 1024px → 992px
            992: {
                slidesPerView: 1,
            },

            // 992px → 768px
            768: {
                slidesPerView: 1,
            },
            // 768px → 576px
            576: {
                slidesPerView: 1,
            },

            // below 576px
            0: {
                slidesPerView: 1,
            }
        }
    };

    return (
        <section className="saleBg">
            <div className="container-fluid">
                <div className="saleGrid">
                    <div className="bgTitle">
                        <div className="sectionHeading">Flash Sale</div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Placeat tempora ipsa iusto cum provident saepe.
                        </p>

                        <div className="timer">
                            <div className="timerValue">{formatTime(timeLeft.days)}</div>
                            <span>:</span>
                            <div className="timerValue">{formatTime(timeLeft.hours)}</div>
                            <span>:</span>
                            <div className="timerValue">{formatTime(timeLeft.minutes)}</div>
                            <span>:</span>
                            <div className="timerValue">{formatTime(timeLeft.seconds)}</div>
                        </div>
                    </div>

                    {/* Slider */}
                    <div className="saleTestimonial">
                        <Swiper {...swiperConfig}>
                            {sale.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="sellerCard withBg">
                                        <div className="sellerImg">
                                            <Link to="/">
                                                <img
                                                    alt=""
                                                    src="/assets/images/seller-1.jpg"
                                                />
                                            </Link>
                                        </div>

                                        <div className="sellerContent">
                                            <div className="sellerCategory">
                                                <Link to="/">Adventure</Link>
                                            </div>

                                            <div className="starRated">
                                                <FaStar /><FaStar /><FaStar />
                                                <FaStar /><FaStar />
                                            </div>

                                            <div className="sellerName fsSale">
                                                A Heavy Lift
                                            </div>

                                            <div className="sellerAuthor">
                                                By: <span>John Doe</span>
                                            </div>

                                            <div className="price fsSale">
                                                $12.99 <span>$14.99</span>
                                            </div>

                                            <div className="bookLeft">
                                                <div className="progreStats">
                                                    <div className="progressBar"></div>
                                                    <div>47 Books Left</div>
                                                </div>

                                                <button className="cartIcon">
                                                    <FaBasketShopping fill="#fff" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlashSale;