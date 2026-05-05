import blogData from "../../Data/blogdata";
import ReplyForm from "../Form/ReplyForm";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import SearchForm from "../Form/SearchForm";
import RecentPostItem from "./RecentPost";

const SinglePostSection = () => {
    const recentPosts = blogData.slice(0, 3);

    return (
        <div className="section">
            <div className="hero-container">
                <div className="row row-cols-xl-2 row-cols-1 grid-spacer-2">

                    {/* LEFT CONTENT */}
                    <div className="col col-xl-8">
                        <div className="blog-post-container">
                            <div className="d-flex flex-column gspace-2">

                                <p>
                                    Enim nec dui nunc mattis enim ut tellus elementum. Vitae turpis massa sed elementum tempus egestas sed sed risus. Commodo viverra maecenas accumsan lacus.
                                </p>

                                <p>
                                    Mauris in aliquam sem fringilla ut morbi. In fermentum posuere urna nec tincidunt praesent.
                                </p>

                                <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                                    <div className="col">
                                        <div className="image-container">
                                            <img
                                                src="/assets/images/cropped-shot-of-businesswoman-showing-markting-ana-2023-11-27-04-50-43-utc_11zon-e1715068740627.webp"
                                                alt="Single Post Image"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="image-container">
                                            <img
                                                src="/assets/images/digital-marketing-media-in-virtual-icon-globe-shap-2023-11-27-04-52-10-utc_11zon-e1715068899518.webp"
                                                alt="Single Post Image"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <h4>Overview</h4>

                                <p>
                                    Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Nibh venenatis cras sed felis.
                                </p>

                                <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                                    <div className="col">
                                        <div className="image-container">
                                            <img
                                                src="/assets/images/picture-of-architects-working-together-in-office-2023-11-27-05-13-00-utc-1_11zon-e1714991364232.webp"
                                                alt="Single Post Image"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <ul className="check-list">
                                            <li>Et sollicitudin ac orci phasellus egestas.</li>
                                            <li>Sed adipiscing diam donec adipiscing.</li>
                                            <li>Porttitor eget dolor morbi non arcu.</li>
                                            <li>Eget nulla facilisi etiam dignissim.</li>
                                            <li>A condimentum vitae sapien.</li>
                                            <li>Pulvinar neque laoreet suspendisse.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="underline-blog"></div>

                                {/* SHARE */}
                                <div className="d-flex flex-row align-items-center justify-content-between gspace-2">
                                    <h5>Share this post</h5>
                                    <div className="social-container">
                                        <a href="#" className="social-item"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#" className="social-item"><i className="fa-brands fa-x-twitter"></i></a>
                                        <a href="#" className="social-item"><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#" className="social-item"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>

                                <div className="underline-blog"></div>

                                {/* REPLY */}
                                <h5>Leave a Reply</h5>
                                <p>Your email address will not be published. Required fields are marked *</p>

                                <ReplyForm />

                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div className="col col-xl-4">
                        <div className="d-flex flex-column gspace-2">

                            <SearchForm />

                            <AnimateOnScroll animation="fadeInRight">    
                                <div className="card other-post-card">
                                    <h4>Recent Post</h4>
                                    {recentPosts.map((post) => (
                                        <RecentPostItem key={post.id} post={post} />
                                    ))}
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight">
                                <div className="cta-banner">
                                    <h4>Get Started on Your Digital Journey</h4>
                                    <p>
                                        Erat nam at lectus urna duis convallis convallis tellus.
                                        Egestas dui id ornare arcu odio ut sem nulla pharetra.
                                    </p>
                                    <div>
                                        <a href="/contact" className="btn btn-accent">
                                            Discover More
                                        </a>
                                    </div>
                                </div>
                            </AnimateOnScroll>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SinglePostSection;
