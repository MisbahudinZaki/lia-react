import AchievementSection from "../../Components/Achievement/achievement";
import BannerInner from "../../Components/Banner/inner";
import ContactCtaSection from "../../Components/CallToAction/contactcta";
import HeadTitle from "../../Components/Head/HeadTitle";
import TeamGridSection from "../../Components/Team/teamgrid";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import WhyChooseUsSection from "../../Components/WhyChooseUs/whychooseus";

const TeamPage = () => {
    return(
        <>
            <HeadTitle title="Team - Lia - Digital Marketing Agency" />
            <BannerInner
                title={"Team"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Team", current: true }
                ]}
            />
            <TeamGridSection />
            <AchievementSection />
            <ContactCtaSection />
            <WhyChooseUsSection />
            <TestimonialSection />
        </>
    );
}

export default TeamPage;