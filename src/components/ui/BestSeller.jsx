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
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="sectionTitle">
                        <div className="sectionHeading">Best Seller</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora ipsa iusto cum provident saepe vero enim accusantium, labore, error consequuntur ea laboriosam a odio itaque aliquid animi porro ad.</p>
                    </div>
                    <div className="sellerGrid">
                        <Swiper {...bestSellerConfig}>
                            {sellerData.map((item, index) => (
                                <SwiperSlide key={index}>
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