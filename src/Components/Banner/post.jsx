const BannerPostSection = () => {
    return (
        <div className="section banner-inner">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-2">

                    <h6>Tech and Tools</h6>

                    <h2>Digital Disruption: Navigating the New Normal</h2>

                    <nav className="breadcrumb">
                        <a href="/">Home</a>

                        <span className="separator">
                            <i className="fa-solid fa-chevron-right"></i>
                        </span>

                        <a href="/blog">Blog Archive</a>

                        <span className="separator">
                            <i className="fa-solid fa-chevron-right"></i>
                        </span>

                        <span className="current">
                            Digital Disruption: Navigating the New Normal
                        </span>
                    </nav>

                    <div className="d-flex flex-row align-self-center gspace-3">

                        <div className="d-flex flex-row align-items-center gspace-1">
                            <i className="fa-solid fa-calendar-days text-accent-color"></i>
                            <p className="mb-0">May 10, 2024</p>
                        </div>

                        <div className="d-flex flex-row align-items-center gspace-1">
                            <i className="fa-solid fa-message text-accent-color"></i>
                            <p className="mb-0">No Comments</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BannerPostSection;