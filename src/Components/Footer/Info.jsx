import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Info() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#0b0f28] text-white">
      <div className="max-w-[1250px] mx-auto px-6 py-12 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="underline decoration-2 underline-offset-8 mb-4 text-[20px] font-medium">About</h2>
          <p className="leading-relaxed">
            Jim-digital is a forward-thinking IT company specializing in web
            development, software design, and digital marketing. Our expert
            team creates customized solutions to help businesses thrive and
            enhance their online presence.
          </p>
          <div className="flex gap-6 py-4">
            <FaInstagram size={22} className="cursor-pointer hover:text-amber-400 transition" />
            <FaFacebook size={22} className="cursor-pointer hover:text-amber-400 transition" />
            <FaWhatsapp size={22} className="cursor-pointer hover:text-amber-400 transition" />
            <FaLinkedin size={22} className="cursor-pointer hover:text-amber-400 transition" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="underline decoration-2 underline-offset-8 mb-4 text-[20px] font-medium">Our Services</h2>
          <div className="space-y-2 flex flex-col">
            <span onClick={() => navigate("/website-dev")} className="cursor-pointer hover:text-amber-400 transition">Web Development</span>
            <span onClick={() => navigate("/mobile-dev")} className="cursor-pointer hover:text-amber-400 transition">Mobile App Development</span>
            <span onClick={() => navigate("/software-dev")} className="cursor-pointer hover:text-amber-400 transition">Software Development</span>
            <span onClick={() => navigate("/wordpress-dev")} className="cursor-pointer hover:text-amber-400 transition">WordPress Development</span>
            <span onClick={() => navigate("/digital-dev")} className="cursor-pointer hover:text-amber-400 transition">Digital Marketing</span>
            <span onClick={() => navigate("/seo-dev")} className="cursor-pointer hover:text-amber-400 transition">SEO Service</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="underline decoration-2 underline-offset-8 mb-4 text-[20px] font-medium">Get In Touch</h2>
          <p className="font-semibold">Location</p>
          <p className="mb-3">Australia Based. Results Driven.</p>
          <p className="font-semibold">Contact</p>
          <p>Phone: +61 426 443 970</p>
          <p>Mail Us: info@jim-digital.com</p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="underline decoration-2 underline-offset-8 mb-4 text-[20px] font-medium">Useful Links</h2>
          <div className="space-y-2 flex flex-col">
            <a onClick={()=> navigate('/about')} className="hover:text-amber-400 transition cursor-pointer">Company</a>
            <a onClick={()=> navigate('/portfolio')} className="hover:text-amber-400 transition cursor-pointer">Portfolio</a>
            <a href="#" className="hover:text-amber-400 transition cursor-pointer">Dedicated Resources</a>
            <a href="#" className="hover:text-amber-400 transition cursor-pointer">Blog</a>
            <a href="#" className="hover:text-amber-400 transition cursor-pointer">Career</a>
            <a onClick={()=> navigate('/contact')} className="hover:text-amber-400 transition cursor-pointer">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Info
