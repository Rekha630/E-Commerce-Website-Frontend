import "./TodayDeals.css";

const todayDeals = [
  {
    id: 1,
    name: "Men's Hoodie",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
  },
  {
    id: 2,
    name: "Women's Handbag",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
  },
  {
    id: 3,
    name: "Smart TV",
    price: "₹29,999",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600",
  },
  {
    id: 4,
    name: "Fresh Fruits Basket",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600",
  },
];

function TodayDeals() {
  return (
    <section className="today-deals">
      <h2>🔥 Today's Deals</h2>

      <div className="products-grid">
        {todayDeals.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TodayDeals;