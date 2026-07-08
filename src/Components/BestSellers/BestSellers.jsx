import "./BestSellers.css";

const bestSellers = [
  {
    id: 1,
    name: "Samsung Galaxy S25",
    price: "₹69,999",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    id: 2,
    name: "Casual Sneakers",
    price: "₹2,799",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 3,
    name: "Women's Jacket",
    price: "₹1,999",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: "₹3,999",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600",
  },
];

function BestSellers() {
  return (
    <section className="best-sellers">
      <h2>⭐ Best Sellers</h2>

      <div className="products-grid">
        {bestSellers.map((product) => (
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

export default BestSellers;