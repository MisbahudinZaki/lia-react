import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const PortfolioCard = ({
    number,
    title,
    image,
    client,
    date,
    description,
    link
}) => {
    return (
        <AnimateOnScroll animation="fadeInUp">
            <div className="portfolio-layout">
                <div className="portfolio-header">
                    <div className="portfolio-image-wrapper">
                        <div className="image-container portfolio-image">
                            <img src={image} alt={title} className="img-fluid" />
                        </div>
                    </div>
                    <h4 className="number">{number}</h4>
                </div>

                <div className="portfolio-content">
                    <h5>{title}</h5>

                    <div className="d-flex flex-row gspace-4">
                        <div className="portfolio-meta">
                            <i className="fa-solid fa-users"></i>
                            <div className="d-grid">
                                <span className="title">Client</span>
                                <p>{client}</p>
                            </div>
                        </div>
                        <div className="portfolio-meta">
                            <i className="fa-solid fa-calendar-days"></i>
                            <div className="d-grid">
                                <span className="title">Date</span>
                                <p>{date}</p>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-description">
                        <p>{description}</p>
                        <div className="portfolio-btn-wrapper">
                            <div>
                                <div className="portfolio-btn">
                                    <a href={link} className="button">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimateOnScroll>
    );
};

export default PortfolioCard;