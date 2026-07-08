import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>🛍 ShopEase</h2>
          <p>
            Your one-stop online shopping destination for fashion,
            groceries, electronics, fruits, vegetables, and much more.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Support</h3>

          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: support@shopease.com</p>
          <p>Phone: +91 9876543210</p>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 ShopEase. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;