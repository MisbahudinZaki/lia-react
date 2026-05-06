import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import ServiceCard from "../Card/ServiceCard";
import ServiceForm from "../Admin/ServiceForm";

const ServiceSection = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getServices();
    }, []);

    async function getServices() {
        const { data, error } = await supabase
            .from("services")
            .select("*");

        if (error) {
            console.error(error);
        } else {
            setServices(data);
        }

        setLoading(false);
    }

    return (
        <section className="section">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-4">

                    <div className="d-flex flex-column align-items-center text-center gspace-2">
                        <h6 className="accent-color">Services</h6>
                        <h3>Strategic Solutions for Online Domination</h3>
                        <p>
                            Ipsum suspendisse ultrices gravida dictum fusce ut...
                        </p>
                    </div>

                    <div className="service-content-wrapper">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            services.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    title={service.title}
                                    image={service.image}
                                    description={service.description}
                                    highlight={service.highlight}
                                    link={service.link}
                                />
                            ))
                        )}

                        <button className="btn btn-accent" onClick={() => setEditing(service)}>
                            Edit
                        </button>
                    </div>

                    <ServiceForm/>

                </div>
            </div>
        </section>
    );
};

export default ServiceSection;