import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ShopEase Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width="100%"
              height="200"
            />

            <h3>{product.name}</h3>

            <p>{product.category}</p>

            <h2>₹{product.price}</h2>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;