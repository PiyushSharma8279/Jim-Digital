import React from "react";
import { useParams } from "react-router-dom";
import bluesaphire from "../../../assets/bluesaphire.png";
import enjoy from "../../../assets/enjoyelpha.webp";
import panther from "../../../assets/pather.webp";
import backup from "../../../assets/backup.webp";
import zomento from "../../../assets/zomento.webp";
import dazzle from "../../../assets/dazzle.webp";
import Header from "../../Header/Header";
import Info from "../../Footer/Info";
import landscape from "../../../assets/landscape.webp";
import vcat from "../../../assets/vcat.webp";
import precious from "../../../assets/precious.webp";
import network from "../../../assets/network.webp";
import halfKick from "../../../assets/halfKick.webp";
import powerq from "../../../assets/powerq.png";
import vbr from "../../../assets/vbr.png";
import sydneyHome from "../../../assets/sydneyHome.png"
import buckitos from "../../../assets/buckitos.png"
import useSEO from "../../../hooks/useSeo";


// Data grouped by categories
const categoriesData = {
  
  wordpress: [
    { img: enjoy, title: "Enjoy Alpha", desc: "U.S based Adult Product Company" },
    { img: panther, title: "Panther", desc: "U.S. based Import Export Company" },
    { img: landscape, title: "LandScape", desc: "U.S. based  Company" },
    { img: vcat, title: "VCat", desc: "U.S. based Import Export Company" },
    { img: precious, title: "Precious", desc: "U.S. based  Company" },
    { img: network, title: "Network", desc: "U.S. based  Company" },
    
  ],
  shopify: [
    { img: zomento, title: "Zomento", desc: "Australian based E-Commerce company" },
    { img: dazzle, title: "Dazzle", desc: "Australia based Beauty Product Company" },
    { img: halfKick, title: "HalfKick", desc: "Australia based  Company" },
    { img: sydneyHome, title: "Syndney Home", desc: "Australia based  Company" },


  ],
  laravel: [
    { img: bluesaphire, title: "Blue Saphire", desc: "Australia based Real Estate Company" },
    { img: backup, title: "Backup", desc: "Australian Based Staffing company" },
    { img: powerq, title: "Power Q", desc: "Australian Based Staffing company" },
    { img: vbr, title: "VBR", desc: "Indian Based E=Commerce company" },
    { img: buckitos, title: "Buckitos", desc: "Indian Based  company" },

  ],
};

function InnerCategories() {
  const { category } = useParams(); // dynamic param from URL
  const items = categoriesData[category] || [];
       useSEO({
      title: `Our ${category} Development Portfolio | Jim Digital`,
      description:
        `Look Our ${category} Development Portfolio – Jim Digital`,
      url: `https://www.jim-digital.com/portfolio/${category}`,
    });

  return (
    <>
      <Header />

      <div className="p-6 pt-24">
        {/* Heading Section */}
        <h1 className="text-xl md:text-2xl font-bold mb-10 text-center capitalize">
          <span className="bg-[#0b0f28] text-white px-6 py-2 rounded-xl shadow-lg">
            {category} Development
          </span>
        </h1>

        {/* Items */}
        {items.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">No projects found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-2xl overflow-hidden text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover transition duration-300 hover:brightness-90"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mt-2 text-gray-800">{item.title}</h2>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Info />
    </>
  );
}

export default InnerCategories;
