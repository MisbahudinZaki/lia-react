import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import servicesData from "../../Data/servicedata";

const ServiceDetailSection = ({ currentServiceId }) => {
    const otherServices = servicesData.filter(
        service => service.id !== currentServiceId
    );

    return (
        <section className="section">
            <div className="hero-container">
                <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">

                    <div className="col col-md-8">
                        <div className="service-details-layout">

                            <AnimateOnScroll animation="fadeInUp">
                                <h3>Overview</h3>
                            </AnimateOnScroll>

                            <div>
                                <p>
                                    Sed velit dignissim sodales ut. Porta lorem mollis aliquam ut
                                    porttitor leo a diam. Id velit ut tortor pretium viverra
                                    suspendisse. Nibh sed pulvinar proin gravida hendrerit lectus.
                                    Dui ut ornare lectus sit amet. Id neque aliquam vestibulum
                                    morbi blandit. In iaculis nunc sed augue.
                                </p>
                                <p>
                                    Sed vulputate mi sit amet mauris commodo quis imperdiet.
                                    Morbi tincidunt augue interdum velit euismod. Lectus nulla at
                                    volutpat diam ut venenatis tellus.
                                </p>
                            </div>

                            <h4>Benefit</h4>

                            <div className="row row-cols-xl-2 row-cols-1 g-3">
                                <div className="col">
                                    <div className="d-flex flex-column gspace-2">
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Ut elit tellus, luctus nec ullamcorper mattis,
                                                pulvinar dapibus leo.
                                            </p>
                                            <p>
                                                Et sollicitudin ac orci phasellus egestas tellus
                                                rutrum tellus pellentesque.
                                            </p>
                                        </div>

                                        <ul className="check-list">
                                            <li>Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.</li>
                                            <li>Sed adipiscing diam donec adipiscing.</li>
                                            <li>Porttitor eget dolor morbi non arcu.</li>
                                            <li>Eget nulla facilisi etiam dignissim diam.</li>
                                            <li>A condimentum vitae sapien pellentesque.</li>
                                            <li>Pulvinar neque laoreet suspendisse interdum.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col">
                                    <AnimateOnScroll animation="fadeIn">
                                        <div className="image-container">
                                            <img
                                                src="/assets/images/we-share-a-great-working-relationship-in-this-offi-2023-11-27-05-31-52-utc-1_11zon-e1715048974314.webp"
                                                alt="Service Detail"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-4">
                        <div className="d-flex flex-column gspace-2">

                            <AnimateOnScroll animation="fadeInRight">
                                <div className="card-other-service">
                                    <h4>Other Services</h4>

                                    {otherServices.map(service => (
                                        <a
                                            key={service.id}
                                            href={service.link}
                                            className="btn-other-service"
                                        >
                                            <i className="fa-solid fa-arrow-right"></i>
                                            <span>{service.title}</span>
                                        </a>
                                    ))}
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" slow>
                                <div className="cta-banner">
                                    <h4>Get Started on Your Digital Journey</h4>
                                    <p>
                                        Erat nam at lectus urna duis convallis convallis tellus.
                                        Egestas dui id ornare arcu odio ut sem nulla pharetra.
                                    </p>
                                    <div>
                                        <a href="/contact" className="btn btn-accent">
                                            Discover More
                                        </a>
                                    </div>
                                </div>
                            </AnimateOnScroll>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceDetailSection;