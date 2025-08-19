import React from 'react'
import market from "../../assets/market.jpg"

function Marketting() {
    return (
        <>
            <div className='h-21'></div>
            <div>
                <div className=' text-center mb-2'>
                    <h2 className=' text-[32px] px-5'>Turning Ideas into Success Stories.</h2>
                    <p className='  text-[15px] font-medium px-5'>
                        At Jim-Digital, we do not just build websites and software—we engineer
                        digital solutions tailored to your business goals. Whether you need a
                        powerful web platform, a
                    </p>
                    <p className=' font-medium text-[15px] px-5'>
                        mobile app, or an automated business system, our in-house team delivers
                        scalable, secure, and future-ready technology.
                    </p>
                </div>

                
                <section
                    className="relative w-full bg-cover bg-center flex items-center mb-2"
                    style={{ backgroundImage: `url(${market})` }}
                >
                    <div className="absolute inset-0"></div>

                    
                    <div className="relative z-10 text-white w-full flex justify-center">
                        <div className="max-w-[1250px] w-full px-6 lg:px-10 flex justify-between items-center py-10 max-md:flex-col max-md:gap-6">

                            
                            <div className="w-1/2 max-md:w-full">
                                <h2 className="text-[32px] md:text-[54px] font-bold mb-4">
                                    Marketing That Delivers Traffic, Leads, and Growth
                                </h2>
                                <p className="text-[16px] md:text-[24px] font-medium mb-2 hidden lg:block">
                                    Jim-Digital is more than a marketing agency—we’re your digital
                                    growth partner. We design integrated marketing strategies that
                                    drive brand awareness, generate leads, and increase sales using
                                    proven data-driven techniques.
                                </p>
                            </div>

                            
                            <div className="max-md:w-full">
                                <form className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col gap-3 mx-auto">
                                    <p className="text-lg font-normal">Do you have a project in mind?</p>

                                    
                                    <div className="flex gap-2 py-1 max-md:flex-col">
                                        <input
                                            type="text"
                                            placeholder="Your Name*"
                                            className="border rounded-md px-3 py-2 focus:outline-none text-[14px] w-full md:w-1/2"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Company Name*"
                                            className="border rounded-md px-3 py-2 focus:outline-none text-[14px] w-full md:w-1/2"
                                        />
                                    </div>

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

                                 
                                    <div className="flex gap-2 w-full max-md:flex-col">
                                        <div className="w-1/2 max-md:w-full">
                                            <p className="py-2 text-[15px] font-medium">Budget</p>
                                            <select className="border rounded-md px-3 py-2 text-gray-500 w-full text-[14px]">
                                                <option>Under $1000</option>
                                                <option>1000-3000</option>
                                                <option>3000-5000</option>
                                                <option>5000-10000</option>
                                                <option>$10000+</option>
                                            </select>
                                        </div>
                                        <div className="w-1/2 max-md:w-full">
                                            <p className="py-2 text-[15px] font-medium">Desired Launch Date</p>
                                            <input
                                                type="date"
                                                className="border rounded-md px-3 py-2 focus:outline-none w-full text-gray-500 text-[14px]"
                                            />
                                        </div>
                                    </div>

                                    <textarea
                                        placeholder="Product Details"
                                        className="border rounded-md focus:outline-none px-2 py-2 text-[14px] min-h-[120px] w-full"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="bg-blue-900 text-white font-semibold rounded-md py-2 transition hover:bg-blue-800"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Marketting
