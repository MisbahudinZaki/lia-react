import { useEffect, useState } from "react";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState(null); // success | error
    const [errors, setErrors] = useState({});

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const validate = () => {
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = true;
        if (!emailPattern.test(form.email)) newErrors.email = true;
        if (!form.phone.trim()) newErrors.phone = true;
        if (!form.subject.trim()) newErrors.subject = true;
        if (!form.message.trim()) newErrors.message = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setTimeout(() => {
            const success = Math.random() > 0.3;

            if (success) {
                setStatus("success");
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                });
            } else {
                setStatus("error");
            }
        }, 1000);
    };

    useEffect(() => {
        if (!status) return;

        const timer = setTimeout(() => {
            setStatus(null);
        }, 5000);

        return () => clearTimeout(timer);
    }, [status]);

    return (
        <form className="form" onSubmit={handleSubmit}>
            {[
                { label: "Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone", name: "phone", type: "tel" },
                { label: "Subject", name: "subject", type: "text" }
            ].map((field) => (
                <div className="d-flex flex-column gspace-1" key={field.name}>
                    <label>{field.label}</label>
                    <input
                        type={field.type}
                        value={form[field.name]}
                        onChange={(e) =>
                            setForm({ ...form, [field.name]: e.target.value })
                        }
                        className={errors[field.name] ? "is-invalid" : ""}
                    />
                </div>
            ))}

            <div className="d-flex flex-column gspace-1">
                <label>Message</label>
                <textarea
                    rows="4"
                    value={form.message}
                    onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                    }
                    className={errors.message ? "is-invalid" : ""}
                />
            </div>

            <button type="submit" className="btn btn-accent">
                Send Message
            </button>

            {status === "success" && (
                <div className="mt-2 success">
                    <p>
                        <i className="fa-solid fa-check text-success"></i>{" "}
                        Your submission was successful.
                    </p>
                </div>
            )}

            {status === "error" && (
                <div className="mt-2 failed">
                    <p>
                        <i className="fa-solid fa-times text-danger"></i>{" "}
                        Submission failed. Please try again.
                    </p>
                </div>
            )}
        </form>
    );
};

export default ContactForm;