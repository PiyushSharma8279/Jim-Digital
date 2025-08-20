import React, { useState } from "react";
import { X } from 'lucide-react';

function Details() {
  const [activeCategory, setActiveCategory] = useState(null);
  

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row w-full bg-gray-50 max-w-[1250px]">
          <div className="w-full lg:w-1/2">
            <div className="p-6 md:p-10">
              <h2 className="text-2xl md:text-[30px] py-2 font-semibold">
                A full-service digital marketing agency and web production company
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                CCM is a full-service digital marketing agency that can run
                multi-channel campaigns to reach your audience at every touch
                point. However, if you are only looking for a single-channel
                campaign, we can help you achieve your goals. If you need
                direction, we can help you develop a digital strategy that grows
                your business.
              </p>
              <button className="border border-red-400 text-red-400 px-4 py-2 rounded-2xl mt-2 hover:bg-orange-400 hover:text-white font-medium">
                Buy Discovery
              </button>
            </div>
          </div>


          <div className="w-full lg:w-1/2 mb-10 lg:mb-20">
            <div className="bg-black py-8 md:py-10">
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
                  <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-full max-w-lg rounded-lg shadow-lg relative p-6">


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
                          <option>What is your Timeline starting Google Ads</option>
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



              <div className="p-6 md:p-10 text-white">
                <h2 className="text-green-500 pt-2 text-2xl md:text-[30px] font-semibold">
                  Social Media Advertising
                </h2>
                <p className="text-sm md:text-lg">
                  Boost reach and drive results with paid social campaigns
                </p>
                <div className="flex flex-wrap gap-3 md:gap-6 py-4 md:py-6">
                  {[
                    "Facebook",
                    "Instagram"
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
                  <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-full max-w-lg rounded-lg shadow-lg relative p-6">


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
                          <option>what is your social media market goal</option>
                          <option>Increase brand awareness</option>
                          <option>Generate leads</option>
                          <option>Drive website traffic</option>
                          <option>Boost Engagement</option>
                          <option>Increase online sale</option>
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
                          <option>What is your Timeline starting Google Ads</option>
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

                <hr className="border-gray-600" />
              </div>


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
                  <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-full max-w-lg rounded-lg shadow-lg relative p-6">


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
                          <option>What is your Timeline starting Google Ads</option>
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
                
                <hr className="border-gray-600" />
              </div>

              <div className=' px-6 md:px-10 text-white py-6'>
                <h2 className='text-green-500 pt-2 text-2xl md:text-[30px] font-semibold'>Web Design</h2>
                <p className=' text-sm md:text-lg'>Designs that captivate, websites that convert</p>

                <div className="flex flex-wrap gap-3 md:gap-6 py-4 md:py-6">
                  {[
                    "Custom Web Design",
                    "Ecommerce Web Design",
                    "Ux Design",
                    "Landing Page Design",
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
                  <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-full max-w-lg rounded-lg shadow-lg relative p-6">


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
                          <option>What is your Timeline starting Google Ads</option>
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


                <hr />


              </div>
              <div className='px-6 md:px-10 text-white'>
                <h2 className=' text-green-500 pt-2 text-2xl md:text-[30px] font-semibold'>Web Development</h2>
                <p className=' text-sm md:text-lg'>Building robust websites for your digital success</p>
                   <div className="flex flex-wrap gap-3 md:gap-6 py-4 md:py-6">
                  {[
                    "WordPress Development",
                    "WooCommerce Development",
                    "Shopify Development",
                    "PHP Development",
                    "WebFlow Development",
                    "Web Hosting",
                    "Security & Maintainance"
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
                  <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-full max-w-lg rounded-lg shadow-lg relative p-6">


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
                          <option>What is your Timeline starting Google Ads</option>
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


                <hr />


              </div>
              <div className=' px-6 md:px-10 text-white py-6'>
                <h2 className=' text-green-500 pt-2 text-2xl md:text-[30px] font-semibold'>Custom Solutions</h2>
                <p className=' text-sm md:text-lg'>Innovative solutions, maximum efficiency</p>

                 <div className="flex flex-wrap gap-3 md:gap-6 py-4 md:py-6">
                  {[
                    "Custom Software Development",
                    "Custom CRM System",
                    "Custom Booking System",
                    "Custom Headless CMS",
                    "Location Plus",
                    "AI Consulting Services",
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
                  <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-full max-w-lg rounded-lg shadow-lg relative p-6">


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
                          <option>What is your Timeline starting Google Ads</option>
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




              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
