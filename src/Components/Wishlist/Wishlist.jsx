import "./Wishlist.css";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function Wishlist() {
  const { wishlist } = useContext(ShopContext);

  return (
    <div className="wishlist-page">
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <h2>No products in wishlist.</h2>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item, index) => (
            <div className="wishlist-card" key={index}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;