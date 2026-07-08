import "./ProductCard.css";

const products = [
  {
    id: 1,
    name: "Men's T-Shirt",
    price: "₹799",
    image: "https://picsum.photos/300/250?random=1",
  },
  {
    id: 2,
    name: "Women's Dress",
    price: "₹1,299",
    image: "https://picsum.photos/300/250?random=2",
  },
  {
    id: 3,
    name: "Fresh Apples",
    price: "₹199/kg",
    image: "https://picsum.photos/300/250?random=3",
  },
  {
    id: 4,
    name: "Fresh Vegetables",
    price: "₹99/kg",
    image: "https://picsum.photos/300/250?random=4",
  },
  {
    id: 5,
    name: "Sports Shoes",
    price: "₹2,499",
    image: "https://picsum.photos/300/250?random=5",
  },
  {
    id: 6,
    name: "Smart Watch",
    price: "₹3,999",
    image: "https://picsum.photos/300/250?random=6",
  },
];

function ProductCard() {
  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p className="price">{product.price}</p>

            <p>⭐⭐⭐⭐⭐</p>

            <div className="buttons">
              <button className="cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCard;