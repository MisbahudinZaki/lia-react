import { useEffect, useState } from "react";
import { supabase } from "@supabase/supabase-js";

import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import ServiceCard from "../Card/ServiceCard";

const [loading, setLoading] = useState(true);

async function getServices() {
    const { data } = await supabase
        .from("services")
        .select("*");

    if (error) {
        console.error(error);
    } else {
        setServices(data);
    }
}

const ServiceSection = () => {
    return (
        <section className="section">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-4">

                    {/* Section Header */}
                    <AnimateOnScroll animation="fadeInUp">
                        <div className="d-flex flex-column align-items-center text-center gspace-2">
                            <h6 className="accent-color">Services</h6>
                            <h3>Strategic Solutions for Online Domination</h3>
                            <p>
                                Ipsum suspendisse ultrices gravida dictum fusce ut. Convallis a cras semper auctor.
                                Sapien eget mi proin sed libero enim sed faucibus turpis. Tellus orci ac auctor augue
                                mauris augue neque gravida.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Service Cards */}
                    <div className="service-content-wrapper">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                title={service.title}
                                image={service.image}
                                description={service.description}
                                highlight={service.highlight}
                                link={service.link}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceSection;