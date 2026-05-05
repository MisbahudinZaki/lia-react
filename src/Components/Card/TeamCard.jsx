const TeamCard = ({
    image,
    name,
    role,
    socials,
    offset = ""
}) => {
    return (
        <div className={`team-layout ${offset}`}>
            <div className="image-container">
                <img src={image} alt={name} className="img-fluid" />

                <div className="team-detail">
                    <h5>{name}</h5>
                    <span className="team-title">{role}</span>

                    <div className="social-container">
                        {socials?.facebook && (
                            <a href={socials.facebook} className="social-item">
                                <i className="fa-brands fa-xs fa-facebook"></i>
                            </a>
                        )}
                        {socials?.twitter && (
                            <a href={socials.twitter} className="social-item">
                                <i className="fa-brands fa-xs fa-x-twitter"></i>
                            </a>
                        )}
                        {socials?.linkedin && (
                            <a href={socials.linkedin} className="social-item">
                                <i className="fa-brands fa-xs fa-linkedin-in"></i>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
