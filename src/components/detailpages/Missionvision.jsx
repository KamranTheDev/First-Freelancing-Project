import React from "react";

export default function MissionVision() {
  return (
    <div className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 text-center md:text-left">
        <div className="p-8 bg-white shadow-lg rounded-2xl">
          <h3 className="text-2xl font-semibold text-green-700 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To deliver trusted pharmaceutical raw materials and foster long-term
            collaborations between global API manufacturers and pharmaceutical
            companies in Pakistan.
          </p>
        </div>
        <div className="p-8 bg-white shadow-lg rounded-2xl">
          <h3 className="text-2xl font-semibold text-green-700 mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To be recognized as a leading partner in the pharmaceutical industry,
            empowering healthier communities through innovation and reliable
            sourcing solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
