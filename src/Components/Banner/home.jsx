import { useEffect, useState } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const BannerHomeSection = () => {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const overlayTimer = setTimeout(() => {
            setShowVideo(true);
        }, 5000); // 3s overlay + 2s video (gabung)

        return () => clearTimeout(overlayTimer);
    }, []);

    return (
        <section className="section banner-home">
            <div
                className="banner-video-container"
                id="videoContainer"
                style={{ display: showVideo ? "block" : "none" }}
            >
                <iframe
                    src="https://www.youtube.com/embed/RPjZMjB55wU?autoplay=1&mute=1&controls=0&rel=0&disablekb=1&modestbranding=1&playsinline=1&fs=0&loop=1&playlist=RPjZMjB55wU"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                />
            </div>

            <div className="hero-container">
                <div className="banner-content">
                    <div className="align-items-center">
                        <div className="banner-sub-heading">
                            <h6>Welcome to Lia</h6>
                        </div>
                    </div>

                    <AnimateOnScroll animation="fadeInUp">
                        <h1 className="banner-title">
                            Strategic Digital Solutions for{" "}
                            <span className="h1-wrapper">Lasting Impact</span>
                        </h1>
                    </AnimateOnScroll>

                    <p>
                        urus sit amet luctus venenatis lectus magna fringilla urna. In iaculis nunc
                        sed augue lacus viverra vitae congue.
                    </p>

                    <div>
                        <a href="/about" className="btn btn-accent">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerHomeSection;