import React from "react";

export default function Clients() {
  const clients = [
    { id: 1, logo: "/clients/c1.jpg", name: "Client 1" },
    { id: 2, logo: "/clients/c2.jpg", name: "Client 2" },
    { id: 3, logo: "/clients/c3.jpg", name: "Client 3" },
    { id: 4, logo: "/clients/c4.jpg", name: "Client 4" },
    { id: 5, logo: "/clients/c5.jpg", name: "Client 5" },
    { id: 6, logo: "/clients/c6.jpg", name: "Client 6" },
    { id: 7, logo: "/clients/c7.jpg", name: "Client 7" },
    { id: 8, logo: "/clients/c8.jpg", name: "Client 8" },
    { id: 9, logo: "/clients/c9.jpg", name: "Client 9" },
    { id: 10, logo: "/clients/c10.jpg", name: "Client 10" },
    { id: 11, logo: "/clients/c12.jpg", name: "Client 11" },
    { id: 12, logo: "/clients/c13.jpg", name: "Client 12" },
    { id: 13, logo: "/clients/c14.jpg", name: "Client 13" },
    { id: 14, logo: "/clients/c15.jpg", name: "Client 14" },
    { id: 15, logo: "/clients/c16.jpg", name: "Client 15" },
    { id: 16, logo: "/clients/c17.jpg", name: "Client 16" },
    { id: 17, logo: "/clients/c18.jpg", name: "Client 17" },
    { id: 18, logo: "/clients/c19.jpg", name: "Client 18" },
    { id: 19, logo: "/clients/c20.jpg", name: "Client 19" },
    { id: 20, logo: "/clients/c11.jpg", name: "Client 20" },
    { id: 21, logo: "/clients/c21.jpg", name: "Client 21" },
    { id: 22, logo: "/clients/c22.jpg", name: "Client 22" },
    { id: 23, logo: "/clients/c23.jpg", name: "Client 23" },
    { id: 24, logo: "/clients/c24.jpg", name: "Client 24" },
    { id: 25, logo: "/clients/c25.jpg", name: "Client 25" },
    { id: 26, logo: "/clients/c26.jpg", name: "Client 26" },
    { id: 27, logo: "/clients/c27.jpg", name: "Client 27" },
    { id: 28, logo: "/clients/c28.jpg", name: "Client 28" },
    { id: 29, logo: "/clients/c29.jpg", name: "Client 29" },
    { id: 30, logo: "/clients/c30.jpg", name: "Client 30" },
    { id: 31, logo: "/clients/c31.jpg", name: "Client 31" },
    { id: 32, logo: "/clients/c32.jpg", name: "Client 32" },
    { id: 33, logo: "/clients/c33.jpg", name: "Client 33" },
    { id: 34, logo: "/clients/c34.jpg", name: "Client 34" },
    { id: 35, logo: "/clients/c35.jpg", name: "Client 35" },
    { id: 36, logo: "/clients/c36.jpg", name: "Client 36" },
    { id: 37, logo: "/clients/c37.jpg", name: "Client 37" },
    { id: 38, logo: "/clients/c38.jpg", name: "Client 38" },
    { id: 39, logo: "/clients/c39.jpg", name: "Client 39" },
    { id: 40, logo: "/clients/c40.jpg", name: "Client 40" },
    { id: 41, logo: "/clients/c41.jpg", name: "Client 41" },
    { id: 42, logo: "/clients/c42.jpg", name: "Client 42" },
    { id: 43, logo: "/clients/c43.jpg", name: "Client 43" },
    { id: 44, logo: "/clients/c44.jpg", name: "Client 44" },
    { id: 45, logo: "/clients/c45.jpg", name: "Client 45" },
    { id: 46, logo: "/clients/c46.jpg", name: "Client 46" },
    { id: 47, logo: "/clients/c47.jpg", name: "Client 47" },
    { id: 48, logo: "/clients/c48.jpg", name: "Client 48" },
    { id: 49, logo: "/clients/c49.jpg", name: "Client 49" },
    { id: 50, logo: "/clients/c50.jpg", name: "Client 50" },
    { id: 51, logo: "/clients/c51.jpg", name: "Client 51" },
    { id: 52, logo: "/clients/c52.jpg", name: "Client 52" },
    { id: 53, logo: "/clients/c53.jpg", name: "Client 53" },
    { id: 54, logo: "/clients/c54.jpg", name: "Client 54" },
    { id: 55, logo: "/clients/c55.jpg", name: "Client 55" },
    { id: 56, logo: "/clients/c56.jpg", name: "Client 56" },
    { id: 57, logo: "/clients/c57.jpg", name: "Client 57" },

  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section>
        <div
      className="relative h-[65vh] bg-cover bg-center flex items-center justify-center">
      <img
            src="abdt/ad1.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-l-2xl"
          />
      <div className="absolute inset-0 bg-black/40">
      <h1 className="relative text-5xl font-bold text-white z-10 mt-54 ml-155">Clients</h1>
    </div>
    </div>
      </section>

      {/* Description Section */}
      <section className="py-10 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Clients</h2>
        <p className="text-gray-600 mb-4">
          At Sourcify Chemicals, we are proud to serve a wide range of pharmaceutical 
          companies across Pakistan. Our clients trust us for quality, compliance, 
          and long-term partnerships.
        </p>
        <p className="text-gray-600 mb-4">
          With more than a decade of experience, we continue to strengthen 
          collaborations and support our clients in achieving their goals.
        </p>
      </section>

      {/* Logo Grid Section */}
      <section className="py-4 px-8 max-w-7xl mx-auto bg-gray-100">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {clients.map((client) => (
            <div key={client.id} className="flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
