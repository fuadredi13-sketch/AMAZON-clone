import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Import Pages
import Landing from "./pages/Landing/Landing";
import Signup from "./pages/Auth/Signup";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";

function Routing() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />

        {/* Payment Page */}
        <Route path="/payment" element={<Payment />} />

        {/* Orders Page */}
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default Routing;
