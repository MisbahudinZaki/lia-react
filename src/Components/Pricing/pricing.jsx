import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const PricingSection = () => {
    return (
        <>
            <section className="section">
                <div className="hero-container overflow-visible">
                    <div className="d-flex flex-column gspace-4">

                        {/* Heading */}
                        <AnimateOnScroll animation="fadeInUp">
                            <div className="d-flex flex-column gspace-2 text-center">
                                <h6 className="accent-color">Pricing</h6>
                                <h3>Affordable Solutions for Your Digital Needs</h3>
                                <p>
                                    Ipsum suspendisse ultrices gravida dictum fusce ut.
                                    Convallis a cras semper auctor. Sapien eget mi proin
                                    sed libero enim sed faucibus turpis.
                                </p>
                            </div>
                        </AnimateOnScroll>

                        {/* Pricing Cards */}
                        <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2">

                            {/* Basic Plan */}
                            <div className="col order-1">
                                <AnimateOnScroll animation="fadeInUp">
                                    <div className="card card-pricing-wrapper">
                                        <div className="card-pricing">
                                            <h4>Basic Plan</h4>
                                            <p>
                                                Arcu vitae elementum curabitur vitae nunc
                                                sed velit dignissim.
                                            </p>

                                            <div className="d-flex flex-row gspace-1 align-items-end">
                                                <span className="price">$30.00</span>
                                                <p className="price-details">Per Month</p>
                                            </div>

                                            <ul className="check-list">
                                                <li>Enim nec dui nunc mattis enim ut</li>
                                                <li>Vitae turpis massa sed elementum tempus</li>
                                                <li>Commodo viverra maecenas accumsan lacus</li>
                                                <li>Massa vitae tortor lacinia</li>
                                                <li>In metus vulputate eu scelerisque</li>
                                                <li>Mauris in aliquam sem fringilla ut</li>
                                                <li>In fermentum posuere urna nec</li>
                                            </ul>

                                            <a href="#" className="btn btn-accent">
                                                Purchase
                                            </a>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            </div>

                            {/* Gold Plan (Popular) */}
                            <div className="col order-3 order-xl-2 align-items-center mx-auto">
                                <AnimateOnScroll animation="fadeInUp">
                                    <div className="card card-pricing-wrapper">
                                        <div className="card-pricing popular">
                                            <div className="card popular-card">
                                                <span>Popular Package</span>
                                            </div>

                                            <h4>Gold Plan</h4>
                                            <p>
                                                Arcu vitae elementum curabitur vitae nunc
                                                sed velit dignissim.
                                            </p>

                                            <div className="d-flex flex-row gspace-1 align-items-end">
                                                <span className="price primary-accent">$60.00</span>
                                                <p className="price-details">Per Month</p>
                                            </div>

                                            <ul className="check-list">
                                                <li>Enim nec dui nunc mattis enim ut</li>
                                                <li>Vitae turpis massa sed elementum tempus</li>
                                                <li>Commodo viverra maecenas accumsan lacus</li>
                                                <li>Massa vitae tortor lacinia</li>
                                                <li>In metus vulputate eu scelerisque</li>
                                                <li>Mauris in aliquam sem fringilla ut</li>
                                                <li>In fermentum posuere urna nec</li>
                                            </ul>

                                            <a href="#" className="btn btn-accent-3">
                                                Purchase
                                            </a>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            </div>

                            {/* Platinum Plan */}
                            <div className="col order-2 order-xl-3">
                                <AnimateOnScroll animation="fadeInUp">
                                    <div className="card card-pricing-wrapper">
                                        <div className="card-pricing">
                                            <h4>Platinum Plan</h4>
                                            <p>
                                                Arcu vitae elementum curabitur vitae nunc
                                                sed velit dignissim.
                                            </p>

                                            <div className="d-flex flex-row gspace-1 align-items-end">
                                                <span className="price">$90.00</span>
                                                <p className="price-details">Per Month</p>
                                            </div>

                                            <ul className="check-list">
                                                <li>Enim nec dui nunc mattis enim ut</li>
                                                <li>Vitae turpis massa sed elementum tempus</li>
                                                <li>Commodo viverra maecenas accumsan lacus</li>
                                                <li>Massa vitae tortor lacinia</li>
                                                <li>In metus vulputate eu scelerisque</li>
                                                <li>Mauris in aliquam sem fringilla ut</li>
                                                <li>In fermentum posuere urna nec</li>
                                            </ul>

                                            <a href="#" className="btn btn-accent">
                                                Purchase
                                            </a>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingSection;