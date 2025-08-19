import React from 'react';
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-20  bg-white z-50"> 
      <img src={logo} alt="Logo" className="h-20 max-md:h-16" />

      <div className="lg:flex lg:items-center bg-blue-900 text-white font-bold px-4 py-2 rounded-xl hidden">
        <p>Helpline:</p>
        <p className="ml-2">+61 426 443 970</p>
      </div>
    </header>
  );
}

export default Header;



