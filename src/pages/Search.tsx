import { useState } from "react";
import { useSearchNASA } from "../hooks/useSearchNASA";
import "../styles/Search.css";

function Search() {
  const [query, setQuery] = useState("");
  const { results, search, loading } = useSearchNASA();

  return (
    <div className="search-page">
      <h1 className="search-title">NASA Image Search</h1>
      <p className="search-subtitle">
        Explore the universe through NASA's image library
      </p>

      <div className="search-bar">
        <input
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && search(query)}
          placeholder="Search space... (moon, mars, galaxy)"
        />
        <button className="search-button" onClick={() => search(query)}>
          Search
        </button>
      </div>

      {loading && <p className="search-loading">Searching the cosmos...</p>}

      <div className="search-grid">
        {results.map((item, index) => {
          const data = item.data?.[0];
          const image = item.links?.[0]?.href;

          return (
            <div key={data?.nasa_id || index} className="search-card">
              {image && (
                <img src={image} alt={data?.title} className="search-img" />
              )}
              <div className="search-card-info">
                <p className="search-card-title">{data?.title}</p>
                {data?.date_created && (
                  <span className="search-card-date">
                    {new Date(data.date_created).getFullYear()}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
