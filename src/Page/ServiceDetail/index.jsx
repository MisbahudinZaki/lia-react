import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInner from "../../Components/Banner/inner";
import ServiceDetailSection from "../../Components/Service/servicedetail";
import PartnershipSection from "../../Components/Partnership/partnership";
import AchievementSection from "../../Components/Achievement/achievement";
import WhyChooseUsSection from "../../Components/WhyChooseUs/whychooseus";
import TestimonialSection from "../../Components/Testimonial/testimonial";

const ServiceDetailPage = () => {
    return(
        <>
            <HeadTitle title="Service Detail - Lia - Digital Marketing Agency" />
            <BannerInner
                title="Digital Marketing"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/service" },
                    { label: "Digital Marketing", current: true }
                ]}
            />
            <ServiceDetailSection />
            <PartnershipSection />
            <AchievementSection />
            <WhyChooseUsSection />
            <TestimonialSection />
        </>
    );
}

export default ServiceDetailPage;