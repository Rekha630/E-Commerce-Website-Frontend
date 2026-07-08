import "./ProductDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import API from "../../api/api";
import { ShopContext } from "../../context/ShopContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart, addToWishlist } = useContext(ShopContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await API.get(`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product Not Found</h2>;
  }

  return (
    <div className="product-details">

      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">

        <h1>{product.name}</h1>

        <h3>⭐ {product.rating}</h3>

        <h2>₹{product.price}</h2>

        <p>
          <del>₹{product.oldPrice}</del>
        </p>

        <p>{product.description}</p>

        <p><strong>Category:</strong> {product.category}</p>

        <p><strong>Stock:</strong> {product.stock}</p>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>

        <button onClick={() => addToWishlist(product)}>
          ❤️ Wishlist
        </button>

        <button onClick={() => navigate("/checkout")}>
          Buy Now
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;