import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Admin from "./Admin";
import ProductDetails from "./ProductDetails";
import AdminProduct from "./AdminProduct";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/admin/products/:id" element={<AdminProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
