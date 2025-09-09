import React from "react";

export default function WhoWeAre() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl font-bold text-green-700 mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed mb-6 text-base">
          Sourcify Chemicals is a flexible and customer-oriented indenting house,
          dedicated to sourcing high-quality pharmaceutical raw materials.
        </p>
        <p className="text-gray-700 leading-relaxed text-base">
          Our company is managed by a team of experienced professionals who bring
          innovation, expertise, and trust to every partnership.
        </p>
      </div>
      <div>
        <img
          src="abdt/ad2.jpg"
          alt="About Sourcify Chemicals"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}
