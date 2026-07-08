import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { AuthContext } from "../../context/AuthContext";
import {
  FaShoppingCart,
  FaHeart,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

function Navbar() {
  const { cartItems, wishlist } = useContext(ShopContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <h2>🛍 ShopEase</h2>
        </Link>
      </div>

      {/* Navigation */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Search */}
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>

      {/* Icons */}
      <div className="icons">

        <Link to="/wishlist" className="icon">
          <FaHeart />
          <span className="count">{wishlist.length}</span>
        </Link>

        <Link to="/cart" className="icon">
          <FaShoppingCart />
          <span className="count">{cartItems.length}</span>
        </Link>

        {user ? (
          <>
            <span className="user-name">
              👋 {user.name}
            </span>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="icon">
            <FaUserCircle />
          </Link>
        )}

      </div>
    </nav>
  );
}

export default Navbar;