import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Custom() {
     const [activeCategoryCustom, setActiveCategoryCustom] = useState(null);
      const navigate = useNavigate();
    return (
        <>
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
                  ].map((cat5) => (
                    <p
                      key={cat5}
                      onClick={() => navigate(`/custom/${encodeURIComponent(cat5)}`)}
                      className={`px-4 md:px-5 py-2 border border-gray-300 rounded-3xl cursor-pointer w-fit 
                      ${activeCategoryCustom === cat5
                          ? "bg-white text-black font-semibold"
                          : "hover:text-blue-500"
                        }`}
                    >
                      {cat5}
                    </p>
                  ))}
                </div>


                




              </div>
        
        </>
    )
}

export default Custom
