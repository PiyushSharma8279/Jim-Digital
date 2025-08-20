import React from 'react'
import bgfooter from "../../assets/bg-footer.jpg"
import Info from './Info'

function Footer() {
    return (
        <>
            

            <div className="text-center my-10 px-4">
                <h2 className="text-[24px] md:text-[32px] font-semibold">
                    Turning Ideas into Success Stories.
                </h2>
                <p className="text-[15px] font-medium mt-2">
                    At Jim-Digital, we don’t just build websites and software—we engineer
                    digital solutions tailored to your business goals. Whether you need a
                    powerful web platform, a
                </p>
                <p className="text-[15px] font-medium">
                    mobile app, or an automated business system, our in-house team delivers
                    scalable, secure, and future-ready technology.
                </p>
            </div>

            <section
                className="relative w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${bgfooter})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-white w-full flex justify-center">
                    <div className="max-w-[1250px] w-full px-6 lg:px-10 flex justify-between items-center py-10 flex-col md:flex-row gap-8">

                        {/* Left Content */}
                        <div className="md:w-1/2 w-full text-center md:text-left">
                            <h2 className="text-[28px] md:text-[40px] font-bold mb-4">
                                Ready to Scale Smarter?
                            </h2>
                            <p className="text-[16px] md:text-[20px] font-medium">
                                Let’s build your next digital success story together.
                            </p>
                        </div>

                        {/* Form */}
                        <div className="w-full md:w-1/2">
                            <form className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col gap-3">
                                <p className="text-lg font-semibold">Download Our Plans</p>

                                <input
                                    type="text"
                                    placeholder="Your Name*"
                                    className="border rounded-md px-3 py-2 focus:outline-none text-[14px] w-full"
                                />
                                <input
                                    type="email"
                                    placeholder="Enter Your Email*"
                                    className="border rounded-md px-3 py-2 focus:outline-none text-[14px] w-full"
                                />
                                <input
                                    type="number"
                                    placeholder="Enter Your Phone*"
                                    className="border rounded-md px-3 py-2 focus:outline-none text-[14px] w-full"
                                />

                                <select className="border rounded-md px-3 py-2 focus:outline-none text-gray-500 text-[14px] w-full">
                                    <option>Project Type</option>
                                    <option>Website Design</option>
                                    <option>E-commerce Store</option>
                                    <option>SEO Digital Marketing</option>
                                    <option>Social Media Management</option>
                                    <option>PPC Advertising</option>
                                    <option>Content Marketing</option>
                                    <option>Logo Branding</option>
                                    <option>Others</option>
                                </select>

                                <textarea
                                    placeholder="Product Details"
                                    className="border rounded-md focus:outline-none px-2 py-2 text-[14px] min-h-[120px] w-full"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="bg-blue-900 cursor-pointer text-white font-semibold rounded-md py-2 transition hover:bg-amber-500"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Info/>

          
        </>
    )
}

export default Footer
