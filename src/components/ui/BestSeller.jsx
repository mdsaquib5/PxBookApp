import SellerCard from "../items/SellerCard";
import { sellerData } from "../../constants/data";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const BestSeller = () => {
    const bestSellerConfig = {
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
            <section>
                <div className="container">
                    <div className="sectionTitle">
                        <div className="sectionHeading">Best Seller</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora ipsa iusto cum provident saepe vero enim accusantium, labore, error consequuntur ea laboriosam a odio itaque aliquid animi porro ad.</p>
                    </div>
                    <div className="sellerTestimonial">
                        <Swiper {...bestSellerConfig}>
                            {sellerData.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <SellerCard item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestSeller;