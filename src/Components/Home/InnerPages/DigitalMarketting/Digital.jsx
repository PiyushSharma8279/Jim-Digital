import React, { useEffect } from "react";
import Header from "../../../Header/Header";
import Info from "../../../Footer/Info";
import scrollreveal from "scrollreveal";
import customdigital from "../../../../assets/customdigital.jpg";
import facebookinsta from "../../../../assets/facebookinsta.jpg";
import webdev3 from "../../../../assets/webdev3.jpg";
import softDev from '../../../../assets/softwaredevfooter.png'
import unique from '../../../../assets/unique.png'
import delivery from '../../../../assets/delivery.png'
import customized from '../../../../assets/customized.png'
import useSEO from "../../../../hooks/useSeo";


function Digital() {

   useSEO({
                  title: "Marketing Company in Australia | Digital Marketing Near Me | Jim Digital",
                  description:
                    ":Partner with Australia’s top digital marketing company. We craft strategies to boost visibility, attract customers, and drive sustainable business growth.",
                  url:": https://www.jim-digital.com/digital-marketing-company-in-melbourne",
                });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const scroll = scrollreveal({

      duration: 1000,
      distance: "60px",
      scale: 0.85,
      reset: false,
    });

    scroll.reveal(".development", { delay: 400, origin: "left" });
    scroll.reveal(".devText", { delay: 400, origin: "right" });
    scroll.reveal(".themes", { delay: 400, origin: "right" });
    scroll.reveal(".themesText", { delay: 400, origin: "left" });
    scroll.reveal(".webP", { delay: 400, origin: "left" });
    scroll.reveal(".webPText", { delay: 400, origin: "right" });
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <main className="pt-20">
        <div className="text-white bg-[#0b0f28] text-center py-10 md:py-16 px-4">
          <p className="text-3xl md:text-5xl font-medium">Digital Marketing</p>
          <p className="flex items-center justify-center gap-2 text-sm mt-4">
            <span className="text-blue-500 cursor-pointer">Home</span>
            <span>|</span>
            <span>Digital Marketing</span>
          </p>
        </div>
      </main>

      {/* Intro Text */}
      <div className="text-center py-8 md:py-16 px-6">
        <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
          Affordable Digital Marketing Company in Australia
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          In the fast-paced world of the internet, many apps and websites are constantly being made at a high cost in order to make big profits and business. We keep up with the latest trends and techniques to promote our business, whether it's services, products, events, or any other type of business. This helps us get a lot of customers and make a lot of money.
        </p>
      </div>

      {/* Section 1 */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row w-[90%] py-10 md:py-20 gap-6 md:gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={customdigital}
              alt="Digital marketing"
              className="development"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 text-left devText">
            <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
              Result-Oriented approach
            </h2>
            <p className="text-gray-700">
              Jim Digital is a well-known name in SEO services. They have a lot of experience with technical skills and digital marketing techniques that work for any type of project, no matter how big or small. We use ethical methods to help you get ahead of your competitors.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row-reverse w-[90%] py-10 md:py-20 items-center gap-6 md:gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={facebookinsta}
              alt="Best Digital marketing Company"
              className="w-full h-auto themes"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 text-left themesText">
            <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
              No 1 Social Media Agency in Melbourne Preferred By Brands & Startups
            </h2>
            <p className="text-gray-700">
              Jim Digital are the best Social Media Agency in Melbourne because we have been in business for more than 10 years and have a 99% customer satisfaction rate. One of our specialties is keeping an eye on, improving, and analyzing social media profiles to make content, boost online visibility,
              and get people to interact with it.
            </p>

          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row w-[90%] py-10 md:py-20 items-center gap-6 md:gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={webdev3}
              alt="Digital marketing"
              className="w-full h-auto webP"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 text-left webPText">
            <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
              Profound experts
            </h2>
            <p className="text-gray-700">
              We have a team of very knowledgeable and experienced digital marketing experts who know all the best ways to get a website to rank high. We give our clients good information about the latest changes to
              Google and Search Engine Optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div className="text-white bg-[#0b0f28] text-center py-10 md:py-16 px-6">
        <p className="text-3xl md:text-5xl font-medium">
          Why Jim-Digital Solution?
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
            <div key={i} className="flex flex-col items-center gap-3 md:gap-4 px-4">
              <img
                src={card.img}
                alt={card.title}
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <h2 className="text-lg md:text-xl font-medium">{card.title}</h2>
            </div>
          ))}
        </div>
      </div>




      {/* Hire Section */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row-reverse w-[90%] py-10 md:py-20 items-center gap-6 md:gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={softDev}
              alt="Hire Web Developer"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 text-left">
            <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
              Do you want to hire the best Digital Marketting for your project?
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

export default Digital;
