import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const ServiceCard = ({ title, image, description, highlight, link, onEdit, onDelete }) => {
    return (
        <AnimateOnScroll animation="fadeIn">
            <div className="card card-service-wrapper">
                <div className={`card card-service ${highlight ? "highlight-service" : ""}`}>
                    <div>
                        <img src={image} alt={title} className="img-fluid" />
                    </div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className="service-cta">
                        <a href={link} className="service-link">
                            Learn More
                        </a>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="d-flex flex-column flex-gap-2">
                        <button className="btn btn-accent" onClick={onEdit}>Edit</button>
                        <button className="btn btn-accent" onClick={onDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </AnimateOnScroll>
    );
};

export default ServiceCard;