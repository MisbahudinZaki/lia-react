import { useModalVideo } from "../Video/ModalVideoContext";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import portfolioData from "../../Data/portfoliodata";

const PortfolioDetailSection = ({ currentPortfolioId }) => {
    const { openModal } = useModalVideo();

    const otherPortfolio = portfolioData.filter(
        item => item.id !== currentPortfolioId
    );

    return (
        <section className="section">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-2">

                    <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 grid-spacer-2">
                        {[
                            { label: "Client", value: "John Doe" },
                            { label: "Date", value: "Mei, 7 2024" },
                            { label: "Services", value: "Content Creation" },
                            { label: "Budget", value: "$10000" }
                        ].map((item, index) => (
                            <div className="col" key={index}>
                                <AnimateOnScroll
                                    animation="fadeInUp"
                                    speed={index === 0 ? "fast" : index === 3 ? "slow" : ""}
                                >
                                    <div className="card portfolio-details-meta">
                                        <span>
                                            <p className="mb-0">{item.label}</p>
                                        </span>
                                        <h5>{item.value}</h5>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        ))}
                    </div>

                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">

                        {/* LEFT CONTENT */}
                        <div className="col col-md-8">
                            <div className="portfolio-details-layout">

                                <AnimateOnScroll animation="fadeInUp">
                                    <h3>Overview</h3>
                                </AnimateOnScroll>

                                <div>
                                    <p>
                                        Sed velit dignissim sodales ut. Porta lorem mollis aliquam
                                        ut porttitor leo a diam. Id velit ut tortor pretium viverra
                                        suspendisse. Nibh sed pulvinar proin gravida hendrerit
                                        lectus.
                                    </p>
                                    <p>
                                        Sed vulputate mi sit amet mauris commodo quis imperdiet.
                                        Morbi tincidunt augue interdum velit euismod.
                                    </p>
                                </div>

                                <div className="row row-cols-xl-2 row-cols-1 grid-spacer-2">
                                    <div className="col">
                                        <div className="image-container">
                                            <img
                                                src="/assets/images/group-of-young-perspective-designers-working-with-2023-11-27-05-03-14-utc-1_11zon-e1714972539106.webp"
                                                alt="Portfolio Image"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>

                                    {/* VIDEO */}
                                    <div className="col">
                                        <div className="portfolio-video-container">
                                            <button
                                                className="request-loader"
                                                onClick={() =>
                                                    openModal(
                                                        "https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1"
                                                    )
                                                }
                                                aria-label="Play Video"
                                            >
                                                <i className="fa-solid fa-play"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <h4>Portfolio Details</h4>

                                <div className="row row-cols-xl-2 row-cols-1 grid-spacer-2">
                                    <div className="col">
                                        <div className="d-flex flex-column gspace-2">
                                            <div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Ut elit tellus.
                                                </p>
                                                <p>
                                                    Et sollicitudin ac orci phasellus egestas
                                                    tellus rutrum.
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
                                        <div className="d-flex flex-column gspace-2">
                                            <AnimateOnScroll animation="fadeIn">
                                                <div className="image-container">
                                                    <img
                                                        src="/assets/images/top-view-of-laptop-smartphone-plant-notebook-wi-2023-11-27-05-02-45-utc_11zon-e1715068837321.webp"
                                                        alt="Detail Image"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </AnimateOnScroll>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Ut elit tellus.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* SIDEBAR */}
                        <div className="col col-md-4">
                            <div className="d-flex flex-column gspace-2">

                                <AnimateOnScroll animation="fadeInRight">
                                    <div className="card-other-portfolio">
                                        <h4>Other Portfolio</h4>

                                        {otherPortfolio.map(item => (
                                            <a
                                                key={item.id}
                                                href={item.link}
                                                className="btn-other-portfolio"
                                            >
                                                <i className="fa-solid fa-arrow-right"></i>
                                                <span>{item.title}</span>
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
            </div>
        </section>
    );
};

export default PortfolioDetailSection;