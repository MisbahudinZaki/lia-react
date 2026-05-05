const FaqItem = ({ id, question, answer, defaultOpen }) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${!defaultOpen ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq-${id}`}
                    aria-expanded={defaultOpen ? "true" : "false"}
                    aria-controls={`faq-${id}`}
                >
                    {question}
                </button>
            </h2>

            <div
                id={`faq-${id}`}
                className={`accordion-collapse collapse ${defaultOpen ? "show" : ""}`}
                data-bs-parent="#faqAccordion1"
            >
                <div className="accordion-body">
                    <span>{answer}</span>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;