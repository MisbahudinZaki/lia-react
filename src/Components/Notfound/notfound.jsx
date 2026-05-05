const NotFoundSection = () => {
    return(
        <section className="section-notfound banner-notfound">
            <div className="hero-container">
                <div className="notfound-container">
                    <span className="text-notfound">404</span>
                    <h3>Page is Not Found!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <a href="./index.html" className="btn btn-accent">Back To Home</a>
                </div>
            </div>
        </section>
    );
}

export default NotFoundSection;