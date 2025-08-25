import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function FormPage() {
  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  const { category } = useParams();

  const [step, setStep] = useState(0);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  // Service categories
  const categories = [
    "WordPress Development",
    "Shopify Development",
    "PHP Development",
    "Web Hosting",
    "WebFlow Development",
    ".net",
    "java",
    "Not Sure",
  ];

  // Feature options
  const features = [
    "User Login / Registration",
    "Content Management System (CMS)",
    "E-commerce / Shopping Cart",
    "Payment Gateway Integration",
    "Booking / scheduling system",
    "Membership Level",
    "Message Board",
    "API Integration",
    "Multi-language support",
    "Blog",
    "Advance animation",
    "Database Setup",
    "Customer Dashboard",
    "Admin Backend"
  ];

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleFeature = (feat) => {
    setSelectedFeatures((prev) =>
      prev.includes(feat) ? prev.filter((f) => f !== feat) : [...prev, feat]
    );
  };

  const confirmCategories = () => {
    if (selectedCategories.length > 0) setStep(3);
  };

  const confirmUrl = () => {
    if (websiteUrl.trim()) setStep(3);
  };

  const resetAll = () => {
    setStep(0);
    setWebsiteUrl("");
    setSelectedCategories([]);
    setSelectedFeatures([]);
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

          {/* Step Section */}
          <div className="bg-gray-50 rounded-lg p-6 border">
            {/* STEP 0: Ask website existence */}
            {step === 0 && (
              <>
                <h3 className="text-lg font-semibold text-center mb-4">
                  Do you have an existing website?
                </h3>
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
                  >
                    No
                  </button>
                </div>
              </>
            )}

            {/* STEP 1: Website URL */}
            {step === 1 && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Enter your website URL:
                </label>
                <input
                  type="url"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="mt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="px-4 py-2 rounded-lg border hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={confirmUrl}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Select Services */}
            {step === 2 && (
              <div>
                <p className="mb-3 text-gray-700 font-medium">
                  Select the services you need:
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => toggleCategory(cat)}
                      className={`px-4 py-2 rounded-3xl border transition ${
                        selectedCategories.includes(cat)
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="px-4 py-2 rounded-lg border hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={confirmCategories}
                    disabled={selectedCategories.length === 0}
                    className={`px-6 py-2 rounded-lg ${
                      selectedCategories.length === 0
                        ? "bg-gray-300 text-white cursor-not-allowed"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
                  >
                    Confirm Selection
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Summary */}
            {step === 3 && (
              <div>
                {websiteUrl ? (
                  <>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Website Provided
                    </h3>
                    <p className="text-gray-700 break-all">{websiteUrl}</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      You selected services:
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedCategories.map((cat) => (
                        <span
                          key={cat}
                          className="px-4 py-2 rounded-3xl bg-blue-600 text-white text-sm"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                <button
                  type="button"
                  onClick={resetAll}
                  className="mt-6 px-4 py-2 rounded-lg border hover:bg-gray-50"
                >
                  Start Over
                </button>
              </div>
            )}
          </div>
 <select className="border rounded-md text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Do you Require any Third party integraton</option>
            <option>Yes</option>
            <option>No</option> 
          </select>
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

          
          <select className="border rounded-md text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>What are your hosting and maintenanc preference?</option>
            <option>I need you to handle hosting and maintenance</option>
            <option>I will handle hosting myself</option>
            <option>Not Sure..</option>
          </select>

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
            <option>Who will be Providing the final content(text,image,videos) for the website</option>
            <option>We have all content ready</option>
            <option>We will create the content</option>
            <option>We need to content creation service</option>
            <option>A mix of ready and to be created</option>
          </select>

           <select className="border rounded-md text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Do you have a brand style guide,logo and preferred aolor fonts?</option>
            <option>Yes</option>
            <option>No</option>
            
          </select>

         
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

export default FormPage;
