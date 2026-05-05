import BannerPostSection from "../../Components/Banner/post";
import SinglePostSection from "../../Components/Blog/SinglePost";
import HeadTitle from "../../Components/Head/HeadTitle";

const SinglePostPage = () => {
    return(
        <>
            <HeadTitle title="Single Post - Lia - Digital Marketing Agency" />
            <BannerPostSection/>
            <SinglePostSection />
        </>
    );
}

export default SinglePostPage;