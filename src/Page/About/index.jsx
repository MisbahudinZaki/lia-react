import HeadTitle from "../../Components/Head/HeadTitle";
import AboutSection from "../../Components/About/about";
import BannerInner from "../../Components/Banner/inner";
import PartnershipSection from "../../Components/Partnership/partnership";
import AchievementSection from "../../Components/Achievement/achievement"
import WhyChooseUsSection from "../../Components/WhyChooseUs/whychooseus";
import ContactCtaSection from "../../Components/CallToAction/contactcta";
import TeamHighlightSection from "../../Components/Team/highlight";
import TestimonialSection from "../../Components/Testimonial/testimonial";

const AboutPage = () => {

    return(
        <>
            <HeadTitle title="About Us - Lia - Digital Marketing Agency" />
            <BannerInner 
                title={"About"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About", current: true }
                ]}
            />
            <PartnershipSection />
            <AboutSection />
            <AchievementSection />
            <WhyChooseUsSection />
            <ContactCtaSection />
            <TeamHighlightSection />
            <TestimonialSection />
        </>
    );

}

export default AboutPage;