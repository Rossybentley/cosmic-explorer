import { useState } from "react";
import { useAPOD } from "../hooks/useNasa";
import type { APOD } from "../types/nasa";
import ImageCard from "../components/ImageCard";
import ImageModal from "../components/ImageModal";
import "../styles/Home.css";
import { motion } from "framer-motion";

function Home() {
  const { data, loading } = useAPOD();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const saveFavorite = (photo: APOD) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    favorites.push(photo);

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  if (loading || !data) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: "#63f4fa",
          marginTop: "4rem",
        }}
      >
        Exploring the cosmos...
      </motion.p>
    );
  }

  const { url, title, explanation } = data;

  return (
    <main className="home">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <motion.header
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1>🚀 Cosmic Explorer</h1>

        <p>
          Discover today’s jaw-dropping astronomy image, then save your favorite
          cosmic moments for later.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <ImageCard
          src={url}
          title={title}
          onClick={() => setIsModalOpen(true)}
        />
      </motion.div>

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => saveFavorite(data)}
      >
        ⭐ Save Favorite
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {explanation}
      </motion.p>

      {isModalOpen && (
        <ImageModal
          image={url}
          title={title}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
}

export default Home;
