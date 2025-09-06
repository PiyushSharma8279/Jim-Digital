import React, { useEffect } from "react";
import Header from "../../../Header/Header";
import Info from "../../../Footer/Info";
import scrollreveal from "scrollreveal";
import customsoftware from '../../../../assets/customsoftware.jpg'
import softwaredev from '../../../../assets/softwaredev.jpg'
import webdev3 from '../../../../assets/webdev3.jpg'
import softDev from '../../../../assets/softwaredevfooter.png'
import unique from '../../../../assets/unique.png'
import delivery from '../../../../assets/delivery.png'
import customized from '../../../../assets/customized.png'
import useSEO from "../../../../hooks/useSeo";




function SoftwareDev() {
  useSEO({
    title: "Software Development Company in Melbourne, Australia | Jim Digital",
    description:
      "Discover a leading software development company delivering tailored, scalable, and reliable solutions to grow your business with ease",
    url:"https://www.jim-digital.com/software-development-company-in-melbourne",
  });



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const scroll = scrollreveal({
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
          <p className="text-3xl md:text-5xl font-medium">Software-development</p>
          <p className="flex items-center justify-center gap-2 text-sm mt-4">
            <span className="text-blue-500 cursor-pointer">Home</span>
            <span>|</span>
            <span>Software-development</span>
          </p>
        </div>
      </main>

      <div className="text-center py-8 md:py-16 px-6">
        <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
          Software-development Company in Melbourne Australia
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          At Jim Digital, we help you make more money, be more competitive, and work more efficiently so you can get ahead in your market.
          We have a team of experts who have won awards for successfully completing projects using the latest technologies on all major platforms.
        </p>
      </div>

      <div className="text-center px-6">
        <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
          Partner with Our Expert Team for Custom Software Development Solutions
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto">
          Are you looking for the best custom software development services or a custom software development company in Melbourne, Australia? Our certified professionals are committed to providing you with high-quality software solutions that meet your needs. Our experienced developers write clean code and offer excellent consulting services. They do this by focusing on the needs of the client and having a lot of knowledge about the software development life cycle (SDLC).

          One of the best offshore software development companies, we can help you make your most important projects a success with our skilled developers.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row w-[90%] py-10 md:py-20 gap-6 md:gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={customsoftware}
              alt="Software-development"
              className="development"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 text-left devText">
            <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
              Custom Software-development
            </h2>
            <p className="text-gray-700">
              We want to be the best at making custom software, turning one-of-a-kind ideas into powerful digital solutions. We want to keep coming up with new ideas and setting new standards that help businesses do well in the digital world.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row-reverse w-[90%] py-10 md:py-20 items-center gap-6 md:gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={softwaredev}
              alt="Best Software-development Company"
              className="w-full h-auto themes"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 text-left themesText">
            <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
              Innovating for Success: Our Technology Mission
            </h2>
            <p className="text-gray-700">
              We want to give businesses the tools they need to succeed by offering innovative, user-focused custom software development services. We focus on providing custom solutions that meet specific needs. We do this by combining cutting-edge technology with creative design to help businesses grow, engage, and succeed in the digital world, which is always changing.
            </p>

          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row w-[90%] py-10 md:py-20 items-center gap-6 md:gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={webdev3}
              alt="Software-development"
              className="w-full h-auto webP"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 text-left webPText">
            <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
              Driving Innovation: Our Vision for Custom Software Development
            </h2>
            <p className="text-gray-700">
              Our Melbourne-based custom software development company wants to be the best at what we do, known for turning ideas into powerful digital solutions. We want to keep coming up with new ideas that set new standards for the industry and help businesses
              do well in the digital age.
            </p>
          </div>
        </div>
      </div>

      <div className="text-white bg-[#0b0f28] text-center  md:py-16 px-6">
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
            <div key={i} className="flex flex-col items-center gap-4 px-4">
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

export default SoftwareDev;
