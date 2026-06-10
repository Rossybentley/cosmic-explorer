import "../styles/ImageModal.css";
import { motion } from "framer-motion";

type Props = {
  image: string;
  title: string;
  onClose: () => void;
};

function ImageModal({ image, title, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <img src={image} alt={title} />

        <h2>{title}</h2>
      </motion.div>
    </div>
  );
}
export default ImageModal;
