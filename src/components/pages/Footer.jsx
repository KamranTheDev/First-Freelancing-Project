import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";


export default function Footer() {
  const [subscriberEmail, setSubscriberEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const templateParams = {
      subscriber_email: subscriberEmail, // 🔹 matches variable in EmailJS template
    };

    emailjs
      .send(
        "service_0fm9f4n", // 🔹 Your EmailJS Service ID
        "template_kb1rmg2", // 🔹 Create a new template for subscription
        templateParams,
        "woCN3VwcHKltiM0Ft" // 🔹 Your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Thank you for subscribing!");
          setSubscriberEmail(""); // clear input
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Subscription failed. Try again!");
        }
      );
  };

  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-7xl mx-4 px-9 py-12 grid md:grid-cols-4 gap-4">
        
        {/* Logo + Description */}
        <div>
          <img
            src="/logo.jpeg"
            alt="Sourcify Chemicals Logo"
            className="h-20 mb-2"
          />
          <p className="text-sm mb-3">
            Sourcify Chemicals is a flexible and customer-oriented indenting house.
          </p>

          {/* Newsletter */}
          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-l-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 rounded-r-lg hover:bg-green-700"
            >
              →
            </button>
          </form>
        </div>

        {/* Information Links */}
       {/* Information Links */}
<div>
  <h3 className="text-lg font-semibold mb-4">Information</h3>
  <ul className="space-y-2 text-sm">
    <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
    <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
    <li><Link to="/suppliers" className="hover:text-blue-600">Our Suppliers</Link></li>
    <li><Link to="/clients" className="hover:text-blue-600">Our Clients</Link></li>
    <li><Link to="/products" className="hover:text-blue-600">Our Products</Link></li>
  </ul>
</div>

{/* Products Links */}
<div>
  <h3 className="text-lg font-semibold mb-4">Our Products</h3>
  <ul className="space-y-2 text-sm">
    <li><Link to="/products" className="hover:text-blue-600">API</Link></li>
    <li><Link to="/products" className="hover:text-blue-600">Nutraceuticals</Link></li>
    <li><Link to="/products" className="hover:text-blue-600">Packing Material</Link></li>
    <li><Link to="/products" className="hover:text-blue-600">Excipients</Link></li>
  </ul>
</div>


        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            Kotli Road, Sector F-7, Mirpur Azad Jammu and Kashmir, Pakistan
          </p>
          <p className="text-sm mt-3"> Phone: +92 370 1908682</p>
          <p className="text-sm"> Phone: +92 371 0519048</p>
          <p className="text-sm">Email: sourcifychemicals@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-500 text-white py-4 px-20 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Sourcify Chemicals. All Rights Reserved
        </p>
        
        {/* Social Icons */}
        <div className="flex space-x-5 mt-3 md:mt-0">
          <a href="https://www.facebook.com/share/17CFadjGGb/" className="hover:text-blue-700">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/kamranmajeed861?igsh=MXU4enRsc29weDgwdA==" className="hover:text-blue-700">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
