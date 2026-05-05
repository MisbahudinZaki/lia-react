import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const WhyChooseUsSection = () => {
    return (
        <section className="section whychooseus-banner">
            <div className="hero-container">
                <div className="whychooseus-wrapper">

                    <AnimateOnScroll animation="fadeInLeft">
                        <div className="chooseus-details">
                            <h6 className="accent-color">Value</h6>
                            <h3>Driving Your Success in the Digital Age</h3>
                            <p>
                                Pellentesque adipiscing commodo elit at. Facilisis sed odio morbi quis commodo odio.
                                Porttitor massa id neque aliquam vestibulum morbi blandit. Lectus proin nibh nisl
                                condimentum id.
                            </p>

                            <div className="card card-chooseus highlight">
                                <div className="chooseus-icon">
                                    <img
                                        src="assets/images/trophy-digital-marketing-marketing-sports-and-competition-award@4x1.webp"
                                        alt="Expertise"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="d-flex flex-column gspace-2">
                                    <h5>Expertise</h5>
                                    <p>
                                        Ipsum suspendisse ultrices gravida dictum fusce ut. Convallis a cras semper
                                        auctor. Sapien eget mi proin sed libero.
                                    </p>
                                </div>
                            </div>

                            <div className="card card-chooseus">
                                <div className="chooseus-icon">
                                    <img
                                        src="assets/images/keyword-digital-marketing-seo-magnifier-research-marketing@4x1.webp"
                                        alt="Innovation"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="d-flex flex-column gspace-2">
                                    <h5>Innovation</h5>
                                    <p>
                                        Ipsum suspendisse ultrices gravida dictum fusce ut. Convallis a cras semper
                                        auctor. Sapien eget mi proin sed libero.
                                    </p>
                                </div>
                            </div>

                            <div className="card card-chooseus">
                                <div className="chooseus-icon">
                                    <img
                                        src="assets/images/bar-chart-line-graph-setting-monitor-analysis-statistics@4x1.webp"
                                        alt="Customized Approach"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="d-flex flex-column gspace-2">
                                    <h5>Customized Approach</h5>
                                    <p>
                                        Ipsum suspendisse ultrices gravida dictum fusce ut. Convallis a cras semper
                                        auctor. Sapien eget mi proin sed libero.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeInRight">
                        <div className="chooseus-image-layout">
                            <div className="chooseus-image-header">
                                <i className="fa-solid fa-circle"></i>
                            </div>

                            <div className="image-container chooseus-image">
                                <img
                                    src="assets/images/we-share-a-great-working-relationship-in-this-offi-2023-11-27-05-31-52-utc-1_11zon-e1715048974314.webp"
                                    alt="Why Choose Us"
                                    className="img-fluid"
                                />
                            </div>

                            <div className="chooseus-image-footer">
                                <div className="icon-wrapper">
                                    <i className="fa-regular fa-square"></i>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;