import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Services from "../pages/services/Services";
import Rules from "../pages/rules/Rules";
import About from "../pages/aboutus/About";
import Faq from "../pages/faq/Faq"
import Wishlist from "../pages/wishlist/Wishlist";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/rules" element={<Rules/>}/>
          <Route path="/aboutus" element={<About/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
