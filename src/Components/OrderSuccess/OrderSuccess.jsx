import "./OrderSuccess.css";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-card">
        <h1>🎉 Order Placed Successfully!</h1>

        <h2>✅ Thank You for Shopping with ShopEase</h2>

        <p>Your order has been placed successfully.</p>

        <p>You will receive your order soon.</p>

        <p>
          <strong>Payment Status:</strong> Pending / Cash on Delivery
        </p>

        <button onClick={() => navigate("/")}>
          Continue Shopping
        </button>

        <button onClick={() => navigate("/orders")}>
          View My Orders
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;