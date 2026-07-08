import "./NewsLetter.css";

function NewsLetter() {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h2>📩 Subscribe to Our Newsletter</h2>

        <p>
          Get the latest offers, discounts, and new arrivals directly in your inbox.
        </p>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;