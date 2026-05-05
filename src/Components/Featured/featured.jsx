import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const FeaturedSection = () => {
    return (
        <section className="section">
            <div className="hero-container">
                <div className="row row-cols-xl-2 row-cols-1 grid-spacer-2">

                    <div className="col col-xl-4">
                        <div className="d-flex flex-column flex-md-row flex-xl-column gspace-2">

                            <AnimateOnScroll animation="fadeInLeft">
                                <div className="card card-featured creative-solution">
                                    <h4>Creative Solution</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                    <div>
                                        <a href="#" className="btn btn-accent-2">
                                            <div className="d-flex flex-row align-items-center gspace-1">
                                                <span>Learn More</span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInDown">
                                <div className="card card-featured bussines-avaliable">
                                    <div className="d-flex flex-row gspace-1 align-items-center">
                                        <i className="fa-solid fa-check"></i>
                                        <h5>Avaliable for All Business</h5>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                </div>
                            </AnimateOnScroll>

                        </div>
                    </div>

                    <div className="col col-xl-8">
                        <div className="d-flex flex-column gspace-2">

                            <div className="d-flex flex-md-row flex-column gspace-2">

                                <AnimateOnScroll animation="fadeIn">
                                    <div className="card card-featured client-rating">
                                        <span className="rating">4.8</span>
                                        <h5>Client Ratings</h5>
                                        <div className="stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInUp">
                                    <div className="card card-featured solid-development">
                                        <h4>Solid Development</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </p>
                                        <div>
                                            <a href="#" className="btn btn-accent-2">
                                                <div className="d-flex flex-row align-items-center gspace-1">
                                                    <span>Learn More</span>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </AnimateOnScroll>

                            </div>

                            <AnimateOnScroll animation="fadeInRight">
                                <div className="card card-featured experience">
                                    <h4>Great Experience</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                    <div>
                                        <a href="#" className="btn btn-accent-2">
                                            <div className="d-flex flex-row align-items-center gspace-1">
                                                <span>Learn More</span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
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

export default FeaturedSection;