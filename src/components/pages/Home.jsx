import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
      >
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

      {/* Text Content (Left Side) */}
      <div className="relative z-10 flex items-center h-full px-10 text-black">
        <div className="max-w-1/2 pt-55">
          <h2 className="text-xl font-semibold mb-4 ">
            We Are <span className="text-yellow-500">Sourcify Chemicals</span>
          </h2>
          <h1 className="text-3xl font-semibold mb-4 leading-tight">
            We deliver trusted chemical solutions for a healthier tomorrow.
          </h1>
          <p className="text-lg mb-6">
           Sourcify Chemicals is your trusted partner for sourcing high-quality chemicals worldwide.<br />
           We ensure reliability, safety, and excellence for every industry we serve.
           Experience seamless procurement and dedicated support with us.
          </p>
          <a
            href="/products"
            className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Explore Products
          </a>
        </div>
      </div>
// ...existing code...
    </section>
  );
}
