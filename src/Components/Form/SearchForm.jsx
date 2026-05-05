import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = ({ defaultValue = "" }) => {
    const [query, setQuery] = useState(defaultValue);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        navigate(`/search?q=${encodeURIComponent(query)}`);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
};

export default SearchForm;