import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0fm9f4n",
        "template_5fnk88f",
        formData,
        "woCN3VwcHKltiM0Ft"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          setFormData({ name: "", phone: "", email: "", message: "" });
        },
        () => {
          alert("Something went wrong ❌, try again!");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto relative flex items-center min-h-[500px]">
        {/* Background Image (left half) */}
        <div className="absolute inset-0 w-150 h-full left-4 top-0 z-0 hidden md:block">
          <img
            src="pic4.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>
        {/* Contact Form (front) */}
        <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg w-full md:w-1/2 ml-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}