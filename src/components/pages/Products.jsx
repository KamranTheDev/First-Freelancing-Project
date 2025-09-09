import React from "react";
import { FaFlask, FaLeaf, FaCapsules } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50 overflow-x-hidden mx-2">
      <div className="max-w-7xl  grid md:grid-cols-2 gap-16 items-center ">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/pic3.png"
            alt="Sourcify Services"
            className="rounded-xl shadow-lg h-[80vh] max-w-md object-cover "
          />
        </div>

        {/* Text Section */}
        <div>
          <h4 className="text-blue-600 font-semibold uppercase mb-2">
            What We Offer
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 ">
            Our Core Business Portfolio
          </h2>

          {/* Service 1 */}
          <div className="flex items-start mb-6">
            <div className="text-green-600 text-3xl mr-4">
              <FaFlask />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Active Ingredients
              </h3>
              <p className="text-gray-600">
                We provide a wide range of Active Pharmaceutical Ingredients 
                that meet global quality standards, ensuring safety and 
                consistency for our clients’ formulations.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex items-start mb-6">
            <div className="text-green-600 text-3xl mr-4">
              <FaLeaf />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Nutraceuticals</h3>
              <p className="text-gray-600">
                Our nutraceutical range supports wellness and preventive 
                healthcare. We partner with trusted manufacturers to bring 
                innovative natural solutions to the market.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex items-start">
            <div className="text-green-600 text-3xl mr-4">
              <FaCapsules />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Excipients</h3>
              <p className="text-gray-600">
                We deliver high-quality pharmaceutical excipients designed to 
                enhance formulations, improve stability, and ensure reliable 
                product performance.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-8">
            <a
              href="/products"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold inline-block"
            >
              View All Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
