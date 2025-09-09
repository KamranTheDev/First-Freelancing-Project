import React from "react";

export default function Hero() {
  return (
    <div
      className="relative h-[65vh] bg-cover bg-center flex items-center justify-center ">
      <img
            src="abdt/ad1.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-l-2xl"
          />
      <div className="absolute inset-0 bg-black/50">
      <h1 className="relative text-5xl font-bold text-white z-10 mt-50 text-center">About Us</h1>
    </div>
    </div>
  );
}
