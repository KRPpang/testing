import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from "./components/Navbar.js";
import Header from "./components/Header.js";
import RestaurantHours from "./components/Hours.js";
import About from "./components/About.js";
import PriceChangePage from './components/PriceChangePage.js';
import ResSlider from './components/ResSlider.jsx';
import Banner from './components/Banner.js';
import Clock from './components/clock.js';

function App() {
  return (
    <Router>
      <Banner />
      <NavBar />
      <Routes>
        <Route path="/restaurants" element={
          <>
            <Header />
            <div className="container mt-4">
            </div>
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/hours" element={[
        <Clock />, <RestaurantHours />
        ]} />
        <Route path="/pricechange" element={<PriceChangePage />} />
      </Routes>
    </Router>
  );
}

export default App;
