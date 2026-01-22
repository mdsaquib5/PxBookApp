import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const Testimonial = () => {
    const testimonialData = [
        { id: 1, name: "Valerie J.", role: "CEO", logo: "/assets/images/bing.webp", avatar: "/assets/images/avatar-4.webp" },
        { id: 2, name: "Hannah R.", role: "CEO", logo: "/assets/images/hubs.webp", avatar: "/assets/images/avatar-4.webp" },
        { id: 3, name: "Pearl B. Hill", role: "Marketing", logo: "/assets/images/bing.webp", avatar: "/assets/images/avatar-4.webp" },
        { id: 4, name: "Mandy Wood", role: "Designer", logo: "/assets/images/hubs.webp", avatar: "/assets/images/avatar-4.webp" },
    ];

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
                        {/* Logic: Even index gets 'even' class, Odd gets 'odd' */}
                        <div className={`testimonialCard ${index % 2 === 0 ? 'even' : 'odd'}`}>
                            <div className="card-header">
                                <img src={item.logo} alt="brand" className="brand-logo" />
                                <span className="quote-icon">“</span>
                            </div>
                            <p>"Our educational, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi."</p>
                            <div className='testtimonialUser'>
                                <img src={item.avatar} alt={item.name} />
                                <p>{item.name}, {item.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* SECOND SLIDER (Sliding Right) */}
            <Swiper
                {...commonConfig}
                autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
                className="testimonial-swiper"
            >
                {[...testimonialData, ...testimonialData].map((item, index) => (
                    <SwiperSlide key={`row2-${index}`}>
                        {/* Row 2 logic: Swap the odd/even to create the offset pattern */}
                        <div className={`testimonialCard ${index % 2 !== 0 ? 'even' : 'odd'}`}>
                            <div className="card-header">
                                <img src={item.logo} alt="brand" className="brand-logo" />
                                <span className="quote-icon">“</span>
                            </div>
                            <p>"Like this histudy, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi."</p>
                            <div className='testtimonialUser'>
                                <img src={item.avatar} alt={item.name} />
                                <p>{item.name}, {item.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonial;