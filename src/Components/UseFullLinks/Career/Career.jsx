import React, { useEffect } from 'react';
import Header from '../../Header/Header';
import Info from '../../Footer/Info';

function Career() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
       
        <div className="text-white bg-[#0b0f28] text-center py-16 px-4">
          <p className="text-3xl md:text-5xl font-medium">Career</p>
          <p className="flex items-center justify-center gap-2 text-sm mt-4">
            <span className="text-blue-500 cursor-pointer hover:underline">Home</span>
            <span>|</span>
            <span>Career</span>
          </p>
        </div>
      </main>

      {/* Heading */}
      <div className="text-2xl md:text-4xl font-semibold text-center mt-12 px-4">
        Find The Career You Deserve — <span className="text-blue-600">JIMDIGITAL.COM</span>
      </div>

      {/* Career Offers */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-12 px-6">
        
        {/* Card 1 */}
        <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
          <img
            src="https://cybetiq.com/wp-content/themes/cybetiq-v2/img/career-offer-1.png"
            alt="Career Offer 1"
            className="w-full h-75 object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-300 p-4">
            <p className="text-white text-2xl font-semibold">WE ARE HIRING</p>
            <p className="text-gray-200 mt-2">We are Hiring a PHP developer. Click below to apply</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
          <img
            src="https://cybetiq.com/wp-content/themes/cybetiq-v2/img/career-offer-2.png"
            alt="Career Offer 2"
            className="w-full h-75 object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-300 p-4">
            <p className="text-white text-2xl font-semibold">Training & Placement</p>
            <p className="text-gray-200 mt-2">We are offering Training & Placement</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <Info />
    </>
  );
}

export default Career;
