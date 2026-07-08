import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import API from "../api/api";

export const ShopContext = createContext();

function ShopContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load Products from Backend
  useEffect(() => {
    fetchProducts();

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Save Cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to Cart
  const addToCart = (product) => {
    const exists = cartItems.find(
      (item) => item._id === product._id
    );

    if (exists) {
      setCartItems((prev) =>
        prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

      toast.info("Quantity Updated");
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);

      toast.success("Added to Cart");
    }
  };

  // Remove Cart
  const removeFromCart = (_id) => {
    setCartItems(
      cartItems.filter((item) => item._id !== _id)
    );

    toast.error("Removed from Cart");
  };

  // Increase
  const increaseQuantity = (_id) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === _id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease
  const decreaseQuantity = (_id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item._id === _id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Wishlist
  const addToWishlist = (product) => {
    const exists = wishlist.find(
      (item) => item._id === product._id
    );

    if (exists) {
      toast.warning("Already in Wishlist");
      return;
    }

    setWishlist([...wishlist, product]);

    toast.success("Added to Wishlist");
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cartItems,
        wishlist,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        addToWishlist,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;