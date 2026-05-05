import PortfolioCard from "../Card/PortfolioCard";
import portfolioData from "../../Data/portfoliodata";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const PortfolioSection = () => {
    return (
        <section className="section portfolio-banner">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-4 position-relative z-2">

                    <AnimateOnScroll animation="fadeInUp">
                        <div className="d-flex flex-column gspace-2 align-items-center text-center">
                            <h6 className="accent-color">Portfolio</h6>
                            <h3>Where Creativity Meets Results</h3>
                            <p>
                                Ipsum suspendisse ultrices gravida dictum fusce ut. Convallis a cras semper auctor.
                                Sapien eget mi proin sed libero enim sed faucibus turpis.
                                Tellus orci ac auctor augue mauris augue neque gravida.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-3 grid-spacer-xl-5">
                        {portfolioData.map((item) => (
                            <div className="col" key={item.id}>
                                <PortfolioCard {...item} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;