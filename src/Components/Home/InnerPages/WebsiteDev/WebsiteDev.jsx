import React, { useEffect } from "react";
import Header from "../../../Header/Header";
import Info from "../../../Footer/Info";
import scrollreveal from "scrollreveal";
import softDev from '../../../../assets/softwaredevfooter.png'

import webdev1 from "../../../../assets/webdev1.jpg";
import webdev2 from "../../../../assets/webdev2.jpg";
import webdev3 from "../../../../assets/webdev3.jpg";
import unique from '../../../../assets/unique.png'
import delivery from '../../../../assets/delivery.png'
import customized from '../../../../assets/customized.png'
import useSEO from "../../../../hooks/useSeo";

function WebsiteDev() {
         useSEO({
            title: "Website Development Melbourne | Website Development Near Me | Jim Digital",
            description:
              "Looking for a reliable web development company in Melbourne? We build fast, modern, and user-friendly websites to help your business grow.",
            url:"https://www.jim-digital.com/website-development-company-in-melbourne",
          });


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const sr = scrollreveal({
            duration: 1000,
            distance: "60px",
            scale: 0.85,
            reset: false, // ✅ only once
        });

        sr.reveal(".development", { delay: 400, origin: "left" });
        sr.reveal(".devText", { delay: 400, origin: "right" });
        sr.reveal(".themes", { delay: 400, origin: "right" });
        sr.reveal(".themesText", { delay: 400, origin: "left" });
        sr.reveal(".webP", { delay: 400, origin: "left" });
        sr.reveal(".webPText", { delay: 400, origin: "right" });

        return () => sr.destroy(); // ✅ cleanup
    }, []);

    return (
        <>
            <Header />

            {/* Hero */}
            <main className="pt-20">
                <div className="text-white bg-[#0b0f28] text-center py-10 md:py-16 px-4">
                    <h1 className="text-3xl md:text-5xl font-medium">Web Development</h1>
                    <p className="flex items-center justify-center gap-2 text-sm mt-4">
                        <span className="text-blue-500 cursor-pointer">Home</span>
                        <span>|</span>
                        <span>Web Development</span>
                    </p>
                </div>
            </main>

            {/* Intro */}
            <div className="text-center py-8 md:py-16 px-6">
                <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
                    Web Development Company in Melbourne, Australia
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    Because our team has a wide range of skills, we at Jim-Digital are
                    proud to offer Web Development Services that are very logical and
                    useful.
                </p>
            </div>
            <div className="text-center  px-6">
                <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
                    JimDigital is the Best Website Development Company in Australia
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    In general terms, web development is the process of making a website for the internet...
                </p>
            </div>

            {/* Section 1 */}
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row w-[90%] py-10 md:py-20 gap-6 md:gap-10">
                    <div className="w-full md:w-1/2">
                        <img
                            src={webdev1}
                            alt="Custom Web Development"
                            className="w-full h-auto development"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 md:px-10 text-left devText">
                        <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
                            Custom Web Development
                        </h2>
                        <p className="text-gray-700">
                            Custom web development makes websites and apps from scratch that are one-of-a-kind and fit your needs. It looks at the needs of the business, the experience of the user, and how well it can grow. This process includes strategic planning, custom coding, and thorough testing to make a digital solution that is powerful, safe, and works perfectly.

                        </p>
                    </div>

                </div>
            </div>

            {/* Section 2 */}
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row-reverse w-[90%] py-10 md:py-20 items-center gap-6 md:gap-10">
                    <div className="w-full md:w-1/2">
                        <img
                            src={webdev2}
                            alt="Best Web Development Company"
                            className="w-full h-auto themes"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 md:px-10 text-left themesText">
                        <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
                            Best Website Development Company in Melbourne
                        </h2>
                        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                            <li>Web development, production & maintenance</li>
                            <li>Information architecture</li>
                            <li>Mobile responsiveness</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row w-[90%] py-10 md:py-20 items-center gap-6 md:gap-10">
                    <div className="w-full md:w-1/2">
                        <img
                            src={webdev3}
                            alt="Web Development Process"
                            className="w-full h-auto webP"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 md:px-10 text-left webPText">
                        <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
                            Website Development Process
                        </h2>
                        <p className="text-gray-700">
                            When making a website, you need to plan, design, build, test, and launch it. It starts with setting goals and making sitemaps, then making wireframes and visual designs. After that, developers build the site and test it thoroughly to make sure it works before putting it on a live server for the public to see.

                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose */}
            <div className="text-white bg-[#0b0f28] text-center  md:py-16 px-6">
                <p className="text-3xl md:text-5xl font-medium">
                    Why JimDigital Solution?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 py-8 md:py-10">
                    {[
                        {
                            img: unique,
                            title: "Unique Design",
                        },
                        {
                            img: customized,
                            title: "Customized designed",
                        },
                        {
                            img: delivery,
                            title: "Delivery on Time",
                        },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-4 px-4 hover:scale-105 transition-transform"
                        >
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-20 h-20 md:w-24 md:h-24 object-contain"
                            />
                            <h2 className="text-lg md:text-xl font-medium">{card.title}</h2>
                        </div>
                    ))}
                </div>
            </div>





            {/* Hire Developer */}
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row-reverse w-[90%]  md:py-20 items-center gap-6 md:gap-10">
                    <div className="w-full md:w-1/2">
                        <img
                            src={softDev}
                            alt="Hire Web Developer"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 md:px-10 text-left">
                        <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
                            Do you want to hire the best website developer for your project?
                        </h2>

                        <a
                            href="tel:+61426443970"
                            className="inline-block mt-4 text-white bg-orange-500 py-2 px-4 rounded-xl hover:bg-orange-600 transition font-bold"
                        >
                            Contact now
                        </a>
                    </div>
                </div>
            </div>

            <Info />
        </>
    );
}

export default WebsiteDev;
