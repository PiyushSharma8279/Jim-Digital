import React from 'react'
import jobboard from "../../assets/job-board.png"

function Categories() {
  return (
    <div className="w-full px-6 lg:px-10 flex justify-center">
      <div className="max-w-[1250px] w-full flex flex-col lg:flex-row justify-between items-center">
        
        {/* Left Image */}
        <div className="w-full lg:w-[40%] mb-6 lg:mb-0">
          <img src={jobboard} alt="Job Board" className="w-full h-auto" />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[40%]">
          <p className="text-center text-[20px] md:text-[24px] font-medium">
            Get inspired by the work of millions of top-rated designers
            & agencies around the world.
          </p>

          {/* Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center font-medium mt-8">
            <div className="p-6 rounded-lg shadow transform transition duration-300 hover:scale-90 bg-white">
              <p>Software</p>
              <p>Development</p>
            </div>
            <div className="p-6 rounded-lg shadow transform transition duration-300 hover:scale-90 bg-white">
              <p>UX</p>
              <p>Design</p>
            </div>
            <div className="p-6 rounded-lg shadow transform transition duration-300 hover:scale-90 bg-white">
              <p>Mobile</p>
              <p>App</p>
            </div>
            <div className="p-6 rounded-lg shadow transform transition duration-300 hover:scale-90 bg-white">
              <p>Web</p>
              <p>Development</p>
            </div>
            <div className="p-6 rounded-lg shadow transform transition duration-300 hover:scale-90 bg-white">
              <p>Video</p>
              <p>Productions</p>
            </div>
            <div className="p-6 rounded-lg shadow transform transition duration-300 hover:scale-90 bg-white">
              <p>Digital</p>
              <p>Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
