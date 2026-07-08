import "./Payment.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handlePayment = () => {
    alert(`Payment Successful using ${paymentMethod.toUpperCase()}!`);

    navigate("/success");
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h1>💳 Payment</h1>

        <h3>Select Payment Method</h3>

        <label>
          <input
            type="radio"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>

        <label>
          <input
            type="radio"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI
        </label>

        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit / Debit Card
        </label>

        <label>
          <input
            type="radio"
            value="netbanking"
            checked={paymentMethod === "netbanking"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Net Banking
        </label>

        {paymentMethod === "upi" && (
          <input
            type="text"
            placeholder="Enter UPI ID"
            className="payment-input"
          />
        )}

        {paymentMethod === "card" && (
          <>
            <input
              type="text"
              placeholder="Card Number"
              className="payment-input"
            />

            <input
              type="text"
              placeholder="Card Holder Name"
              className="payment-input"
            />

            <input
              type="text"
              placeholder="MM/YY"
              className="payment-input"
            />

            <input
              type="password"
              placeholder="CVV"
              className="payment-input"
            />
          </>
        )}

        {paymentMethod === "netbanking" && (
          <select className="payment-input">
            <option>Select Bank</option>
            <option>SBI</option>
            <option>HDFC</option>
            <option>ICICI</option>
            <option>Axis Bank</option>
          </select>
        )}

        <button className="pay-btn" onClick={handlePayment}>
          Confirm Payment
        </button>
      </div>
    </div>
  );
}

export default Payment;