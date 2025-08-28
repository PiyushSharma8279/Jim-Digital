import React from 'react'
import { useEffect } from 'react';
import Header from '../../Header/Header'
import Info from '../../Footer/Info'

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <main className="pt-20">
                <div className="text-white bg-[#0b0f28] text-center py-16 px-4">
                    <p className="text-3xl md:text-5xl font-medium">Contact Us</p>
                    <p className="flex items-center justify-center gap-2 text-sm mt-4">
                        <span className="text-blue-500 cursor-pointer">Home</span>
                        <span>|</span>
                        <span>Contact Us</span>
                    </p>
                </div>
            </main>

            <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-8 max-w-5xl mx-auto">

                <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-2xl shadow-md">
                    <h2 className="text-xl font-semibold mb-3">Address</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Melbourne,Australia
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Contact</h2>
                    <p className="text-gray-600">📞 Phone: +61 426 443 970</p>
                    <p className="text-gray-600">✉️ Email: jimdigital93@gmail.com</p>
                </div>


                <div className="w-full  bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <Info />

        </>
    )
}

export default Contact
