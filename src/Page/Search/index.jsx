import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import searchData from "../../Data/searchdata";
import SearchResult from "../../Components/Search/SearchResult";

const SearchPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const keyword = params.get("q") || "";

    const results = useMemo(() => {
        if (!keyword) return [];
        return searchData.filter((item) =>
            item.title.toLowerCase().includes(keyword.toLowerCase()) ||
            item.description.toLowerCase().includes(keyword.toLowerCase())
        );
    }, [keyword]);

    return (
        <div className="section">
            <div className="hero-container">
                <div className="section px-0">

                    <div className="d-flex flex-column gspace-2">
                        <span id="search-title">
                            {keyword
                                ? `Search Result for "${keyword}"`
                                : "Enter search keywords"}
                        </span>
                    </div>

                    <div id="search-results">
                        <SearchResult results={results} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchPage;