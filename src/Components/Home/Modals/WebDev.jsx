import React, { useState } from "react";
import { X } from 'lucide-react';


function WebDev() {
   const [activeCategoryDev, setActiveCategory] = useState(null);

  const categories = [
    "WordPress Development",
    "WooCommerce Development",
    "Shopify Development",
    "PHP Development",
    "WebFlow Development",
    "Web Hosting",
    "Security & Maintainance",
  ];

  return (
    <div className="px-6 md:px-10 text-white">
      <h2 className="text-green-500 pt-2 text-2xl md:text-[30px] font-semibold">
        Web Development
      </h2>
      <p className="text-sm md:text-lg">
        Building robust websites for your digital success
      </p>

      <div className="flex flex-wrap gap-3 md:gap-6 py-4 md:py-6">
        {categories.map((cat4) => (
          <p
            key={cat4}
            onClick={() =>
                        setActiveCategory((prev) => (prev === cat4 ? null : cat4))
                      }
            className={`px-4 md:px-5 py-2 border border-gray-300 rounded-3xl cursor-pointer w-fit 
              ${activeCategoryDev === cat4
                ? "bg-white text-black font-semibold"
                : "hover:text-blue-500"
              }`}
          >
            {cat4}
          </p>
        ))}
      </div>

     {activeCategoryDev && (
  <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
    <div
      key={activeCategoryDev}
      className="bg-white w-full max-w-lg rounded-lg shadow-lg relative p-6"
    >
      <button
        onClick={() => setActiveCategory(null)}
        className="absolute top-3 right-3 text-gray-600 hover:text-black cursor-pointer"
      >
        <X size={28} />
      </button>

      <h3 className="text-xl font-semibold text-center text-black mb-4">
        {activeCategoryDev} Form
      </h3>

      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted!");
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Your Email*"
          required
          className="border border-gray-500 text-gray-600 rounded-md px-3 py-2 focus:outline-none text-sm w-full"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone*"
          required
          className="border border-gray-500 text-gray-600 rounded-md px-3 py-2 focus:outline-none text-sm w-full"
        />
        <input
          type="text"
          name="website"
          placeholder="Your Business Website"
          className="border border-gray-500 text-gray-600 rounded-md px-3 py-2 focus:outline-none text-sm w-full"
        />
        <label className="text-gray-700 text-sm font-medium">
          Which type of website do you want? (Or provide some refrence website)
        </label>
        <input
          type="text"
          name="websiteType"
          className="border border-gray-500 text-gray-600 rounded-md px-3 py-2 focus:outline-none text-sm w-full"
        />

        <select
          name="budget"
          required
          className="border rounded-md text-gray-600 px-3 py-2 focus:outline-none text-sm w-full"
        >
          <option value="">Your Monthly Advertising Budget*</option>
          <option>$500</option>
          <option>$500-$1000</option>
          <option>$1000-$2000</option>
          <option>$2000-$3000</option>
          <option>$3000-$4000</option>
          <option>$4000+</option>
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
  );
}

export default WebDev;
