function ArtworkCard({ artwork, onViewMore }) {
  return (
    <div className="artwork-card">
      <img src={artwork.image} alt={artwork.name} className="artwork-image" />

      <div className="artwork-card-body">
        <h3>{artwork.name}</h3>
        <p className="artwork-form">{artwork.artForm}</p>
        <p className="artwork-region">📍 {artwork.region}</p>
        <p className="artwork-desc">{artwork.description}</p>
        <button className="view-btn" onClick={() => onViewMore(artwork)}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default ArtworkCard;
