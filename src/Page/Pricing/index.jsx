import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInner from "../../Components/Banner/inner";
import PricingSection from "../../Components/Pricing/pricing";
import AchievementSection from "../../Components/Achievement/achievement";
import WhyChooseUsSection from "../../Components/WhyChooseUs/whychooseus";
import ContactCtaSection from "../../Components/CallToAction/contactcta";
import TestimonialSection from "../../Components/Testimonial/testimonial";

const PricingPage = () => {
    return(
        <>
            <HeadTitle title="Pricing Plan - Lia - Digital Marketing Agency" />
            <BannerInner
                title={"Pricing"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Pricing", current: true }
                ]}
            />
            <PricingSection />
            <AchievementSection />
            <WhyChooseUsSection />
            <ContactCtaSection />
            <TestimonialSection />

        </>
    );
}

export default PricingPage;