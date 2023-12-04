import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from "./components/Navbar.js";
import Header from "./components/Header.js";
import RestaurantHours from "./components/Hours.js";
import About from "./components/About.js";
import PriceChangePage from './components/PriceChangePage.js';
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <div className="container mt-4">
            </div>
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/hours" element={<RestaurantHours />} />
        <Route path="/pricechange" element={<PriceChangePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
