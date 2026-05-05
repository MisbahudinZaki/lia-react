const TestimonialCard = ({ image, content, name, title }) => {
    return (
        <div className="card card-testimonial">
            <div className="testimonial-image">
                <img src={image} alt={name} className="img-fluid" />
            </div>

            <p className="testimonial-content">
                {content}
            </p>

            <span className="testimonial-name">{name}</span>
            <span className="testimonial-title">{title}</span>
        </div>
    );
};

export default TestimonialCard;