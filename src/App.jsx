import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import About from "./pages/About";
import Navbar from "./component/blocks/Navbar";
import Footer from "./component/blocks/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Prices />} />
          <Route path="/" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
