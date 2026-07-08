import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Big Shopping Festival</h1>

          <h2>Up to 70% OFF</h2>

          <p>
            Shop Fashion, Fruits, Vegetables, Electronics,
            Groceries and much more.
          </p>

          <button>Shop Now</button>
        </div>

        <div className="banner-image">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800"
            alt="Shopping Banner"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;