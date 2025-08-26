import React, { useEffect } from "react";
import Header from "../../../Header/Header";
import Info from "../../../Footer/Info";
import scrollreveal from "scrollreveal";
import webdev1 from '../../../../assets/webdev1.jpg'
import webdev2 from '../../../../assets/webdev2.jpg'
import webdev3 from '../../../../assets/webdev3.jpg'

function WebsiteDev() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const scroll = scrollreveal({
            reset: true,
            duration: 1000,
            distance: '60px',
            scale: 0.85,
            reset: false,
        });

        scroll.reveal('.development', { delay: 400, origin: 'left' });
        scroll.reveal('.devText', { delay: 400, origin: 'right' });
        scroll.reveal('.themes', { delay: 400, origin: 'right' });
        scroll.reveal('.themesText', { delay: 400, origin: 'left' });
        scroll.reveal('.webP', { delay: 400, origin: 'left' });
        scroll.reveal('.webPText', { delay: 400, origin: 'right' });
    }, []);

    return (
        <>
            <Header />

            <main className="pt-20">
                <div className="text-white bg-[#0b0f28] text-center py-10 md:py-16 px-4">
                    <p className="text-3xl md:text-5xl font-medium">Web Development</p>
                    <p className="flex items-center justify-center gap-2 text-sm mt-4">
                        <span className="text-blue-500 cursor-pointer">Home</span>
                        <span>|</span>
                        <span>Web Development</span>
                    </p>
                </div>
            </main>

            <div className="text-center py-8 md:py-16 px-6">
                <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
                    Web Development Company in Noida, Delhi | India
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    We at Jim-Digital, proud to offer highly logical and utilizable Web
                    Development Services due to the variety of skills in our team.
                </p>
            </div>

            <div className="text-center px-6">
                <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
                    Jim-Digital is the Best Website Development Company in India
                </h2>
                <p className="text-gray-700 max-w-4xl mx-auto">
                    Talking through the generalised terms, web development holds an
                    association with the development of a website for the internet...
                </p>
            </div>

            {/* Section 1 */}
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row w-[90%] py-10 md:py-20 gap-6 md:gap-10">
                    <div className="w-full md:w-1/2">
                        <img src={webdev1} alt="Web Development" className="development" />
                    </div>
                    <div className="w-full md:w-1/2 px-4 md:px-10 text-left devText">
                        <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
                            Custom Web Development
                        </h2>
                        <p className="text-gray-700">
                            We at Cybetiq also offer custom Website Development Services...
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row-reverse w-[90%] py-10 md:py-20 items-center gap-6 md:gap-10">
                    <div className="w-full md:w-1/2">
                        <img src={webdev2} alt="Best Web Development Company" className="w-full h-auto themes" />
                    </div>
                    <div className="w-full md:w-1/2 px-4 md:px-10 text-left themesText">
                        <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
                            Best Website Development Company in Noida
                        </h2>
                        <p className="text-gray-700">
                            In the challenging world of who to choose, our company being the Best...
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                            <li>Web development, a skill involving production & maintenance.</li>
                            <li>Information architecture – the structural design of info.</li>
                            <li>Mobile responsiveness</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row w-[90%] py-10 md:py-20 items-center gap-6 md:gap-10">
                    <div className="w-full md:w-1/2">
                        <img src={webdev3} alt="Web Development" className="w-full h-auto webP" />
                    </div>
                    <div className="w-full md:w-1/2 px-4 md:px-10 text-left webPText">
                        <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
                            Website Development Process
                        </h2>
                        <p className="text-gray-700">
                            When it comes to custom website development, its process is very
                            important...
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Section */}
            <div className="text-white bg-[#0b0f28] text-center py-10 md:py-16 px-6">
                <p className="text-3xl md:text-5xl font-medium">Why Jim-Digital Solution?</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 py-8 md:py-10">
                    {[
                        {
                            img: "https://cybetiq.com/wp-content/themes/cybetiq-v2/img/ic/web_beautiful.png",
                            title: "Unique Design",
                            desc: "We create websites with modern design patterns...",
                        },
                        {
                            img: "https://cybetiq.com/wp-content/themes/cybetiq-v2/img/ic/web_responsive.png",
                            title: "Effective Framework",
                            desc: "We use frameworks tailored to client requirements.",
                        },
                        {
                            img: "https://cybetiq.com/wp-content/themes/cybetiq-v2/img/ic/web_effective.png",
                            title: "Delivery on Time",
                            desc: "We have delivered more than 100 projects on time.",
                        },
                    ].map((card, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 px-4">
                            <img src={card.img} alt={card.title} className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                            <h2 className="text-lg md:text-xl font-medium">{card.title}</h2>
                            <p className="text-sm text-gray-300">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Industry */}
            <div className="text-center py-8 md:py-16 px-6">
                <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">Industry We Serve</h2>
                <p className="max-w-3xl mx-auto text-gray-700">
                    We have worked across multiple industry verticals...
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-6">
                {[
                    { img: "movie.png", text: "Media Entertainment" },
                    { img: "bags.png", text: "Shopping & Ecommerce" },
                    { img: "debit-card.png", text: "Banking & Finance" },
                    { img: "fruit.png", text: "Food & Drink" },
                    { img: "heartbeat.png", text: "Health & Fitness" },
                    { img: "destination.png", text: "Travel & Tourism" },
                    { img: "books.png", text: "Education & E-Learning" },
                    { img: "football.png", text: "Sports & Recreation" },
                ].map((item, i) => (
                    <div key={i} className="shadow-xl rounded-xl h-36 md:h-40 flex flex-col justify-center items-center bg-white hover:scale-105 transition-transform">
                        <img src={`https://cybetiq.com/wp-content/themes/cybetiq-v2/img/ic/${item.img}`} alt={item.text} className="w-10 md:w-16 mb-2" />
                        <p className="font-medium text-gray-700 text-center text-sm md:text-base">{item.text}</p>
                    </div>
                ))}
            </div>

            {/* Hire Developer */}
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row-reverse w-[90%] py-10 md:py-20 items-center gap-6 md:gap-10">
                    <div className="w-full md:w-1/2">
                        <img src="https://cybetiq.com/wp-content/themes/cybetiq-v2/img/developer.png" alt="Hire Web Developer" className="w-full h-auto" />
                    </div>
                    <div className="w-full md:w-1/2 px-4 md:px-10 text-left">
                        <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
                            Do you want to hire the best website developer for your project?
                        </h2>
                        <p className="text-gray-700">
                            Our website development teams convert your imagination into code...
                        </p>
                        <button className="py-2 px-6 rounded-xl text-white bg-blue-600 mt-4 md:mt-5 hover:bg-blue-700">
                            Contact Now
                        </button>
                    </div>
                </div>
            </div>

            <Info />
        </>
    );
}

export default WebsiteDev;
