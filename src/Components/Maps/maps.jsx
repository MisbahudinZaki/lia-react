const MapsSection = () => {
    return (
        <section className="section">
            <div className="hero-container">
                <iframe
                    className="maps"
                    loading="lazy"
                    src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near"
                    title="London Eye, London, United Kingdom"
                    aria-label="London Eye, London, United Kingdom"
                />
            </div>
        </section>
    );
};

export default MapsSection;