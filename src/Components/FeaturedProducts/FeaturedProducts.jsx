import "./FeaturedProducts.css";
import { useNavigate } from "react-router-dom";

const featuredProducts = [
  {
    id: 1,
    name: "Apple MacBook Air M3",
    price: "₹89,999",
    image: "https://picsum.photos/id/180/600/600",
  },
  {
    id: 2,
    name: "Apple iPhone 15",
    price: "₹74,999",
    image: "https://picsum.photos/id/160/600/600",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: "₹3,499",
    image: "https://picsum.photos/id/20/600/600",
  },
  {
    id: 4,
    name: "JBL Bluetooth Speaker",
    price: "₹2,199",
    image: "https://picsum.photos/id/250/600/600",
  },
];

function FeaturedProducts() {
  const navigate = useNavigate();

  return (
    <section className="featured-products">
      <h2>⭐ Featured Products</h2>

      <div className="products-grid">
        {featuredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p className="price">{product.price}</p>

            <button onClick={() => navigate("/product")}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;