import { useEffect, useState } from "react";

const NewsletterForm = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null);
    const [invalid, setInvalid] = useState(false);

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!emailPattern.test(email)) {
            setInvalid(true);
            return;
        }

        setInvalid(false);

        setTimeout(() => {
            const success = Math.random() > 0.3;
            setStatus(success ? "success" : "error");
            if (success) setEmail("");
        }, 1000);
    };

    useEffect(() => {
        if (!status) return;
        const timer = setTimeout(() => setStatus(null), 5000);
        return () => clearTimeout(timer);
    }, [status]);

    return (
        <>
            <form onSubmit={handleSubmit} id="newsletter-form">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={invalid ? "is-invalid" : ""}
                    required
                />
                <button type="submit" className="btn btn-accent">
                    Subscribe
                </button>
            </form>

            {status === "success" && (
                <div className="success">
                    <p>
                        <i className="fa-solid fa-check text-success"></i>{" "}
                        Your submission was successful.
                    </p>
                </div>
            )}

            {status === "error" && (
                <div className="failed">
                    <p>
                        <i className="fa-solid fa-times text-danger"></i>{" "}
                        Submission failed. Please try again.
                    </p>
                </div>
            )}
        </>
    );
};

export default NewsletterForm;