const BlogCard = ({ post }) => {
    return (
        <div className="card card-blog">
            <div className="image-blog">
                <div className="blog-thumbnail">{post.category}</div>
                <img src={post.image} alt={post.title} className="img-fluid" />
            </div>

            <div className="card-body">
                <a href={post.link} className="blog-link">
                    {post.title}
                </a>
                <p className="mb-0">{post.excerpt}</p>
            </div>

            <div className="card-footer">
                <span className="meta-data">{post.date}</span>
                <span className="divider"></span>
                <span className="meta-data">{post.comments}</span>
            </div>
        </div>
    );
};

export default BlogCard;