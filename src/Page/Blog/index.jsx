import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInner from "../../Components/Banner/inner"
import BlogSection from "../../Components/Blog/blog";

const BlogPage = () => {
    return(
        <>
            <HeadTitle title="Blog Archive - Lia - Digital Marketing Agency" />
            <BannerInner
                title={"Blog Archive"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Blog Archive", current: true }
                ]}
            />
            <BlogSection />
        </>
    );
}

export default BlogPage;