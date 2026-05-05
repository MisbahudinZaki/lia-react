const SearchResult = ({ results }) => {
    if (!results.length) {
        return <p>No results found for the keyword.</p>;
    }

    return (
        <div id="search-results">
            {results.map((item, index) => (
                <div className="result" key={index}>
                    <a href={item.url}>
                        <span>{item.title}</span>
                    </a>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default SearchResult;