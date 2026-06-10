type ImageCardProps = {
  src: string;
  title: string;
  onClick?: () => void;
};

function ImageCard({ src, title, onClick }: ImageCardProps) {
  return (
    <div className="image-card" onClick={onClick}>
      <img src={src} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default ImageCard;
