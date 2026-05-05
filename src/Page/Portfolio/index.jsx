import HeadTitle from "../../Components/Head/HeadTitle";
import AchievementSection from "../../Components/Achievement/achievement";
import BannerInner from "../../Components/Banner/inner";
import ContactCtaSection from "../../Components/CallToAction/contactcta";
import PartnershipSection from "../../Components/Partnership/partnership";
import PortfolioSection from "../../Components/Portfolio/portfolio";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import WhyChooseUsSection from "../../Components/WhyChooseUs/whychooseus";

const PortfolioPage = () => {
    return(
        <>
            <HeadTitle title="Portfolio - Lia - Digital Marketing Agency" />
            <BannerInner
                title={"Portfolio"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Portfolio", current: true }
                ]}
            />
            <PartnershipSection />
            <PortfolioSection />
            <AchievementSection />
            <WhyChooseUsSection />
            <ContactCtaSection />
            <TestimonialSection />
        </>
    );
}

export default PortfolioPage;