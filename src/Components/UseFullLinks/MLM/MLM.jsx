import React, { useEffect } from 'react';
import Header from '../../Header/Header';
import Info from '../../Footer/Info';
import mlm from '../../../assets/mlm.jpg'

function MLM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/mlm_new.png",
      label: "User Management",
    },
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/mlm_2.png",
      label: "Dashboard Pontrol Pannel",
    },
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/mlm_3.png",
      label: "MPIN Management",
    },
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/mlm_4.png",
      label: "Withdraw Requests",
    },
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/mlm_5.png",
      label: "Money Transfer",
    },
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/mlm_6.png",
      label: "Withdraw Report Management",
    },
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/mlm_7.png",
      label: "View Vallet",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="text-white bg-[#0b0f28] text-center py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
            Best MLM Software Development Services Company in India
          </h1>
          <p className="flex items-center justify-center gap-2 text-sm mt-4">
            <span className="text-blue-500 cursor-pointer hover:underline">Home</span>
            <span>|</span>
            <span>MLM</span>
          </p>
        </div>
      </main>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
           Multi Level Marketing
          </h2>
          <p className="text-gray-700 leading-relaxed">
           VR consulting provide fully integrated MLM software’s for your business. MLM is refers to 
           a sales strategy that different companies uses to sell their product or service to customer. 
           Here members at all level benefited by joining MLM business and good way to promote business 
           in market. We build smart multilevel marketing (MLM) software that suit to your requirement.
            Our MLM has verity of plans like Binary Plan, Matrix Plan and Board Plan etc. 
            All our software’s are made with utmost care by paying detail attention to is 
            user-friendliness interface, and easy-to-comprehend structure 
           that help businesses to achieve sales and revenue goals within time on network marketing.
          </p>
        </div>

        {/* Right Side - Image */}

      
        <div className="md:w-1/2">
          <img
            src={mlm}
            alt="CRM software illustration"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
           Best MLM Software Development Services Company in India
          </h2>
       <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4 hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-4  text-[18px] font-bold px-5 py-2 rounded-lg  ">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>

      <Info />
    </>
  );
}

export default MLM;
