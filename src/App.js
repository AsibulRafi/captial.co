import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import AccountsTypes from "./Pages/AccountsTypes";
import Home from "./Pages/Home";
import KYC from "./Pages/KYC";
import Privacy from "./Pages/Privacy";
import Products from "./Pages/Products";
import Terms from "./Pages/Terms";
import Webtrader from "./Pages/Webtrader";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/accountTypes" element={<AccountsTypes />} />
        <Route path="/platform" element={<Webtrader />} />
        <Route path="/resources" element={<Terms />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
