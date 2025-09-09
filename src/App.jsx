import React from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About Us';
import Stats from './components/pages/Satisfy';
import Products from './components/pages/Products';
import Suppliers from './components/pages/Suppliers';
import Contact from './components/pages/Contact Us';
import Footer from './components/pages/Footer';
import Aboutdetails from './components/Routes/Aboutdetailsroute';
import Productdetailsroute from './components/Routes/Productdetailsroute';
import Suppliersdetailsroute from './components/Routes/Suppliersdetailsroute';
import Clientsdetailsroute from './components/Routes/Clientsdetailsroute';
// import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <Router>
    
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Stats />
            <Products />
            <Suppliers />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/about" element={<Aboutdetails />} />
        <Route path="/products" element={<Productdetailsroute />} />
        <Route path="/suppliers" element={<Suppliersdetailsroute />} />
        <Route path="/clients" element={<Clientsdetailsroute />} />

      </Routes>
    
    </Router>
  );
}

export default App;