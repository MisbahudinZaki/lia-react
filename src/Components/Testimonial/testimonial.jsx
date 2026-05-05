import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import TestimonialCard from "../Card/TestimonialCard";
import testimonialData from "../../Data/testimonialdata";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const TestimonialSection = () => {
    return (
        <section className="section">
            <div className="hero-container">
                <div className="row row-cols-xl-2 row-cols-1 grid-spacer-2">

                    <div className="col">
                        <AnimateOnScroll animation="fadeInLeft">
                            <div className="d-flex flex-column gspace-2">
                                <h6 className="accent-color">Testimonials</h6>
                                <h3>Proof of Our Excellence</h3>
                                <p>
                                    Egestas dui id ornare arcu odio ut sem nulla pharetra.
                                    Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus.
                                    Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    <div className="col">
                        <AnimateOnScroll animation="fadeInRight">
                            <div className="overflow-hidden">
                                <Swiper
                                    modules={[Autoplay, Navigation]}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false
                                    }}
                                    speed={2000}
                                    slidesPerView={2}
                                    spaceBetween={50}
                                    loop={true}
                                    grabCursor={true}
                                    navigation={false}
                                    pagination={false}
                                    breakpoints={{
                                        319: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 }
                                    }}
                                >
                                    {testimonialData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <TestimonialCard {...item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </AnimateOnScroll>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;