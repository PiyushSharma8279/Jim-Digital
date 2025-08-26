import React, { useEffect } from "react";
import Header from "../../../Header/Header";
import Info from "../../../Footer/Info";
import scrollreveal from "scrollreveal";
import customdigital from "../../../../assets/customdigital.jpg";
import facebookinsta from "../../../../assets/facebookinsta.jpg";
import webdev3 from "../../../../assets/webdev3.jpg";

function Digital() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const scroll = scrollreveal({
      reset: true,
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
          As a Digital Marketing Company in Noida let us reach your business to
          the right people digitally!!
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          In the speeding world of internet, countless applications and websites
          are designed constantly with a great expense with an interest to earn
          major profits and business. Either it’s about promoting services,
          products, events or any kind of business, we follow the latest trends
          and technique to deploy our business to score great popularity and
          revenues...
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
              Custom Digital Marketing
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
            <img
              src={facebookinsta}
              alt="Best Digital marketing Company"
              className="w-full h-auto themes"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 text-left themesText">
            <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
              Facebook & Instagram marketing
            </h2>
            <p className="text-gray-700">
              Facebook: This is a prominent tool today as of now Facebook is the
              leading social media app...
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Digital marketing involves association with production...</li>
              <li>
                Information architecture - It won’t be wrong to define it as the
                structural design...
              </li>
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
              alt="Digital marketing"
              className="w-full h-auto webP"
            />
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

      {/* Why Us */}
      <div className="text-white bg-[#0b0f28] text-center py-10 md:py-16 px-6">
        <p className="text-3xl md:text-5xl font-medium">
          Why Jim-Digital Solution?
        </p>

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
            <div key={i} className="flex flex-col items-center gap-3 md:gap-4 px-4">
              <img
                src={card.img}
                alt={card.title}
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <h2 className="text-lg md:text-xl font-medium">{card.title}</h2>
              <p className="text-sm text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industry */}
      <div className="text-center py-8 md:py-16 px-6">
        <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
          Industry We Serve
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          We have worked across multiple industry verticals...
        </p>
      </div>

      {/* Industry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
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
          <div
            key={i}
            className="shadow-xl rounded-xl h-32 md:h-40 flex flex-col justify-center items-center bg-white hover:scale-105 transition-transform"
          >
            <img
              src={`https://cybetiq.com/wp-content/themes/cybetiq-v2/img/ic/${item.img}`}
              alt={item.text}
              className="w-10 md:w-16 mb-2"
            />
            <p className="font-medium text-gray-700 text-center text-sm md:text-base">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Hire Section */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row-reverse w-[90%] py-10 md:py-20 items-center gap-6 md:gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="https://cybetiq.com/wp-content/themes/cybetiq-v2/img/developer.png"
              alt="Hire Web Developer"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 text-left">
            <h2 className="text-2xl md:text-4xl py-2 md:py-4 font-medium">
              Do you want to hire the best website developer for your project?
            </h2>
            <p className="text-gray-700">
              Our website development teams convert your imagination into code
              and make your website a lead conversion machine.
            </p>
            <button className="py-2 px-6 rounded-xl text-white bg-blue-600 mt-5 hover:bg-blue-700">
              Contact Now
            </button>
          </div>
        </div>
      </div>

      <Info />
    </>
  );
}

export default Digital;
