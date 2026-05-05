import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const AboutSection = () => {
    return(
        <>
            <section className="section about-banner">
                <div className="hero-container">
                    <div className="row row-cols-xl-2 row-cols-1 grid-spacer-2">
                        <div className="col">
                            <div className="d-flex flex-column gspace-2 position-relative">
                                <div className="card card-about">
                                    <span className="wrapper">
                                        <span className="number">25</span>
                                    </span>
                                    <p className="title">Years of Experience</p>
                                </div>
                                <div className="image-container about-img">
                                    <img src="assets/images/group-of-young-perspective-designers-working-with-2023-11-27-05-03-14-utc-1_11zon-e1714972539106.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <AnimateOnScroll animation="fadeInUp">
                                <div className="about-detail">
                                    <h6 className="accent-color">About</h6>
                                    <h3>Your Partner in Digital Growth and Innovation</h3>
                                    <p>Pellentesque adipiscing commodo elit at. Facilisis sed odio morbi quis commodo odio. Porttitor massa id neque aliquam vestibulum morbi blandit. Lectus proin nibh nisl condimentum id. Aenean et tortor at risus. Vel pharetra vel turpis nunc eget lorem dolor.</p>
                                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Amet purus gravida quis blandit</li>
                                                <li>Condimentum lacinia quis vel eros</li>
                                                <li>Turpis cursus in hac habitasse</li>
                                                <li>Et netus et malesuada fames</li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Amet purus gravida quis blandit</li>
                                                <li>Condimentum lacinia quis vel eros</li>
                                                <li>Turpis cursus in hac habitasse</li>
                                                <li>Et netus et malesuada fames</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="./about.html" className="btn btn-accent">Learn More</a>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutSection;