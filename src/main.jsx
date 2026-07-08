import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import ShopContextProvider from "./context/ShopContext";
import AuthProvider from "./context/AuthContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ShopContextProvider>
        <App />

        <ToastContainer
          position="top-right"
          autoClose={2000}
          newestOnTop
          theme="colored"
        />
      </ShopContextProvider>
    </AuthProvider>
  </React.StrictMode>
);