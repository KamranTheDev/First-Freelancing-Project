import React from "react";

export default function CTA() {
  return (
    <div className="relative py-20 text-center h-70 overflow-hidden">
      {/* Background Image */}
      <img
        src="abdt/ad3.jpg"
        alt="Call to Action Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay for darkening the image */}
     
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white mb-12">
          Ready to Partner with Sourcify Chemicals?
        </h2>
        <a
          href="/products"
          className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-500 transition"
        >
          Explore Our Products
        </a>
      </div>
    </div>
  );
}