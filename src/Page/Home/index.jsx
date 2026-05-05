import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerHomeSection from "../../Components/Banner/home";
import PartnershipSection from "../../Components/Partnership/partnership";
import AboutSection from "../../Components/About/about";
import AchievementSection from "../../Components/Achievement/achievement";
import ServiceSection from "../../Components/Service/service";
import WhyChooseUsSection from "../../Components/WhyChooseUs/whychooseus";
import ContactCtaSection from "../../Components/CallToAction/contactcta";
import PortfolioSection from "../../Components/Portfolio/portfolio";
import FeaturedSection from "../../Components/Featured/featured";
import TestimonialSection from "../../Components/Testimonial/testimonial";

function HomePage(){
    return(
        <>
            <HeadTitle title="Home - Lia - Digital Marketing Agency" />
            <BannerHomeSection />
            <PartnershipSection />
            <AboutSection />
            <AchievementSection />
            <ServiceSection />
            <WhyChooseUsSection />
            <ContactCtaSection />
            <PortfolioSection />
            <FeaturedSection />
            <TestimonialSection />
        </>
    );
}

export default HomePage;