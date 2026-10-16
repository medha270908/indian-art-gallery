import artworks from "../data/artworks";
import ArtworkCard from "../components/ArtworkCard";

function Home({ setPage }) {
  const featuredArtworks = artworks.slice(0, 4);

  return (
    <div className="page home-page">
      <section className="banner">
        <h1>Discover the Art of India</h1>
        <p>
          Explore centuries-old traditions of Indian painting - from tribal wall art
          to royal court miniatures - all in one gallery.
        </p>
        <button className="cta-btn" onClick={() => setPage("gallery")}>
          Explore Gallery
        </button>
      </section>

      <section className="intro-section">
        <h2>What is Indian Art?</h2>
        <p>
          Indian art is one of the oldest and most diverse art traditions in the world.
          Every region of India has developed its own unique painting style, shaped by
          local culture, religion, and materials available in that area. From the folk
          art of tribal communities to the refined miniature paintings of royal courts,
          Indian art tells the story of the country's history and beliefs through color,
          pattern, and symbolism.
        </p>
      </section>

      <section className="featured-section">
        <h2>Featured Art Forms</h2>
        <div className="card-grid">
          {featuredArtworks.map((art) => (
            <ArtworkCard key={art.id} artwork={art} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
