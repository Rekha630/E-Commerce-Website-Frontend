import "./Admin.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";

function Admin() {
  const navigate = useNavigate();

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");

      const productResponse = await API.get("/products");

      const orderResponse = await API.get("/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTotalProducts(productResponse.data.length);

      if (orderResponse.data.orders) {
        setTotalOrders(orderResponse.data.orders.length);
      } else {
        setTotalOrders(orderResponse.data.length);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-container">
      <h1>🛍 ShopEase Admin Dashboard</h1>

      <div className="admin-grid">

        <div className="admin-card">
          <h2>📦 Total Products</h2>
          <h1>{totalProducts}</h1>

          <button onClick={() => navigate("/products")}>
            View Products
          </button>
        </div>

        <div className="admin-card">
          <h2>📋 Total Orders</h2>
          <h1>{totalOrders}</h1>

          <button onClick={() => navigate("/orders")}>
            View Orders
          </button>
        </div>

        <div className="admin-card">
          <h2>➕ Add Product</h2>

          <button onClick={() => navigate("/admin/add-product")}>
            Add Product
          </button>
        </div>

        <div className="admin-card">
          <h2>🛠 Manage Products</h2>

          <button onClick={() => navigate("/admin/products")}>
            Manage Products
          </button>
        </div>

      </div>
    </div>
  );
}

export default Admin;