import React, { useEffect } from 'react';
import Header from '../../Header/Header';
import Info from '../../Footer/Info';

function CRM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/admin1.png",
      label: "Admin Panel",
    },
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/buttons1.png",
      label: "Button Panel",
    },
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/crms1.png",
      label: "Crms",
    },
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/crms1.png",
      label: "CRMs",
    },
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/email_integration1.png",
      label: "Email integration",
    },
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/email_temp1.png",
      label: "Email template",
    },
    {
      img: "https://www.vrwebconsulting.com/images/portfolio/email_temp1.png",
      label: "Email template",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="text-white bg-[#0b0f28] text-center py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
            CRM Software Development Services Company in India
          </h1>
          <p className="flex items-center justify-center gap-2 text-sm mt-4">
            <span className="text-blue-500 cursor-pointer hover:underline">Home</span>
            <span>|</span>
            <span>CRM</span>
          </p>
        </div>
      </main>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            CRM Software Development Services Company in India
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We develop tailor-made custom CRM for businesses as per client needs. CRM is essential
            for managing customer relationships, with multiple uses depending on business needs.
            <br /><br />
            CRM can also help manage employee relationships, track performance, monitor sales and
            marketing, manage leads and deals, generate reports, quotes, and much more.
            <br /><br />
            It helps businesses save time and cost by automating systems. With CRM, you can manage
            a large amount of information seamlessly and use it hassle-free across departments.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <img
            src="https://www.vrwebconsulting.com/assets/images/about-big.jpg"
            alt="CRM software illustration"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
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
            <button className="mt-4 bg-blue-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-amber-500 transition">
              {item.label}
            </button>
          </div>
        ))}
      </div>
    </div>

      <Info />
    </>
  );
}

export default CRM;
