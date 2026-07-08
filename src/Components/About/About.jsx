import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About ShopEase</h1>

        <p>
          ShopEase is a modern online shopping platform where you can
          purchase clothing, fruits, vegetables, groceries,
          electronics, beauty products, and much more.
        </p>

        <p>
          Our mission is to provide quality products at affordable
          prices with fast and secure delivery across India.
        </p>

        <div className="about-cards">
          <div className="card">
            <h3>🚚 Fast Delivery</h3>
            <p>Quick and secure delivery to your doorstep.</p>
          </div>

          <div className="card">
            <h3>🛒 Best Products</h3>
            <p>High-quality products at the best prices.</p>
          </div>

          <div className="card">
            <h3>💳 Secure Payments</h3>
            <p>Safe and trusted payment methods.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;