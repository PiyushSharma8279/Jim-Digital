import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function WebDesign() {
    const [activeCategoryDesign, setActiveCategoryDesign] = useState(null);
     const navigate = useNavigate();
    return (
        <>
        <div className=' px-6 md:px-10 text-white py-6'>
                <h2 className='text-green-500 pt-2 text-2xl md:text-[30px] font-semibold'>Web Design</h2>
                <p className=' text-sm md:text-lg'>Designs that captivate, websites that convert</p>

                <div className="flex flex-wrap gap-3 md:gap-6 py-4 md:py-6">
                  {[
                    "Custom Web Design",
                    "Ecommerce Web Design",
                    "Ux Design",
                    "Landing Page Design",
                  ].map((cat3) => (
                    <p
                      key={cat3}
                      onClick={() => navigate(`/design/${encodeURIComponent(cat3)}`)}
                      className={`px-4 md:px-5 py-2 border border-gray-300 rounded-3xl cursor-pointer w-fit 
                      ${activeCategoryDesign === cat3
                          ? "bg-white text-black font-semibold"
                          : "hover:text-blue-500"
                        }`}
                    >
                      {cat3}
                    </p>
                  ))}
                </div>

        <hr />


              </div>
        
        </>
    )
}

export default WebDesign
