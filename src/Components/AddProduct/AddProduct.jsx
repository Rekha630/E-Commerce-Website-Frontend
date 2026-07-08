import "./AddProduct.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    oldPrice: "",
    rating: "",
    image: "",
    description: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await API.post("/products", product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("✅ Product Added Successfully!");

      setProduct({
        name: "",
        category: "",
        price: "",
        oldPrice: "",
        rating: "",
        image: "",
        description: "",
        stock: "",
      });

      navigate("/admin/products");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to add product"
      );
    }
  };

  return (
    <div className="add-product-container">
      <h1>Add New Product</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="oldPrice"
          placeholder="Old Price"
          value={product.oldPrice}
          onChange={handleChange}
        />

        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating"
          value={product.rating}
          onChange={handleChange}
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
        />

        <button type="submit">
          Add Product
        </button>

      </form>
    </div>
  );
}

export default AddProduct;