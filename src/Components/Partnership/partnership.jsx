import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import partnershipData from "../../Data/partnershipdata";

import "swiper/css";

const PartnershipSection = () => {
    return (
        <section className="section p-3 bg-secondary-accent">
            <div className="hero-container">
                <div className="overflow-hidden">

                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        speed={1000}
                        slidesPerView={5}
                        spaceBetween={30}
                        loop
                        grabCursor
                        breakpoints={{
                            319: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 }
                        }}
                    >
                        {partnershipData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="img-fluid"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default PartnershipSection;