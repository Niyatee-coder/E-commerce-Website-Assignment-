export function Hero() {
  return (
    <section className="hero">
      {/* Background glow elements required for the premium CSS styling */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <a href="#new-season"><span>New Season</span></a>
        </div>
        <a href="#stores"><h3>Stores near me / Stores in Mumbai</h3></a>
        <h2>Fashion Factory</h2>
        <h3>
        <p>
          BEST BRANDS.<br/>
          BEST PRICES.<br/>
          BEST QUALITY.<br/>
          SHOP THE LATEST TRENDS IN FASHION AND ACCESSORIES.
        </p>
        </h3>
        <div className="hero-buttons">
          <button className="btn btn-primary">Explore Collection</button>
        </div>
      </div>

      <div className="hero-image-container">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
          alt="Fashion" 
          className="hero-img"
        />
      </div>
    </section>
  );
}

export default Hero;
