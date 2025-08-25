import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false); // for mobile submenu

  const categories = [
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Subcategories for "Our Product"
  const productCategories = [
    { name: "CRM", path: "/product/crm" },
    { name: "MLM", path: "/product/mlm" },
    { name: "ERP", path: "/product/erp" },
    { name: "HMS", path: "/product/hms" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="max-w-[1250px] mx-auto flex justify-between items-center px-6 lg:px-20 h-20">
        
        {/* Logo */}
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={logo} alt="Logo" className="h-12 lg:h-16" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8 items-center relative">
          {categories.map((item, index) => (
            <p
              key={index}
              onClick={() => navigate(item.path)}
              className="font-medium text-gray-600 cursor-pointer hover:text-blue-600 transition"
            >
              {item.name}
            </p>
          ))}

          {/* Our Product Dropdown */}
          <div className="relative group">
            <p className="font-medium text-gray-600 cursor-pointer hover:text-blue-600 transition">
              Our Products
            </p>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md w-28">
              {productCategories.map((sub, i) => (
                <p
                  key={i}
                  onClick={() => navigate(sub.path)}
                  className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer"
                >
                  {sub.name}
                </p>
              ))}
            </div>
          </div>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center bg-blue-900 text-white font-bold px-5 py-2 rounded-xl cursor-pointer hover:bg-amber-500 transition">
          Get Started
        </div>

        {/* Mobile Hamburger */}
        <div
          className="lg:hidden cursor-pointer text-2xl text-gray-700"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </div>
      </div>

      {/* Mobile Slider Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0b0f28] text-white p-6 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end">
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Links */}
        <nav className="mt-10 flex flex-col gap-6">
          {categories.map((item, index) => (
            <p
              key={index}
              onClick={() => {
                navigate(item.path);
                setMenuOpen(false);
              }}
              className="text-lg font-medium cursor-pointer hover:text-amber-400 transition"
            >
              {item.name}
            </p>
          ))}

          {/* Our Product with Expand/Collapse */}
          <div>
            <p
              onClick={() => setProductOpen(!productOpen)}
              className="text-lg font-medium cursor-pointer hover:text-amber-400 transition"
            >
              Our Products {productOpen ? "▲" : "▼"}
            </p>
            {productOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                {productCategories.map((sub, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      navigate(sub.path);
                      setMenuOpen(false);
                    }}
                    className="text-base cursor-pointer hover:text-amber-400 transition"
                  >
                    {sub.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* CTA button inside menu */}
        <div
          onClick={() => {
            navigate("/get-started");
            setMenuOpen(false);
          }}
          className="mt-10 bg-blue-900 text-white font-bold px-5 py-2 rounded-xl cursor-pointer hover:bg-amber-500 transition text-center"
        >
          Get Started
        </div>
      </div>
    </header>
  );
}

export default Header;
