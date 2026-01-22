import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { testimonialData } from '../../constants/data';
import TestimonialCard from '../items/TestimonialCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const Testimonial = () => {

    // Common Configuration
    const commonConfig = {
        allowTouchMove: false,
        simulateTouch: false,
        slidesPerView: 1.2,
        spaceBetween: 30,
        loop: true,
        freeMode: true,
        speed: 13000,
        modules: [Autoplay, FreeMode],
        breakpoints: {
            1200: { slidesPerView: 3 },
            1024: { slidesPerView: 2 },
            640: { slidesPerView: 1 },
        },
    };

    return (
        <section className="testimonial-section">
            <div className="sectionTitle">
                <div className="sectionHeading">Testimonial</div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, labore praesentium corporis qui maiores reprehenderit pariatur mollitia unde, obcaecati nisi officia. Aliquam at sunt soluta totam dicta id aliquid debitis.</p>
            </div>

            {/* FIRST SLIDER (Sliding Left) */}
            <Swiper
                {...commonConfig}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                className="testimonial-swiper mb-30"
            >
                {[...testimonialData, ...testimonialData].map((item, index) => (
                    <SwiperSlide key={`row1-${index}`}>
                        <TestimonialCard 
                            item={item}
                            className={index % 2 === 0 ? 'even' : 'odd'}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                {...commonConfig}
                autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
                className="testimonial-swiper"
            >
                {[...testimonialData, ...testimonialData].map((item, index) => (
                    <SwiperSlide key={`row2-${index}`}>
                        <TestimonialCard 
                            item={item}
                            className={index % 2 !== 0 ? 'even' : 'odd'}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonial;