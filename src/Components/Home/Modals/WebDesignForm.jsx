import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function DesignForm() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { category } = useParams();

    
    const [selectedFeatures, setSelectedFeatures] = useState([]);

    // Feature options
    const features = [
        "Blog",
        "Content form",
        "E-commerce / Shopping Cart",
        "Booking / Scheduling system",
        "Membership / Login Area",
        "Photo Gallery",
        "Portfolio",
        "Custom animation",
    ];

   

    const toggleFeature = (feat) => {
        setSelectedFeatures((prev) =>
            prev.includes(feat) ? prev.filter((f) => f !== feat) : [...prev, feat]
        );
    };


   

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
            <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                    {category} Form
                </h2>

                <form className="flex flex-col gap-4">
                    {/* Basic Information */}
                    <input
                        type="text"
                        placeholder="Your Name*"
                        className="border border-gray-400 text-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Your Business name"
                        className="border border-gray-400 text-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email*"
                        className="border border-gray-400 text-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        placeholder="Please Describe your Business and what does?"
                        className="border rounded-md focus:outline-none px-2 py-2 text-[14px] min-h-[120px] w-full"
                    ></textarea>

                    
                   

                    {/* Features Selection */}
                    <div className="bg-gray-50 rounded-lg p-6 border">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            What key features & functionalities are required?
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {features.map((feat) => (
                                <button
                                    key={feat}
                                    type="button"
                                    onClick={() => toggleFeature(feat)}
                                    className={`px-4 py-2 rounded-3xl border transition ${
                                        selectedFeatures.includes(feat)
                                            ? "bg-indigo-600 text-white border-indigo-600"
                                            : "bg-gray-100 hover:bg-gray-200"
                                    }`}
                                >
                                    {feat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Hosting Preference */}
                    <select className="border rounded-md text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>What is the Primary Goal of your new website?</option>
                        <option>General Lead</option>
                        <option>Sell Product</option>
                        <option>Provide information</option>
                        <option>Building a community (membership goal)</option>
                        <option>Showcase a portfolio</option>
                        <option>Other</option>
                    </select>

                    {/* Budget */}
                    <select className="border rounded-md text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Your Monthly Advertising Budget*</option>
                        <option>$500</option>
                        <option>$500-$1000</option>
                        <option>$1000-$2000</option>
                        <option>$2000-$3000</option>
                        <option>$3000-$4000</option>
                        <option>$4000+</option>
                    </select>

                      <select className="border rounded-md text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Who will be providing the final content (text, images, videos)?</option>
                        <option>We have all content ready</option>
                        <option>We will create the content</option>
                        <option>We need content creation service</option>
                        <option>A mix of ready and to be created</option>
                    </select>

                    
                    <select className="border rounded-md text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>What action do you want visitors to take on your site?</option>
                        <option>Contact me</option>
                        <option>Request a quote</option>
                        <option>Buy a product</option>
                        <option>Call me</option>
                        <option>Sign up</option>

                    </select>

                    
                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-gray-700">
                            Do you have a brand guidelines or a preferred color scheme?
                        </p>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="brandGuide" value="yes" className="accent-blue-600" />
                            Yes
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="brandGuide" value="no" className="accent-blue-600" />
                            No
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-900 text-white font-semibold rounded-md py-3 hover:bg-amber-500 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default DesignForm;
