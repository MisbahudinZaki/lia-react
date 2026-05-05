import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInner from "../../Components/Banner/inner";
import ContactCtaSection from "../../Components/CallToAction/contactcta";
import FaqSection from "../../Components/FAQs/faqsection";
import TestimonialSection from "../../Components/Testimonial/testimonial";

const FaqPage = () => {
    return(
        <>
            <HeadTitle title="FAQs - Lia - Digital Marketing Agency" />
            <BannerInner
                title={"Frequently Asked Questions"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Frequently Asked Questions", current: true }
                ]}
            />
            <FaqSection />
            <ContactCtaSection />
            <TestimonialSection />
        </>
    );
}

export default FaqPage;