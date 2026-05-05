import ContactForm from "../Form/ContactForm";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const ContactSection = () => {
    return (
        <section className="section">
            <div className="hero-container">
                <div className="row row-cols-xl-2 row-cols-1 g-5">

                    <div className="col">
                        <div className="contact-title">
                            <h6 className="accent-color">Get In Touch</h6>
                            <h3>Connect with Our Team for Expert Solutions</h3>
                            <p>Pellentesque adipiscing commodo elit at. Facilisis sed odio morbi quis commodo odio. Porttitor massa id neque aliquam vestibulum morbi blandit. Lectus proin nibh nisl condimentum id. </p>
                            <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                                <div className="col">
                                    <AnimateOnScroll animation="fadeInUp">
                                        <div className="contact-details-card">
                                            <div className="card contact-details-icon">
                                                <i className="fa-solid fa-phone-volume"></i>
                                            </div>
                                            <div className="d-flex flex-column gspace-1">
                                                <h5>Phone</h5>
                                                <p className="mb-0">(+62)812 1234 4567</p>
                                            </div>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                                <div className="col">
                                    <AnimateOnScroll animation="fadeInUp">
                                        <div className="contact-details-card">
                                            <div className="card contact-details-icon">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div className="d-flex flex-column gspace-1">
                                                <h5>Mail</h5>
                                                <p className="mb-0">lia@example.com</p>
                                            </div>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                                <div className="col">
                                    <AnimateOnScroll animation="fadeInUp">
                                        <div className="contact-details-card">
                                            <div className="card contact-details-icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div className="d-flex flex-column gspace-1">
                                                <h5>Location</h5>
                                                <p className="mb-0">Pekanbaru, Indonesia</p>
                                            </div>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                                <div className="col">
                                    <AnimateOnScroll animation="fadeInUp">
                                        <div className="contact-details-card">
                                            <div className="card contact-details-icon">
                                                <i className="fa-solid fa-clock"></i>
                                            </div>
                                            <div className="d-flex flex-column gspace-1">
                                                <h5>Work Hours</h5>
                                                <p className="mb-0">9 AM - 10 PM, Monday - Friday</p>
                                            </div>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;