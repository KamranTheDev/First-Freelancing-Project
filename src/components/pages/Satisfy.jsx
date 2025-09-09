import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaPills, FaGlobe, FaSmile } from "react-icons/fa";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3,    // when 30% visible
  });

  return (
    <section
      ref={ref}
      className="py-8 bg-yellow-200 text-black mt-13"
    >
      <div className="max-w-7xl max-h-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center px-6">
        
        {/* Customers */}
        <div className="flex flex-col items-center">
          <FaUsers className="text-5xl mb-3" />
          <h3 className="text-2xl font-bold">
            {inView && <CountUp start={0} end={190} duration={2} />}+
          </h3>
          <p className="text-base mt-2">Satisfied Customers</p>
        </div>

        {/* APIs */}
        <div className="flex flex-col items-center">
          <FaPills className="text-5xl mb-3" />
          <h3 className="text-2xl font-bold">
            {inView && <CountUp start={0} end={450} duration={2.5} />}+
          </h3>
          <p className="text-base mt-2">APIs & Excipients Range</p>
        </div>

        {/* Suppliers */}
        <div className="flex flex-col items-center">
          <FaGlobe className="text-5xl mb-3" />
          <h3 className="text-2xl font-bold">
            {inView && <CountUp start={0} end={350} duration={2.5} />}+
          </h3>
          <p className="text-base mt-2">Worldwide Renowned Suppliers</p>
        </div>

        {/* Satisfaction */}
        <div className="flex flex-col items-center">
          <FaSmile className="text-5xl mb-3" />
          <h3 className="text-2xl font-bold">
            {inView && <CountUp start={0} end={99} duration={2} />}%
          </h3>
          <p className="text-base mt-2">Satisfaction</p>
        </div>

      </div>
    </section>
  );
}
