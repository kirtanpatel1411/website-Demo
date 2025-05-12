import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Pricing from "../pages/Pricing";
import Courses from "../pages/Courses";
import CoursesShow from "../pages/CoursesShow";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/CoursesShow" element={<CoursesShow />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};
export default RoutesComponent;
