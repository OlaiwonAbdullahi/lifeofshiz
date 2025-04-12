import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Nav from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/footer";
import Connect from "./pages/connect";
import Travels from "./pages/travels";

const App = () => {
  return (
    <div className="flex flex-col w-full">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Connect />} />
          <Route path="/travel" element={<Travels />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
