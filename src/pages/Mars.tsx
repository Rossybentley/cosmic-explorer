import { useEffect, useState } from "react";
import { getMarsPhotos } from "../services/nasaApi";

function Mars() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getMarsPhotos().then(setPhotos);
  }, []);

  if (photos.length === 0) return <p>Loading...</p>;

  return (
    <div className="gallery">
      {photos.slice(0, 20).map((photo: any) => (
        <img key={photo.id} src={photo.img_src} alt="Mars" />
      ))}
    </div>
  );
}

export default Mars;
