import { useEffect, useState } from "react";

const ReplyForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        website: "",
        comment: "",
        save: false
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const validate = () => {
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = true;
        if (!emailPattern.test(form.email)) newErrors.email = true;
        if (form.website) {
            try {
                new URL(form.website);
            } catch {
                newErrors.website = true;
            }
        }
        if (!form.comment.trim()) newErrors.comment = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus("success");
        setForm({
            name: "",
            email: "",
            website: "",
            comment: "",
            save: false
        });
    };

    useEffect(() => {
        if (!status) return;
        const timer = setTimeout(() => setStatus(null), 5000);
        return () => clearTimeout(timer);
    }, [status]);

    return (
        <form className="form" onSubmit={handleSubmit}>
            {["name", "email", "website"].map((field) => (
                <div className="form-group" key={field}>
                    <label>{field}</label>
                    <input
                        type={field === "email" ? "email" : "text"}
                        value={form[field]}
                        onChange={(e) =>
                            setForm({ ...form, [field]: e.target.value })
                        }
                        className={errors[field] ? "is-invalid" : ""}
                    />
                </div>
            ))}

            <div className="d-flex flex-row align-items-center gspace-1">
                <div>
                    <input
                        type="checkbox"
                        name="save"
                        className="form-control-2 me-2"
                        checked={form.save}
                        onChange={(e) =>
                            setForm({ ...form, save: e.target.checked })
                        }
                    />
                </div>
                <label htmlFor="save">Save my name, email and website in this browser for the next time I comment</label>
            </div>

            <div className="form-group">
                <label>Comment</label>
                <textarea
                    value={form.comment}
                    onChange={(e) =>
                        setForm({ ...form, comment: e.target.value })
                    }
                    className={errors.comment ? "is-invalid" : ""}
                />
            </div>

            <button type="submit" className="btn btn-accent w-100">
                Submit
            </button>

            {status === "success" && (
                <div className="mt-2 success">
                    <p>
                        <i className="fa-solid fa-check text-success"></i>{" "}
                        Your submission was successful.
                    </p>
                </div>
            )}
        </form>
    );
};

export default ReplyForm;