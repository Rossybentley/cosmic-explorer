import { useState } from "react";
import type { APOD } from "../types/nasa";
import "../styles/Favorites.css";
import ImageModal from "../components/ImageModal";

function Favorites() {
  const [favorites, setFavorites] = useState<APOD[]>(() => {
    const storedFavorites =
      typeof window !== "undefined" ? localStorage.getItem("favorites") : null;
    return storedFavorites ? (JSON.parse(storedFavorites) as APOD[]) : [];
  });
  const [selectedPhoto, setSelectedPhoto] = useState<APOD | null>(null);

  const removeFavorite = (date: string) => {
    const updatedFavorites = favorites.filter((photo) => photo.date !== date);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <p>⭐ No favorites saved yet.</p>
        <span>Start exploring and save images you love!</span>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <h1 className="favorites-title">Favorites</h1>
      <p className="favorites-subtitle">
        {favorites.length} saved image{favorites.length !== 1 ? "s" : ""}
      </p>

      {selectedPhoto && (
        <ImageModal
          image={selectedPhoto.url}
          title={selectedPhoto.title}
          onClose={() => setSelectedPhoto(null)}
        />
      )}

      <div className="favorites-grid">
        {favorites.map((photo) => (
          <div key={photo.date} className="favorite-card">
            <div className="favorite-img-wrapper">
              <img
                src={photo.url}
                alt={photo.title}
                className="favorite-img"
                onClick={() => setSelectedPhoto(photo)}
              />
              <div className="favorite-overlay">
                <span>View</span>
              </div>
            </div>
            <div className="favorite-card-info">
              <h3 className="favorite-card-title">{photo.title}</h3>
              <p className="favorite-card-date">{photo.date}</p>
              <button
                className="favorite-remove-btn"
                onClick={() => removeFavorite(photo.date)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
