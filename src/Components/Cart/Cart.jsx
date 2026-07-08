import "./Cart.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(ShopContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 99 : 0;
  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + delivery + gst;

  return (
    <div className="cart-page">
      <h1>🛒 Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item._id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h3>{item.name}</h3>

                <p>₹{item.price}</p>

                <div className="quantity-box">
                  <button onClick={() => decreaseQuantity(item._id)}>
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item._id)}>
                    +
                  </button>
                </div>

                <p>
                  <strong>
                    Subtotal: ₹{item.price * item.quantity}
                  </strong>
                </p>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <p>Subtotal : ₹{subtotal}</p>

            <p>Delivery : ₹{delivery}</p>

            <p>GST (18%) : ₹{gst}</p>

            <hr />

            <h2>Total : ₹{grandTotal}</h2>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;