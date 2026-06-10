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
    return <h2>No favorite saved yet.</h2>;
  }

  return (
    <div>
      <h1>Favorites</h1>

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
            <img
              src={photo.url}
              alt={photo.title}
              onClick={() => setSelectedPhoto(photo)}
            />
            <h3>{photo.title}</h3>

            <button onClick={() => removeFavorite(photo.date)}>
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
