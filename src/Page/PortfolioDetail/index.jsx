import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInner from "../../Components/Banner/inner";
import PortfolioDetailSection from "../../Components/Portfolio/portfoliodetail";
import ModalVideoSection from "../../Components/Video/video";

const PortfolioDetailPage = () => {
    return(
        <>
            <HeadTitle title="Portfolio Detail - Lia - Digital Marketing Agency" />
            <BannerInner
                title="Website Design And Development"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Portfolio", href: "/portfolio" },
                    { label: "Website Design And Development", current: true }
                ]}
            />
            <PortfolioDetailSection />
            <ModalVideoSection />
        </>
    );
}

export default PortfolioDetailPage;