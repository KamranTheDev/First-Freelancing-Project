import React from "react";

export default function Productdetails() {
  return (
    <>
    <section>
    <div
      className="relative h-[65vh] bg-cover bg-center flex items-center justify-center">
      <img
            src="abdt/ad4.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-l-2xl"
          />
      <div className="absolute inset-0 bg-black/30">
      <h1 className="relative text-5xl font-bold text-white z-10 mt-50 mx-111 ">Products details</h1>
    </div>
    </div>
    </section>
    {/* Section 2: Our Products */}
<section className="py-12 bg-white text-center max-w-4xl mx-auto px-4">
  <h2 className="text-3xl font-bold mb-8 text-black">Our Products</h2>
  <p className="text-black text-base ">
    At Sourcify Chemicals, we specialize in providing high-quality APIs and excipients for the pharmaceutical industry. From the beginning, our focus has been on sourcing reliable raw materials from trusted international manufacturers.  
  </p>
  <p className="text-black text-base ">
    Over the years, we have expanded our portfolio to meet the diverse needs of our clients, ensuring every product meets strict quality standards.  
  </p>
  <p className="text-black ">
    Our products support both large-scale manufacturing and specialized research applications, catering to multinational corporations as well as emerging startups.  
  </p>
  <p className="text-black ">
    We maintain long-term partnerships with our suppliers to guarantee consistency and reliability in every shipment.  
  </p>
  <p className="text-black ">
    Safety and compliance are at the core of our operations, with thorough documentation and quality checks for each product.  
  </p>
  <p className="text-black">
    Innovation drives us forward; we are constantly exploring new chemical solutions and technologies to support the evolving pharmaceutical landscape.  
  </p>
  <p className="text-black">
    Our team of experts provides guidance and support to ensure our partners achieve the best results from our products.  
  </p>
  <p className="text-black">
    From formulation to delivery, every step is handled with precision and care, reflecting our commitment to excellence.  
  </p>
  <p className="text-black">
    Sourcify Chemicals prides itself on its transparency, reliability, and dedication to creating value for all partners in the pharmaceutical ecosystem.  
  </p>
  <p className="text-black">
    As we continue to grow, we remain focused on offering products that meet global standards and exceed customer expectations.  
  </p>
  <p className="text-black">
    Join us in our mission to provide exceptional chemical solutions that empower innovation and enhance healthcare worldwide.
  </p>
</section>
{/* Section 4: Active Pharmaceutical Ingredients */}
<section className="py-14 bg-gray-100 max-w-7xl mx-auto ">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mx-10">
    
    {/* Left Side: Text */}
    <div className="md:w-1/2">
      <p className="text-lg text-blue-500 font-bold mb-2">API</p>
      <h2 className="text-3xl font-bold text-black mb-4">Active Pharmaceutical Ingredients</h2>
      <p className="text-black mb-4">
        We provide high-quality Active Pharmaceutical Ingredients (APIs) across a wide range of therapeutic categories. Our goal is to ensure every product meets strict quality standards and serves the needs of our clients reliably.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-black">
        <ul className="space-y-1">
          <li>Antacids</li>
          <li>Analgesics & NSAIDs</li>
          <li>Cortico-Steroids</li>
          <li>Vitamins</li>
          <li>Anti-diabetics</li>
          <li>Anti-Rheumatics</li>
          <li>CNS Acting drugs</li>
          <li>Antianginal & Antihypertensive</li>
        </ul>
        <ul className="space-y-1">
          <li>Cephalosporins & Semi synthetic Penicillin</li>
          <li>Enzymes & Hormones</li>
          <li>Herbal Extracts</li>
          <li>Minerals, Sugar & Sodium Chloride</li>
        </ul>
      </div>
    </div>

    {/* Right Side: Images */}
    <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <img
        src="abdt/ad5.jpg" alt="API 1"
        className="w-full h-48 object-cover rounded-lg shadow"
      />
      <img
        src="abdt/ad6.jpg" alt="API 1"
        className="w-full h-48 object-cover rounded-lg shadow"
      />
      <img
        src="/abdt/ad7.jpg" alt="API 1"
        className="w-full h-48 object-cover rounded-lg shadow"
      />
      <img
        src="abdt/ad4.jpg" alt="API 1"
        className="w-full h-48 object-cover rounded-lg shadow"
      />

      </div>

  </div>
</section>
{/* Section 5: Nutraceuticals */}
<section className="py-16 bg-white w-full">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mx-12">
    
    {/* Left Side: Text */}
    <div className="md:w-1/2 text-black">
      <h2 className="text-3xl font-bold mb-6">Nutraceuticals</h2>
      <p className=" leading-relaxed">
        At Sourcify Chemicals, we are committed to delivering a comprehensive
        range of Nutraceuticals and natural extracts. With rising demand for
        health-focused products, we carefully source our portfolio from trusted
        FDA- and GMP-approved manufacturers worldwide. 
      </p>
      <p className=" leading-relaxed mt-4">
        Our Nutraceutical offerings support wellness, preventive healthcare, and
        nutritional enrichment, ensuring our partners always have access to safe,
        effective, and innovative solutions for today’s market.
      </p>
    </div>

    {/* Right Side: Image */}
    <div className="md:w-1/2">
      <img
        src="abdt/ad8.jpg"
        alt="Nutraceuticals"
        className="rounded-lg shadow-lg w-full"
      />
    </div>

  </div>
</section>
{/* Section 7: Packaging Material and Excipients */}
<section className="py-16 bg-gray-100 w-full">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mx-14">
    
    {/* Left Side: Text */}
    <div className="md:w-1/2 text-black">
      <h2 className="text-3xl font-bold mb-6">Packaging Material and Excipients</h2>
      <p className="leading-relaxed">
        Shanghai Seabird Home E-Commerce Company is professionally engaged in
        medical raw materials, accessories, and finished medical products.
        Our raw material products mainly provide medical polymer functional
        granules, while accessories include precision rubber parts, plastic
        components, pharmaceutical rubber stoppers, medicine bottles,
        safety needles, indwelling needles, and packaging rubber plugs.
      </p>
      <p className="leading-relaxed mt-4">
        Selecting the appropriate pharmaceutical excipients to support the
        design of your formulation is an important step in the drug
        manufacturing process. At Sourcify Chemicals, we provide a complete
        range of excipients to help our partners develop safe and effective
        products.
      </p>
    </div>

    {/* Right Side: Image Grid */}
    <div className="md:w-1/2 grid grid-cols-3 gap-4">
      <img src="abdt/ad7.jpg" alt="Packaging 1" className="rounded shadow" />
      <img src="abdt/ad4.jpg" alt="Packaging 2" className="rounded shadow" />
      <img src="abdt/ad14.jpg" alt="Packaging 3" className="rounded shadow" />
      <img src="abdt/ad13.png" alt="Packaging 4" className="rounded shadow" />
      <img src="abdt/ad10.jpg" alt="Packaging 5" className="rounded shadow" />
      <img src="abdt/ad15.jpeg" alt="Packaging 6" className="rounded shadow" />
    </div>
  </div>
</section>
    </>

    
  );
}
