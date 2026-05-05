const RecentPostItem = ({ post }) => {
    return (
        <div className="other-post-content">
            <div className="post-image">
                <img src={post.image} alt={post.title} className="image-fluq" />
            </div>
            <div className="d-grid">
                <a href={post.link} className="other-blog-link">
                    {post.title}
                </a>
                <span className="meta-data recent-post">
                    {post.date} - {post.comments}
                </span>
            </div>
        </div>
    );
};

export default RecentPostItem;