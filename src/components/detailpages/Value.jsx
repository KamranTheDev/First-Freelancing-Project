import React from "react";

export default function Values() {
  const values = [
    { title: "Quality", desc: "We ensure the highest standards in every product we source." },
    { title: "Trust", desc: "We build reliable partnerships with our clients and suppliers." },
    { title: "Innovation", desc: "We embrace new solutions to strengthen the pharmaceutical industry." },
    { title: "Collaboration", desc: "We connect global manufacturers with local companies seamlessly." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-10">Our Values</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {values.map((value, i) => (
          <div key={i} className="p-6 bg-white rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
            <p className="text-gray-600">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
