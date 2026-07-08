import "./Orders.css";
import { useEffect, useState } from "react";
import API from "../../api/api";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get("/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Handles both response formats
      if (response.data.orders) {
        setOrders(response.data.orders);
      } else {
        setOrders(response.data);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading Orders...</h2>;
  }

  return (
    <div className="orders-page">
      <h1>📦 My Orders</h1>

      {orders.length === 0 ? (
        <h2>No Orders Found</h2>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order._id}>
            <h3>Order ID: {order._id}</h3>

            <p>
              <strong>Status:</strong> {order.orderStatus}
            </p>

            <p>
              <strong>Payment:</strong> {order.paymentMethod}
            </p>

            <p>
              <strong>Total:</strong> ₹{order.totalPrice}
            </p>

            <p>
              <strong>Shipping:</strong> {order.shippingAddress}
            </p>

            <h4>Items</h4>

            {order.items.map((item, index) => (
              <div key={index}>
                <p>
                  Product ID: {item.productId}
                </p>

                <p>
                  Quantity: {item.quantity}
                </p>

                <hr />
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;