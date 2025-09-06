import React, { useEffect } from "react";
import Header from "../../Header/Header";
import Info from "../../Footer/Info";
import enjoy from "../../../assets/enjoyelpha.webp";
import panther from "../../../assets/pather.webp";
import vcat from "../../../assets/vcat.webp";
import precious from "../../../assets/precious.webp";
import network from "../../../assets/network.webp";
import landscape from "../../../assets/landscape.webp";
import useSEO from "../../../hooks/useSeo";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Our Blogs | Jim Digital",
    description:
      "Read Our Latest Blogs – Jim Digital",
    url: "https://www.jim-digital.com/our-blog",
  });

  const categoriesData = [
    { img: enjoy, title: "Enjoy Alpha", desc: "U.S based Adult Product Company" },
    { img: panther, title: "Panther", desc: "U.S. based Import Export Company" },
    { img: landscape, title: "LandScape", desc: "U.S. based  Company" },
    { img: vcat, title: "VCat", desc: "U.S. based Import Export Company" },
    { img: precious, title: "Precious", desc: "U.S. based  Company" },
    { img: network, title: "Network", desc: "U.S. based  Company" },
  ];

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <div className="text-white bg-[#0b0f28] text-center py-16 px-4">
          <p className="text-3xl md:text-5xl font-medium">Blog</p>
          <p className="flex items-center justify-center gap-2 text-sm mt-4">
            <span className="text-blue-500 cursor-pointer hover:underline">Home</span>
            <span>|</span>
            <span>Blog</span>
          </p>
        </div>

        {/* Projects Grid */}
        <section className="py-12 px-6 md:px-12">
          {categoriesData.length === 0 ? (
            <p className="text-gray-500 text-center text-lg">
              No projects found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {categoriesData.map((item, idx) => (
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
                    <h2 className="text-xl font-semibold mt-2 text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Info />
    </>
  );
}

export default Blog;
