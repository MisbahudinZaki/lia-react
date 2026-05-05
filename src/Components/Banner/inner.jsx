import PropTypes from "prop-types";

const BannerInner = ({ title, breadcrumbs }) => {
    return (
        <section className="section banner-inner">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-2">
                    <h2>{title}</h2>

                    <nav className="breadcrumb">
                        {breadcrumbs.map((item, index) => (
                            <span key={index} className="d-inline-flex gspace-1 align-items-center">
                                {item.href ? (
                                    <a href={item.href} className={item.current ? "current" : ""}>
                                        {item.label}
                                    </a>
                                ) : (
                                    <span className="current">{item.label}</span>
                                )}

                                {index < breadcrumbs.length - 1 && (
                                    <span className="separator">
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </span>
                                )}
                            </span>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
};

BannerInner.propTypes = {
    title: PropTypes.string.isRequired,
    breadcrumbs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string,
            current: PropTypes.bool
        })
    ).isRequired
};

export default BannerInner;