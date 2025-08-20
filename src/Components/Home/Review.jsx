import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

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
              
              <p className="text-sm mt-2">If you are only looking for a single-channel
                campaign, we can help you achieve your goals. If you need
                direction, we can help you develop a digital strategy that grows
                your business.</p>
                <h2 className="text-xl font-bold">Rahul Sharma</h2>
                <div className=" flex justify-center mt-2">
                <div className="flex gap-1">
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Box 2 */}
          <SwiperSlide>
            <div className="border border-gray-300  p-6 rounded-xl text-center">
              
              <p className="text-sm mt-2">If you are only looking for a single-channel
                campaign, we can help you achieve your goals. If you need
                direction, we can help you develop a digital strategy that grows
                your business.</p>
                <h2 className="text-xl font-bold">Sunny sharma</h2>
              <div className=" flex justify-center mt-2">
                <div className="flex gap-1">
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Box 3 */}
          <SwiperSlide>
            <div className=" border border-gray-300 p-6 rounded-xl  text-center">
              <p className="text-sm mt-2">If you are only looking for a single-channel
                campaign, we can help you achieve your goals. If you need
                direction, we can help you develop a digital strategy that grows
                your business.</p>
                <h2 className="text-xl font-bold">Abhinav</h2>
                <div className=" flex justify-center mt-2">
                <div className="flex gap-1">
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Box 4 */}
          <SwiperSlide>
            <div className=" border border-gray-300 p-6 rounded-xl  text-center">
             
              <p className="text-sm mt-2">If you are only looking for a single-channel
                campaign, we can help you achieve your goals. If you need
                direction, we can help you develop a digital strategy that grows
                your business.</p>
                 <h2 className="text-xl font-bold">Deepak</h2>
                <div className=" flex justify-center mt-2">
                <div className="flex gap-1">
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Box 5 */}
          <SwiperSlide>
            <div className=" border border-gray-300 p-6 rounded-xl  text-center">
              
              <p className="text-sm mt-2">If you are only looking for a single-channel
                campaign, we can help you achieve your goals. If you need
                direction, we can help you develop a digital strategy that grows
                your business.</p>
                <h2 className="text-xl font-bold">Sam</h2>
                <div className=" flex justify-center mt-2">
                <div className="flex gap-1">
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        
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

      <div className=" text-center text-xl lg:text-3xl font-medium py-6 bg-gray-200">
        Still have questions? Call <span className=" font-bold text-blue-900 cursor-pointer">+61 426 443 970</span> for answers
      </div>

    </>
  );
}

export default AutoSlider;
