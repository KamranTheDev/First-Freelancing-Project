import React from "react";

export default function Suppliersdetail() {
  const suppliers = [
    { id: 1, logo: "/suppliers/l1.jpg", name: "Supplier 1" },
    { id: 2, logo: "/suppliers/l2.jpg", name: "Supplier 2" },
    { id: 3, logo: "/suppliers/l3.jpg", name: "Supplier 3" },
    { id: 4, logo: "/suppliers/l4.jpg", name: "Supplier 4" },
    { id: 5, logo: "/suppliers/l5.jpg", name: "Supplier 5" },
    { id: 6, logo: "/suppliers/l6.jpg", name: "Supplier 6" },
    { id: 7, logo: "/suppliers/l7.jpg", name: "Supplier 7" },
    { id: 8, logo: "/suppliers/l8.jpg", name: "Supplier 8" },
    { id: 9, logo: "/suppliers/l9.jpg", name: "Supplier 9" },
    { id: 10, logo: "/suppliers/l10.jpg", name: "Supplier 10" },
    { id: 11, logo: "/suppliers/l11.jpg", name: "Supplier 11" },
    { id: 12, logo: "/suppliers/l12.jpg", name: "Supplier 12" },
    { id: 13, logo: "/suppliers/l13.jpg", name: "Supplier 13" },
    { id: 14, logo: "/suppliers/l14.jpg", name: "Supplier 14" },
    { id: 15, logo: "/suppliers/l15.jpg", name: "Supplier 15" },
    { id: 16, logo: "/suppliers/l16.jpg", name: "Supplier 16" },
    { id: 17, logo: "/suppliers/l17.jpg", name: "Supplier 17" },
    { id: 18, logo: "/suppliers/l18.jpg", name: "Supplier 18" },
    { id: 19, logo: "/suppliers/l19.jpg", name: "Supplier 19" },
    { id: 20, logo: "/suppliers/l20.jpg", name: "Supplier 20" },
    { id: 21, logo: "/suppliers/l21.jpg", name: "Supplier 21" },
    { id: 22, logo: "/suppliers/l22.jpg", name: "Supplier 22" }, 
    { id: 23, logo: "/suppliers/l23.jpg", name: "Supplier 23" },
    { id: 24, logo: "/suppliers/l24.jpg", name: "Supplier 24" },
    { id: 25, logo: "/suppliers/l25.jpg", name: "Supplier 25" },
    { id: 26, logo: "/suppliers/l26.jpg", name: "Supplier 26" },
    
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section>
       <div
      className="relative h-[65vh] bg-cover bg-center flex items-center justify-center">
      <img
            src="pic3.png"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-l-2xl"
          />
    
      <div className="absolute inset-0 bg-black/40">
      <h1 className="relative text-5xl font-bold text-white z-10 mt-50 ml-133">Suppliers</h1>
    </div>
    </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Suppliers</h2>
        <p className="text-gray-600 mb-4">
          At Sourcify Chemicals, we work with internationally reputed API and raw
          material manufacturers. Our suppliers follow strict quality standards
          and comply with global regulatory guidelines to ensure the highest level
          of trust and reliability.
        </p>
        <p className="text-gray-600 mb-4">
          With over 18+ global suppliers, we provide a wide range of pharmaceutical
          solutions, supporting innovation and a healthier future.
        </p>
      </section>

      {/* Logo Grid Section */}
      <section className="py-10 px-6 max-w-7xl mx-auto bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {suppliers.map((supplier) => (
            <div key={supplier.id} className="flex justify-center">
              <img
                src={supplier.logo}
                alt={supplier.name}
                className="h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
