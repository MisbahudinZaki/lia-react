import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const ContactCtaSection = () => {
    return (
        <section className="section contactus-banner">
            <div className="hero-container">
                <div className="contactus-content">

                    <AnimateOnScroll animation="fadeInUp">
                        <h3>
                            Contact Us to Get Started on Your Digital Journey
                        </h3>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeInUp" delay={100}>
                        <p>
                            Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus.
                            Erat nam at lectus urna duis convallis convallis tellus.
                            Egestas dui id ornare arcu odio ut sem nulla pharetra.
                        </p>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeInUp" delay={200}>
                        <div>
                            <a href="./contact.html" className="btn btn-accent">
                                Discover More
                            </a>
                        </div>
                    </AnimateOnScroll>

                </div>
            </div>
        </section>
    );
};

export default ContactCtaSection;