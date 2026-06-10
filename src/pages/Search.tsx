import { useState } from "react";
import { useSearchNASA } from "../hooks/useSearchNASA";

function Search() {
  const [query, setQuery] = useState("");
  const { results, search, loading } = useSearchNASA();

  return (
    <div>
      <h1>NASA Image Search</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search space... (moon, mars, galaxy)"
      />

      <button onClick={() => search(query)}>Search</button>

      {loading && <p>Searching...</p>}

      <div className="grid">
        {results.map((item, index) => {
          const data = item.data?.[0];
          const image = item.links?.[0]?.href;

          return (
            <div key={index}>
              {image && <img src={image} alt={data?.title} />}
              <p>{data?.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Search;
