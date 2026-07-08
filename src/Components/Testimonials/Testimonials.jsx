import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Kumar",
    review: "Amazing products and very fast delivery. I highly recommend ShopEase!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    review: "The quality of the clothes is excellent, and the prices are affordable.",
  },
  {
    id: 3,
    name: "Anjali Reddy",
    review: "Fresh fruits and vegetables delivered on time. Great shopping experience!",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>"{item.review}"</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;