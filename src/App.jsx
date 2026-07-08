import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Home Components
import Hero from "./Components/Hero/Hero";
import Categories from "./Components/Categories/Categories";
import ProductCard from "./Components/ProductCard/ProductCard";
import TodayDeals from "./Components/TodayDeals/TodayDeals";
import BestSellers from "./Components/BestSellers/BestSellers";
import OfferBanner from "./Components/OfferBanner/OfferBanner";
import Testimonials from "./Components/Testimonials/Testimonials";
import Newsletter from "./Components/NewsLetter/NewsLetter";
import Banner from "./Components/Banner/Banner";
import FlashSale from "./Components/FlashSale/FlashSale";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";

// Pages
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/Wishlist/Wishlist";
import Profile from "./Components/Profile/Profile";
import Orders from "./Components/Orders/Orders";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Checkout from "./Components/Checkout/Checkout";
import Payment from "./Components/Payment/Payment";
import OrderSuccess from "./Components/OrderSuccess/OrderSuccess";

// Admin
import Admin from "./Components/Admin/Admin";
import AddProduct from "./Components/AddProduct/AddProduct";
import ManageProducts from "./Components/ManageProducts/ManageProducts";
import EditProduct from "./Components/EditProduct/EditProduct";

// Authentication
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

// Protected Route
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function HomePage() {
  return (
    <>
      <Banner />
      <Hero />
      <FlashSale />
      <FeaturedProducts />
      <Categories />
      <ProductCard />
      <TodayDeals />
      <BestSellers />
      <OfferBanner />
      <Testimonials />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Products */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Public Pages */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* Protected Routes */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-product"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <ManageProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit-product/:id"
          element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;