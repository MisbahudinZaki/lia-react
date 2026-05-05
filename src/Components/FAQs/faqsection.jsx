import { useState } from "react";
import faqData from "../../Data/faqdata";
import FaqItem from "./faqItem";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const FaqSection = () => {
    const [activeId, setActiveId] = useState(
        faqData.find(item => item.open)?.id || null
    );

    const handleToggle = (id) => {
        setActiveId(prev => (prev === id ? null : id));
    };

    return (
        <section className="section">
            <div className="hero-container">
                <div className="row row-cols-md-2 row-cols-1 g-md-5 g-3">

                    {/* FAQ LEFT */}
                    <div className="col col-md-8">
                       <div className="accordion d-flex flex-column gspace-2" id="faqAccordion1">
                            {faqData.map((item, index) => (
                                <FaqItem
                                    key={item.id}
                                    id={item.id}
                                    question={item.question}
                                    answer={item.answer}
                                    defaultOpen={index === 0}
                                />
                            ))}
                        </div>
                    </div>

                    {/* FAQ RIGHT */}
                    <div className="col-md-4">
                        <div className="d-flex flex-column gspace-2">

                            <AnimateOnScroll animation="fadeInRight">
                                <div className="faq-contact-card">
                                    <h4>Do You Have Any Other Questions</h4>
                                    <p className="mb-0">Feel free to contact us</p>

                                    <div className="d-flex align-items-center gspace-2">
                                        <i className="fa-solid fa-2x fa-phone-volume accent-color"></i>
                                        <div>
                                            <h5>Phone</h5>
                                            <p className="mb-0">(+62)812 1234 4567</p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center gspace-2">
                                        <i className="fa-solid fa-2x fa-envelope accent-color"></i>
                                        <div>
                                            <h5>Mail</h5>
                                            <p className="mb-0">lia@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight">
                                <div className="cta-banner">
                                    <h4>Get Started on Your Digital Journey</h4>
                                    <p>
                                        Erat nam at lectus urna duis convallis convallis tellus.
                                    </p>
                                    <a href="/contact" className="btn btn-accent">
                                        Discover More
                                    </a>
                                </div>
                            </AnimateOnScroll>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FaqSection;