import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 shadow-lg fixed w-full top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl  flex items-center justify-between mx-9 py-3">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.jpeg"
            alt="Sourcify Logo"
            className="h-14 w-14 rounded-full border-2 border-white shadow"
          />
          <span className="text-2xl font-bold tracking-wide text-white font-seagull">
            <span className="text-yellow-300">Sourcify</span> Chemicals
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-white uppercase font-medium py-4">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-yellow-300 transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link to="/suppliers" className="hover:text-yellow-300 transition-colors">
              Suppliers
            </Link>
          </li>
          <li>
            <Link to="/clients" className="hover:text-yellow-300 transition-colors">
              Clients
            </Link>
          </li>
          <li>
            <HashLink
              smooth
              to="/#contact"
              className="bg-yellow-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-700 transition-colors font-semibold"
            >
              Contact Us
            </HashLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-green-600 px-8 py-6 space-y-6 text-white text-lg uppercase font-medium">
          <Link to="/" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/products" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link to="/suppliers" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Suppliers
          </Link>
          <Link to="/clients" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Clients
          </Link>
          <HashLink
            smooth
            to="/#contact"
            className="block bg-yellow-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-700 transition-colors font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </HashLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
