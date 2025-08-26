import React, { useState } from "react";
import { X } from 'lucide-react';

function SearchEngine() {
    const [activeCategorySearch, setActiveCategorySearch] = useState(null);
    return (
        <>
        <div className="px-6 md:px-10 text-white">
                <h2 className="text-green-500 pt-2 text-2xl md:text-[30px] font-semibold">
                  Search Engine Optimisation
                </h2>
                <p className="text-sm md:text-lg">
                  Boost your visibility, rank higher, grow faster
                </p>

                <div className="flex flex-wrap gap-3 md:gap-6 py-4 md:py-6">
                  {[
                    "SEO",
                    "Local SEO",
                    "Ecommerce SEO",
                    "Link Building",
                    "Franchise SEO",
                    "GA4 Setup & Audit",
                  ].map((cat2) => (
                    <p
                      key={cat2}
                      onClick={() =>
                        setActiveCategorySearch((prev) => (prev === cat2 ? null : cat2))
                      }
                      className={`px-4 md:px-5 py-2 border border-gray-300 rounded-3xl cursor-pointer w-fit 
                      ${activeCategorySearch === cat2
                          ? "bg-white text-black font-semibold"
                          : "hover:text-blue-500"
                        }`}
                    >
                      {cat2}
                    </p>
                  ))}
                </div>


                {activeCategorySearch && (
                  <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-full max-w-lg rounded-lg shadow-lg relative p-6">


                      <button
                        onClick={() => setActiveCategorySearch(null)}
                        className="absolute top-3 right-3 text-gray-600 hover:text-black cursor-pointer"
                      >
                        <X size={28} />
                      </button>

                      <h3 className="text-xl font-semibold text-center text-black mb-4">
                        {activeCategorySearch} Form
                      </h3>

                      <form className="flex flex-col gap-3">
                       
                        
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
                        <input
                          type="text"
                          placeholder="Your Business website"
                          className="border border-gray-500 text-gray-600 rounded-md px-3 py-2 focus:outline-none text-sm w-full"
                        />

                        <input
                          type="text"
                          placeholder="what is your Target Location?"
                          className="border border-gray-700 text-gray-600 rounded-md px-3 py-2 focus:outline-none text-sm w-full"
                        />
                        <input
                          type="text"
                          placeholder="what is your main Competitor?"
                          className="border border-gray-700 text-gray-600 rounded-md px-3 py-2 focus:outline-none text-sm w-full"
                        />
                        <input
                          type="text"
                          placeholder="How many keywords yo want to work?"
                          className="border border-gray-700 text-gray-600 rounded-md px-3 py-2 focus:outline-none text-sm w-full"
                        />

                      


                       

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

                <hr className="border-gray-600" />
              </div>
        
        </>
    )
}

export default SearchEngine
