import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
function Info() {
    return (
        <>
            <div className="bg-[#0b0f28] text-white">
                <div className="max-w-[1250px] mx-auto px-6 py-12 
                                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* About */}
                    <div>
                        <h2 className="underline py-2 text-[20px] font-medium">About</h2>
                        <p>
                            Cybetiq is a forward-thinking IT company specializing in web 
                            development, software design, and digital marketing. Our expert 
                            team creates customized solutions to help businesses thrive and 
                            enhance their online presence.
                        </p>
                        <div className=' flex gap-6 py-4'>
                            <FaInstagram size={25} />
                        <FaFacebook size={25}/>
                        <FaWhatsapp size={25}/>
                        <FaLinkedin size={25}/>
                        </div>
                        
                    </div>

                    {/* Services */}
                    <div>
                        <h2 className="underline py-2 text-[20px] font-medium">Our Services</h2>
                        <div className="space-y-2">
                            <div><a href="">Web Development</a></div>
                            <div><a href="">Mobile App Development</a></div>
                            <div><a href="">Dedicated Resources</a></div>
                            <div><a href="">WordPress Development</a></div>
                            <div><a href="">Digital Marketing</a></div>
                            <div> <a href="">SEO Service</a></div>  
                           
                        </div>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h2 className="underline py-2 text-[20px] font-medium">Get In Touch</h2>
                        <p className="py-1 font-semibold">Location</p>
                        <p className="py-1">
                            Australia Based. Results Driven.
                        </p>
                        <p className="py-1 font-semibold">Contact</p>
                        <p className="py-1">Phone: +61 426 443 970</p>
                        <p className="py-1">Mail Us: info@jim-digital.com</p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h2 className="underline py-2 text-[20px] font-medium">Useful Links</h2>
                        <div className="space-y-2">
                            <div><a href="">Company</a></div>
                            <div><a href="">Portfolio</a></div>
                            <div><a href="">Dedicated Resources</a></div>
                            <div><a href="">Blog</a></div>
                            <div><a href="">Career</a></div>
                            <div><a href="">Contact Us</a></div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info
