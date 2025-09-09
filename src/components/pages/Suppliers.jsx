import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ Removed Loop
import "swiper/css";
import "swiper/css/navigation";

export default function Suppliers() {
  const suppliers = [
    { id: 1, logo: "/public/suppliers/l1.jpg", name: "Supplier One" },
    { id: 2, logo: "/public/suppliers/l2.jpg", name: "Supplier Two" },
    { id: 3, logo: "/public/suppliers/l3.jpg", name: "Supplier Three" },
    { id: 4, logo: "/public/suppliers/l4.jpg", name: "Supplier Four" },
    { id: 5, logo: "/public/suppliers/l5.jpg", name: "Supplier Five" },
    { id: 6, logo: "/public/suppliers/l6.jpg", name: "Supplier Six" },
    { id: 7, logo: "/public/suppliers/l7.jpg", name: "Supplier Seven" },
    { id: 8, logo: "/public/suppliers/l8.jpg", name: "Supplier Eight" },
    { id: 9, logo: "/public/suppliers/l9.jpg", name: "Supplier Nine" },
    { id: 10, logo: "/public/suppliers/l10.jpg", name: "Supplier Ten" },
    { id: 11, logo: "/public/suppliers/l11.jpg", name: "Supplier Eleven" },
    { id: 12, logo: "/public/suppliers/l12.jpg", name: "Supplier Twelve" },
    { id: 13, logo: "/public/suppliers/l13.jpg", name: "Supplier Thirteen" },
    { id: 14, logo: "/public/suppliers/l14.jpg", name: "Supplier Fourteen" },
    { id: 15, logo: "/public/suppliers/l15.jpg", name: "Supplier Fifteen" },
    { id: 16, logo: "/public/suppliers/l16.jpg", name: "Supplier Sixteen" },
    { id: 17, logo: "/public/suppliers/l17.jpg", name: "Supplier Seventeen" },
    { id: 18, logo: "/public/suppliers/l18.jpg", name: "Supplier Eighteen" },
    { id: 19, logo: "/public/suppliers/l19.jpg", name: "Supplier Nineteen" },
    { id: 20, logo: "/public/suppliers/l20.jpg", name: "Supplier Twenty" },
    { id: 21, logo: "/public/suppliers/l21.jpg", name: "Supplier Twenty-One" },
    { id: 22, logo: "/public/suppliers/l22.jpg", name: "Supplier Twenty-Two" }, 
    { id: 23, logo: "/public/suppliers/l23.jpg", name: "Supplier Twenty-Three" },
    { id: 24, logo: "/public/suppliers/l24.jpg", name: "Supplier Twenty-Four" },
    { id: 25, logo: "/public/suppliers/l25.jpg", name: "Supplier Twenty-Five" }
  ];
  return (
    <section className="py-20 bg-white" id="suppliers">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Suppliers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          At Sourcify Chemicals, we collaborate with internationally reputed
          manufacturers, ensuring compliance with global standards and
          delivering reliable pharmaceutical solutions.
        </p>

        <Swiper
          modules={[Navigation, Autoplay]} // ✅ Removed Loop
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true} // ✅ loop is just a prop, no module needed
          spaceBetween={40}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {suppliers.map((supplier) => (
            <SwiperSlide key={supplier.id}>
              <div className="flex justify-center">
                <img
                  src={supplier.logo}
                  alt={supplier.name}
                  className="h-20 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <a
  href="/suppliers"
  className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold inline-block"
>
  View All
</a>
      </div>
    </section>
  );
}
