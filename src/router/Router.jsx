import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Services from "../pages/services/Services";
import Rules from "../pages/rules/Rules";
import About from "../pages/aboutus/About";
import Faq from "../pages/faq/Faq"
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/rules" element={<Rules/>}/>
          <Route path="/aboutus" element={<About/>}/>
          <Route path="/faq" element={<Faq/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
