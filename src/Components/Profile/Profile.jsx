import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = {
    name: "Rekha",
    email: "rekha@example.com",
    phone: "+91 9876543210",
  };

  return (
    <div className="profile-container">
      <div className="profile-card">

        <img
          src="https://ui-avatars.com/api/?name=Rekha&background=ff6600&color=fff&size=200"
          alt="Profile"
          className="profile-image"
        />

        <h2>{user.name}</h2>

        <p>📧 {user.email}</p>

        <p>📱 {user.phone}</p>

        <div className="profile-buttons">

          <button onClick={() => navigate("/orders")}>
            📦 My Orders
          </button>

          <button onClick={() => navigate("/wishlist")}>
            ❤️ Wishlist
          </button>

          <button onClick={() => navigate("/cart")}>
            🛒 Cart
          </button>

          <button
            className="logout-btn"
            onClick={() => navigate("/login")}
          >
            🚪 Logout
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;