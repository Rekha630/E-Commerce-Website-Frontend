import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import API from "../../api/api";
import { ShopContext } from "../../context/ShopContext";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortBy, setSortBy] = useState("");

  const { addToCart, addToWishlist } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Unable to load products.");
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === "low-high") return a.price - b.price;
      if (sortBy === "high-low") return b.price - a.price;
      if (sortBy === "a-z") return a.name.localeCompare(b.name);
      if (sortBy === "z-a") return b.name.localeCompare(a.name);
      return 0;
    });

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading Products...</h2>;
  }

  return (
    <div className="products-page">
      <h1>🛍 All Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="category-buttons">
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Electronics")}>Electronics</button>
        <button onClick={() => setCategory("Mobiles")}>Mobiles</button>
        <button onClick={() => setCategory("Accessories")}>Accessories</button>
        <button onClick={() => setCategory("Audio")}>Audio</button>
      </div>

      <div className="price-filter">
        <label>
          Maximum Price: <strong>₹{maxPrice}</strong>
        </label>

        <input
          type="range"
          min="100"
          max="100000"
          step="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      <div className="sort-container">
        <label>Sort By: </label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Default</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="a-z">Name: A-Z</option>
          <option value="z-a">Name: Z-A</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product._id}>
            <img
              src={product.image}
              alt={product.name}
              onClick={() => navigate(`/product/${product._id}`)}
              style={{ cursor: "pointer" }}
            />

            <h3>{product.name}</h3>

            <p className="rating">⭐ {product.rating}</p>

            <p className="price">
              ₹{product.price}
              <span> ₹{product.oldPrice}</span>
            </p>

            <p className="discount">
              Save ₹{product.oldPrice - product.price}
            </p>

            <div className="product-buttons">
              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>

              <button onClick={() => addToWishlist(product)}>
                ❤️ Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;