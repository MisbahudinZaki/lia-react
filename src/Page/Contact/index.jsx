import BannerInner from "../../Components/Banner/inner";
import ContactSection from "../../Components/Contact/contact";
import HeadTitle from "../../Components/Head/HeadTitle";
import MapsSection from "../../Components/Maps/maps";

const ContactPage = () => {
    return(
        <>
            <HeadTitle title="Contact Us - Lia - Digital Marketing Agency" />
            <BannerInner
                title={"Contact"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact", current: true }
                ]}
            />
            <ContactSection />
            <MapsSection />
        </>
    );
}

export default ContactPage;