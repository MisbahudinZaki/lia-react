import CounterOnScroll from "../Hooks/CounterOnScroll";

const AchievementSection = () => {
    return(
        <section className="section">
            <div className="hero-container">
                <div className="achievement-banner">
                    <div className="d-flex flex-column flex-xl-row position-relative z-2 w-100">
                        <div className="d-flex flex-row justify-content-between w-100">
                            <div className="achievement-layout">
                                <div className="image-container achievement-icon">
                                    <img src="assets/images/Icon1.webp" alt="Achievement Icon" />
                                </div>
                                <div className="achievement-stat-container">
                                    <CounterOnScroll
                                        target={25}
                                        suffix="+"
                                        counterClassName="achievement-stat"
                                        suffixClassName="achievement-stat-suffix"
                                    />
                                </div>
                                <p>Years of Experience</p>
                            </div>
                            <div className="achievement-layout">
                                <div className="image-container achievement-icon">
                                    <img src="assets/images/Icon2.webp" alt="Achievement Icon" />
                                </div>
                                <div className="achievement-stat-container">
                                    <CounterOnScroll
                                        target={180}
                                        suffix="+"
                                        counterClassName="achievement-stat"
                                        suffixClassName="achievement-stat-suffix"
                                    />
                                </div>
                                <p>Projects Done</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between w-100">
                            <div className="achievement-layout">
                                <div className="image-container achievement-icon">
                                    <img src="assets/images/Icon3.webp" alt="Achievement Icon" />
                                </div>
                                <div className="achievement-stat-container">
                                    <CounterOnScroll
                                        target={100}
                                        suffix="+"
                                        counterClassName="achievement-stat"
                                        suffixClassName="achievement-stat-suffix"
                                    />
                                </div>
                                <p>Expert Team</p>
                            </div>
                            <div className="achievement-layout">
                                <div className="image-container achievement-icon">
                                    <img src="assets/images/Icon4.webp" alt="Achievement Icon" />
                                </div>
                                <div className="achievement-stat-container">
                                    <CounterOnScroll
                                        target={300}
                                        suffix="+"
                                        counterClassName="achievement-stat"
                                        suffixClassName="achievement-stat-suffix"
                                    />
                                </div>
                                <p>Happy Client</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AchievementSection;