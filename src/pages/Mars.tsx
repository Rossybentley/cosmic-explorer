import { useEffect, useState } from "react";
import { getMarsPhotos } from "../services/nasaApi";
import "../styles/Mars.css";

interface MarsPhoto {
  imageid: string;
  image_files: {
    medium: string;
    small: string;
    large: string;
    full_res: string;
  };
  sol: number;
  caption: string;
  title: string;
}

function Mars() {
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMarsPhotos()
      .then((data) => {
        if (!Array.isArray(data)) {
          setError("Unexpected data format");
          return;
        }
        setPhotos(data);
      })
      .catch((err) => {
        setError("Failed to load photos");
      });
  }, []);

  if (error) return <p className="mars-error">{error}</p>;
  if (photos.length === 0)
    return <p className="mars-loading">Scanning Mars surface...</p>;

  return (
    <div className="mars-page">
      <h1 className="mars-title">Mars Rover Photos</h1>
      <p className="mars-subtitle">
        Latest images from NASA's Perseverance rover
      </p>
      <div className="mars-grid">
        {photos.slice(0, 20).map((photo) => (
          <div key={photo.imageid} className="mars-card">
            <img
              src={photo.image_files.medium}
              alt={photo.title}
              className="mars-img"
            />
            <div className="mars-card-info">
              <span className="mars-sol">Sol {photo.sol}</span>
              <p className="mars-caption">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mars;
