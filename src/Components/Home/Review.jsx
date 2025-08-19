import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function AutoSlider() {
  return (
    <>
    <div className="w-full px-6 md:px-16 py-20">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {/* Box 1 */}
        <SwiperSlide>
          <div className=" border border-gray-300 p-6 rounded-xl  text-center">
            <h2 className="text-xl font-bold">Rahul Sharma</h2>
            <p className="text-sm mt-2">if you are only looking for a single-channel
                campaign, we can help you achieve your goals. If you need
                direction, we can help you develop a digital strategy that grows
                your business.</p>
          </div>
        </SwiperSlide>

        {/* Box 2 */}
        <SwiperSlide>
          <div className="border border-gray-300  p-6 rounded-xl text-center">
            <h2 className="text-xl font-bold">sunny sharma</h2>
            <p className="text-sm mt-2">if you are only looking for a single-channel
                campaign, we can help you achieve your goals. If you need
                direction, we can help you develop a digital strategy that grows
                your business.</p>
          </div>
        </SwiperSlide>

        {/* Box 3 */}
        <SwiperSlide>
          <div className=" border border-gray-300 p-6 rounded-xl  text-center">
            <h2 className="text-xl font-bold">Abhinav</h2>
            <p className="text-sm mt-2">if you are only looking for a single-channel
                campaign, we can help you achieve your goals. If you need
                direction, we can help you develop a digital strategy that grows
                your business.</p>
          </div>
        </SwiperSlide>

        {/* Box 4 */}
        <SwiperSlide>
          <div className=" border border-gray-300 p-6 rounded-xl  text-center">
            <h2 className="text-xl font-bold">Deepak</h2>
            <p className="text-sm mt-2">if you are only looking for a single-channel
                campaign, we can help you achieve your goals. If you need
                direction, we can help you develop a digital strategy that grows
                your business.</p>
          </div>
        </SwiperSlide>

        {/* Box 5 */}
        <SwiperSlide>
          <div className=" border border-gray-300 p-6 rounded-xl  text-center">
            <h2 className="text-xl font-bold">Sam</h2>
            <p className="text-sm mt-2">if you are only looking for a single-channel
                campaign, we can help you achieve your goals. If you need
                direction, we can help you develop a digital strategy that grows
                your business.</p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* 🔲 Custom Pagination Styling */}
     <style>
        {`
          .swiper-pagination {
            bottom: -20px !important; /* ✅ push below slider */
            text-align: center; /* ✅ center align */
          }
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            border-radius: 0; /* square shape */
            background: #999;
            opacity: 1;
            margin: 0 4px;
          }
          .swiper-pagination-bullet-active {
            background: #000;
          }
        `}
      </style>
    </div>

    <div className=" text-center text-4xl font-medium py-6 bg-gray-200">
        Still have questions? Call +61 426 443 970 for answers
    </div>

    </>
  );
}

export default AutoSlider;
