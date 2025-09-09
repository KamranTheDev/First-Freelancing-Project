import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
   
    
    <section id="about" className="py-16 bg-gray-10">
      <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-6 items-center">
        
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 ">
          About Us
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Sourcify Chemicals is a customer-focused indenting house dedicated to sourcing
            high-quality pharmaceutical raw materials and supporting product development 
            services for clients across the pharmaceutical industry in Pakistan.
          </p>
          <p className="text-base text-gray-600 mb-4">
            Managed by a team of skilled professionals with years of experience, 
            we aim to build sustainable partnerships, ensure quality standards, 
            and deliver reliable solutions tailored to the evolving needs of our clients.
          </p>
          <button
             onClick={() => navigate("/about")} // Later replace with React Router
            className="mt-4 bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Explore More
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center md:justify-end left-1">
          {/* Portrait Image */}
          <img
            src="ab1.png"
            alt="Portrait"
            className="w-50 h-[450px] object-cover rounded-lg  border-2 border-gray-200 pg  "
          />

          {/* Landscape Image (Overlapping) */}
          <img
            src="ab2.png"
            alt="Landscape"
            className="absolute -bottom-10 -left-2 w-110 h-60 object-cover rounded-xl border-2 border-gray-50"
          />
        </div>
      </div>
    </section>
  );
}
