import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SellerCard from "../items/SellerCard";
// 3. Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// 3. Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { featured } from "../../constants/data";

const FeatureBook = () => {
    const featureConfig = {
        modules: [Navigation],
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: true,
        loop: false,
        speed: 600,
        grabCursor: true,
    };
    return (
        <>
            <section className="featureBook">
                <div className="container">
                    <div className="titleBtn">
                        <div className="sectionHeading">Feature Book</div>
                        <Link to={'/'} className="btn borderBtn">View more <FaArrowRight /></Link>
                    </div>
                    <Swiper {...featureConfig}>
                        {featured.map((item) => (
                            <SwiperSlide key={item.id}>
                                <SellerCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default FeatureBook;