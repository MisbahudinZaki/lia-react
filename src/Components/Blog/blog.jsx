import blogData from "../../Data/blogdata";
import BlogCard from "../Card/BlogCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import SearchForm from "../Form/SearchForm";
import RecentPostItem from "./RecentPost";

const BlogSection = () => {
    const recentPosts = blogData.slice(0, 3);

    return (
        <div className="section">
            <div className="hero-container">
                <div className="row row-cols-xl-2 row-cols-1 g-3">
                    
                    {/* Main Blog */}
                    <div className="col col-xl-8">
                        <div className="blog-post-container">
                            <div className="row row-cols-md-2 row-cols-1 g-4">
                                {blogData.map((post) => (
                                    <div className="col" key={post.id}>
                                        <BlogCard post={post} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
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

export default BlogSection;