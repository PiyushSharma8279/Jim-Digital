import React, { useState } from "react";
import { X } from 'lucide-react';


function Google() {
    const [activeCategory, setActiveCategory] = useState(null);
    return (
        <>

        <div className="px-6 md:px-10 text-white">
                <h2 className="text-green-500 pt-2 text-2xl md:text-[30px] font-semibold">
                  Pay Per Click
                </h2>
                <p className="text-sm md:text-lg">
                  Maximise your ROI with targeted PPC solutions
                </p>


                <div className="flex flex-wrap gap-3 md:gap-6 py-4 md:py-6">
                  {[
                    "Google Ads",
                    "Google Shopping",
                    "YouTube Ads",
                    "Display Ads",
                    "Programmatic Advertising",
                    "Google Ads Audits",
                    "Bing Ads",
                  ].map((cat) => (
                    <p
                      key={cat}
                      onClick={() =>
                        setActiveCategory((prev) => (prev === cat ? null : cat))
                      }
                      className={`px-4 md:px-5 py-2 border border-gray-300 rounded-3xl cursor-pointer w-fit 
                      ${activeCategory === cat
                          ? "bg-white text-black font-semibold"
                          : "hover:text-blue-500"
                        }`}
                    >
                      {cat}
                    </p>
                  ))}
                </div>


                {activeCategory && (
                  <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
                    <div
                      key={activeCategory}   // 👈 this forces re-render on category change
                      className="bg-white w-full max-w-lg rounded-lg shadow-lg relative p-6"
                    >
                      <button
                        onClick={() => setActiveCategory(null)}
                        className="absolute top-3 right-3 text-gray-600 hover:text-black cursor-pointer"
                      >
                        <X size={28} />
                      </button>

                      <h3 className="text-xl font-semibold text-center text-black mb-4">
                        {activeCategory} Form
                      </h3>

                      <form className="flex flex-col gap-3">
                        <input
                          type="text"
                          placeholder="Your Name*"
                          className="border border-gray-500 text-gray-600 rounded-md px-3 py-2 focus:outline-none text-sm w-full"
                        />
                        <input
                          type="text"
                          placeholder="Your Business name/ website"
                          className="border border-gray-500 text-gray-600 rounded-md px-3 py-2 focus:outline-none text-sm w-full"
                        />
                        <input
                          type="email"
                          placeholder="Your Email*"
                          className="border border-gray-500 text-gray-600 rounded-md px-3 py-2 focus:outline-none text-sm w-full"
                        />
                        <input
                          type="number"
                          placeholder="Enter Your Phone*"
                          className="border border-gray-500 text-gray-600 rounded-md px-3 py-2 focus:outline-none text-sm w-full"
                        />

                        <select className="border rounded-md text-gray-600 px-3 py-2 focus:outline-none text-sm w-full">
                          <option>what is your Primary market goal</option>
                          <option>Generate Lead / Quote request</option>
                          <option>Drive Online sales</option>
                          <option>Increase Phone calls</option>
                          <option>Get Location Visit</option>
                          <option>Increase Brand Awareness</option>
                        </select>

                        <select className="border rounded-md text-gray-600 px-3 py-2 focus:outline-none text-sm w-full">
                          <option>What is your Target Location</option>
                          <option>Serve customer nationwide</option>
                          <option>Serve only [city/state]</option>
                          <option>Specific radius around my business</option>

                        </select>


                        <select className="border rounded-md text-gray-600 px-3 py-2 focus:outline-none text-sm w-full">
                          <option>Your Monthly Advertising Budget*</option>
                          <option>$500</option>
                          <option>$500-$1000</option>
                          <option>$1000-$2000</option>
                          <option>$2000-$3000</option>
                          <option>$3000-$4000</option>
                          <option>$4000+</option>

                        </select>

                        <select className="border rounded-md text-gray-600 px-3 py-2 focus:outline-none text-sm w-full">
                          <option>What is your Timeline starting {activeCategory}</option>
                          <option>Immediately</option>
                          <option>Within 1-2 weeks</option>
                          <option>Within 9 months</option>
                          <option>Just researching</option>

                        </select>
                        

                        <button
                          type="submit"
                          className="bg-blue-900 text-white cursor-pointer font-semibold rounded-md py-2 transition hover:bg-amber-500"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                )}

                <hr className="mt-6 border-gray-600" />
              </div>
        
        
        
        </>
    )
}

export default Google
