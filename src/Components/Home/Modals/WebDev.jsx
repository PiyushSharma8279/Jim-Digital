import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function WebDev() {
  const [activeCategoryDev, setActiveCategoryDev] = useState(null);
  const navigate = useNavigate();

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
            onClick={() => navigate(`/form/${encodeURIComponent(cat4)}`)}
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

      <hr />
    </div>
  );
}

export default WebDev;
