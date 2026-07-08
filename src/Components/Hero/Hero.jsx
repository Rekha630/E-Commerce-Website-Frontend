import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Shop Smart, Live Better</h1>

        <p>
          Discover the latest fashion, fresh fruits, vegetables,
          groceries, electronics, and much more at amazing prices.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn">Shop Now</button>
          <button className="explore-btn">Explore Categories</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700"
          alt="Shopping"
        />
      </div>
    </section>
  );
}

export default Hero;