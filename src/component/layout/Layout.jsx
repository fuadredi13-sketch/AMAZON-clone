import React from "react";
import Home from "../Home/Home";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Common component shown on every page */}
      <Home />

      {/* Page-specific content */}
      {children}
    </div>
  );
};

export default Layout;
