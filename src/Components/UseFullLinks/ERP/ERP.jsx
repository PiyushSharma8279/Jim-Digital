import React, { useEffect } from 'react';
import Header from '../../Header/Header';
import Info from '../../Footer/Info';
import erp from '../../../assets/erp.jpg'
import useSEO from '../../../hooks/useSeo';

function ERP() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "ERP Development Melbourne | ERP Development Near Me | Jim Digital",
    description:
      "Get expert ERP development in Melbourne. We build tailored ERP solutions to streamline operations, improve productivity, and drive business growth.",
    url: "https://www.jim-digital.com/erp-software-development-company-in-melbourne",
  });

  const items = [
    {
      img: "https://www.vrwebconsulting.com/assets/images/ser-icon1.png",
      label: "Financial Management",
      text: "Our ERP system provides robust financial management capabilities, including accounts payable and receivable, general ledger, budgeting, and financial reporting. Gain real-time visibility into your organization's financial health, streamline financial processes, and make informed strategic decisions."
    },
    {
      img: "https://www.vrwebconsulting.com/assets/images/ser-icon2.png",
      label: "Supply Chain Management",
      text: "Optimize your supply chain with our ERP solution. From procurement and inventory management to order fulfillment and logistics, our system enables end-to-end supply chain visibility and control. Reduce costs, improve inventory accuracy, and enhance customer satisfaction."
    },
    {
      img: "https://www.vrwebconsulting.com/assets/images/ser-icon3.png",
      label: "Human Resources Management",
      text: "Effectively manage your workforce with our HR module. Our ERP system automates employee data management, payroll processing, benefits administration, and performance tracking. Streamline HR processes, improve employee engagement, and ensure compliance with labor regulations."
    },
    {
      img: "https://www.vrwebconsulting.com/assets/images/ser-icon4.png",
      label: "Customer Relationship Management (CRM)",
      text: "Our integrated CRM module enables you to effectively manage customer interactions, track sales leads, and enhance customer satisfaction. Gain a comprehensive view of customer data, streamline sales processes, and improve customer retention and loyalty."
    },
    {
      img: "https://www.vrwebconsulting.com/assets/images/ser-icon1.png",
      label: "Manufacturing and Production Management",
      text: "Enhance your manufacturing operations with our ERP system. From planning and scheduling to inventory control and shop floor management, our solution optimizes production processes, improves quality control, and reduces production costs."
    },
    {
      img: "https://www.vrwebconsulting.com/assets/images/ser-icon2.png",
      label: "Business Intelligence and Reporting",
      text: "Make data-driven decisions with our powerful business intelligence and reporting tools. Our ERP system provides customizable dashboards, analytics, and reporting capabilities to gain insights into key performance indicators, trends, and opportunities for improvement."
    },
    {
      img: "https://www.vrwebconsulting.com/assets/images/ser-icon3.png",
      label: "Integration and Scalability",
      text : "Our ERP solution seamlessly integrates with existing systems, such as legacy applications and third-party software, ensuring data integrity and reducing redundancy. It is highly scalable, accommodating the evolving needs of your business as it grows."
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="text-white bg-[#0b0f28] text-center py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
           Enterprise resource planning (ERP)
          </h1>
          <p className="flex items-center justify-center gap-2 text-sm mt-4">
            <span className="text-blue-500 cursor-pointer hover:underline">Home</span>
            <span>|</span>
            <span>ERP</span>
          </p>
        </div>
      </main>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Enterprise resource planning (ERP)
          </h2>
          <p className="text-gray-700 leading-relaxed">
          We know how important it is for modern businesses to have an integrated and efficient ERP system. Our all-in-one ERP solution gives businesses the tools they need to make their operations more efficient, boost productivity, and grow in a way that lasts. Our ERP software is flexible and cutting-edge, so it can meet the needs of businesses in any field.
          </p>
        </div>

        {/* Right Side - Image */}

      
        <div className="md:w-1/2">
          <img
            src={erp}
            alt="CRM software illustration"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
           Key Features of Our ERP Solution
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
              className=" object-cover rounded-md"
            />
            <p className="mt-4  text-[18px] font-bold px-5 py-2 rounded-lg  ">
              {item.label}
            </p>
            <p className="mt-4  text-[16px]  px-5 py-2 rounded-lg  ">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>

      <Info />
    </>
  );
}

export default ERP;
