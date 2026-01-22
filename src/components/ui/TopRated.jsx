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