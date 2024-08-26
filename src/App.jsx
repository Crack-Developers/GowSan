import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Route/Home';
import AboutUs from "./components/Route/AboutUs";
import Blog from "./components/Route/Blog";
import Services from "./components/Route/Services";
import Contact from "./components/Route/Contuct";
import UK from "./components/Countries/UK";
import Australia from "./components/Countries/Australia";
import Canada from "./components/Countries/Canada";

const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/australia" element={<Australia />} />
      <Route path="/uk" element={<UK />} />
      <Route path="/canada" element={<Canada />} />
    </Routes>
  </div>
  );
};

export default App;