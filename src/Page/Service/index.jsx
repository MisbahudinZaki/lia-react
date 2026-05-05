import HeadTitle from "../../Components/Head/HeadTitle";
import AchievementSection from "../../Components/Achievement/achievement";
import BannerInner from "../../Components/Banner/inner";
import ContactCtaSection from "../../Components/CallToAction/contactcta";
import PartnershipSection from "../../Components/Partnership/partnership";
import ServiceSection from "../../Components/Service/service";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import WhyChooseUsSection from "../../Components/WhyChooseUs/whychooseus";

const ServicePage = () => {
    return(
        <>
            <HeadTitle title="Services - Lia - Digital Marketing Agency" />
            <BannerInner
                title={"Service"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Service", current: true }
                ]}
            />
            <PartnershipSection />
            <ServiceSection />
            <AchievementSection />
            <WhyChooseUsSection />
            <ContactCtaSection />
            <TestimonialSection />
            
        </>
    );
}

export default ServicePage;