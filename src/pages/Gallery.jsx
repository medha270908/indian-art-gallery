import { useState } from "react";
import artworks from "../data/artworks";
import ArtworkCard from "../components/ArtworkCard";
import ArtworkModal from "../components/ArtworkModal";

function Gallery() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const allCategories = ["All", ...new Set(artworks.map((art) => art.category))];

  const filteredArtworks = artworks
    .filter((art) => selectedCategory === "All" || art.category === selectedCategory)
    .filter((art) => art.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="page gallery-page">
      <h1>Art Gallery</h1>
      <p className="gallery-subtitle">Browse traditional Indian art forms from across the country.</p>

      <div className="controls">
      
        <input
          type="text"
          placeholder="Search artwork by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-box"
        />

        <div className="filter-buttons">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "filter-btn active" : "filter-btn"}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredArtworks.length === 0 ? (
        <p className="no-results">No artworks found. Try a different search or filter.</p>
      ) : (
        <div className="card-grid">
          {filteredArtworks.map((art) => (
            <ArtworkCard key={art.id} artwork={art} onViewMore={setSelectedArtwork} />
          ))}
        </div>
      )}

      {selectedArtwork && (
        <ArtworkModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
      )}
    </div>
  );
}

export default Gallery;
