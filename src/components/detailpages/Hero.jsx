import React from "react";

export default function Hero() {
  return (
    <div
      className="relative h-[65vh] bg-cover bg-center flex items-center justify-center "
      style={{ backgroundImage: "url('./public/abdt/ad1.jpg')" }} // replace with your image
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <h1 className="relative text-5xl font-bold text-white z-10 mt-15">About Us</h1>
    </div>
  );
}
