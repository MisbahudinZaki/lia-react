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

    async function deleteService(id) {
        const confirmDelete = confirm("Yakin mau hapus?");
        if (!confirmDelete) return;

        const { error } = await supabase
            .from("services")
            .delete()
            .eq("id", id);

        if (error) {
            console.error(error);
        } else {
            alert("Berhasil hapus");
            getServices();
        }
        }

    const [editing, setEditing] = useState(null);

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
                                    onEdit={() => setEditing(service)}
                                    onDelete={() => deleteService(service.id)}
                                />
                            ))
                        )}
                    </div>

                    <ServiceForm
                        getServices={getServices}
                        editing={editing}
                        setEditing={setEditing}
                    />

                </div>
            </div>
        </section>
    );
};

export default ServiceSection;