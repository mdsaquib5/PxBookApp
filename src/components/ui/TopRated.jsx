import { Link } from "react-router-dom";
import { ratedCard } from "../../constants/data";
import { FaArrowRight } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import RatedCard from "../items/RatedCard";

const TopRated = () => {
    const topRatedConfig = {
        modules: [Navigation],
        slidesPerView: 7,
        spaceBetween: 20,
        navigation: true,
        loop: false,
        speed: 600,
        grabCursor: true,
        breakpoints: {
            // 1800px → 1440px
            1440: {
                slidesPerView: 5,
            },
            1240: {
                slidesPerView: 2,
            },
            // 1240px → 1024px
            1024: {
                slidesPerView: 4,
            },
            // 1024px → 992px
            992: {
                slidesPerView: 3,
            },

            // 992px → 768px
            768: {
                slidesPerView: 3,
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
        <>
            <section>
                <div className="container">
                    <div className="titleBtn">
                        <div className="sectionHeading">10 Top Rated Books</div>
                        <Link to={'/'} className="btn borderBtn">View more <FaArrowRight /></Link>
                    </div>
                    <div className="ratedGrid">
                        <Swiper {...topRatedConfig}>
                            {ratedCard.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <RatedCard item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopRated;