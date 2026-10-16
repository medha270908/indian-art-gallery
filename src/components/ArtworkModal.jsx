function ArtworkModal({ artwork, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <img
          src={artwork.image}
          alt={artwork.name}
          className="modal-image"
        />

        <h2>{artwork.name}</h2>

        <p className="artwork-form">
          {artwork.artForm}
        </p>

        <p className="artwork-region">
          📍 {artwork.region} &nbsp;|&nbsp; 🏷 {artwork.category}
        </p>

        <p className="artwork-details">
          {artwork.details}
        </p>

      </div>
    </div>
  );
}

export default ArtworkModal;