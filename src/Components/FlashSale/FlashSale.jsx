import "./FlashSale.css";

const flashProducts = [
  {
    id: 1,
    name: "Nike Running Shoes",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 2,
    name: "Apple Watch",
    price: "₹24,999",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: "₹1,999",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
  },
];

function FlashSale() {
  return (
    <section className="flash-sale">
      <h2>🔥 Flash Sale</h2>

      <div className="products-grid">
        {flashProducts.map((product) => (
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

export default FlashSale;