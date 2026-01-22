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
                slidesPerView: 2,
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