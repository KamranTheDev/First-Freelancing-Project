import React from "react";

export default function CTA() {
  return (
    <div className="bg-green-700 py-20 text-center h-70"
    style={{ backgroundImage: "url('./public/abdt/ad3.jpg')" }} >

      <h2 className="text-3xl font-bold text-black mb-12">
        Ready to Partner with Sourcify Chemicals?
      </h2>
      <a
        href="/products"
        className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-500 transition"
      >
        Explore Our Products
      </a>
    </div>
  );
}
