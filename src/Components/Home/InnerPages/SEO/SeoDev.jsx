import React, { useEffect } from "react";
import Header from "../../../Header/Header";
import Info from "../../../Footer/Info";
import { FaAndroid, FaApple, FaHSquare } from "react-icons/fa";
import seo from '../../../../assets/seo.jpg'

function SeoDev() {
     useEffect(() => {
         window.scrollTo(0, 0);
       }, []);
    return (
        <>
        
      <Header />
      <main className="pt-20">

        <div className="text-white bg-[#0b0f28] text-center py-16 px-4">
          <p className="text-3xl md:text-5xl font-medium">
            Seo Development
          </p>
          <p className="flex items-center justify-center gap-2 text-sm mt-4">
            <span className="text-blue-500 cursor-pointer">Home</span>
            <span>|</span>
            <span> Seo Development</span>
          </p>
        </div>
      </main>


      <div className="text-center py-16 px-6">
        <h2 className="text-2xl md:text-4xl py-4 font-medium">
          Best Seo Development Company in Noida, Delhi | India -
          Jimdigital.com
        </h2>
      </div>


      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row w-[90%] py-20 gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={seo}
              alt="Web Development"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 text-left">
            <p className="text-[17px] font-normal text-gray-500">
              As a best <span className=" font-medium">SEO Services Company in Noida</span> we believe that your website is incomplete
               without Search Engine Optimization (SEO). The principle of SEO revolves around 
               the process of providing a greater deal of visibility to the users for a particular website. 
               The greater the number of visitors to a website, the greater number of times the website appears on the 
               search results page. To an affirmative consequence, these visitors can subsequently play the role of customers.
                The Best SEO Company in Noida, none other than the reputed Cybetiq Company avails
               you with best contents that will help you raise the head out for better online traffic.
            </p>

            <p className="text-[17px] font-normal text-gray-500 pt-4">
              As the Best <span className=" font-medium">SEO Services Company in Noida</span>, our job is not only to 
              provide the best content but to optimize the best rank for your business too.
               The crisp content keeps the audience engaged and informed. This is the way to
                optimize the rank and compile all your desires in terms of words and to showcase
                 the best performance where your business can flow well. Streamline your overall
                  terms with better contents to make your presence and compel the user to click on your
                   page by ranking yourself in first few results with Cybetiq since we are the Best SEO 
                   Company in Noida.
               Looking for SEO Services Company in Noida? Then Contact us Now
            </p>

          </div>
        </div>
      </div>


      <div className="text-white bg-[#0b0f28] text-center py-16 px-6">
                <p className="text-3xl md:text-5xl font-medium">
                   Why You Choose Our SEO Services?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
                    {[
                        {
                            img: "https://cybetiq.com/wp-content/themes/cybetiq-v2/img/ic/web_beautiful.png",
                            title: "Market Analysis & Keyword",
                            
                        },
                        {
                            img: "https://cybetiq.com/wp-content/themes/cybetiq-v2/img/ic/web_responsive.png",
                            title: "Content Development ",
                            
                        },
                        {
                            img: "https://cybetiq.com/wp-content/themes/cybetiq-v2/img/ic/web_effective.png",
                            title: "Website Audit & Optimization",
                            
                        },
                    ].map((card, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 px-4">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-20 h-20 md:w-24 md:h-24 object-contain"
                            />
                            <h2 className="text-lg md:text-xl font-medium">{card.title}</h2>
                            <p className="text-sm text-gray-300">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
             <div className="text-center py-16 px-6">
                <h2 className="text-2xl md:text-4xl py-4 font-medium">
                    What makes Cybetiq, Best SEO Agency In Noida?
                </h2>
                <p className=" mx-auto text-gray-700 py-2 text-[17px] font-medium">
                 We implement technical strategies and research to find out the exact keywords
                  that would make your site appear in the first few results in the google search
                </p>
                 <p className=" mx-auto text-gray-700 py-2 text-[17px] font-medium">
                 We not only stick to your company’s scope but we also go through your competitor’s performance to make sure you lead the way
                </p>
                 <p className=" mx-auto text-gray-700 py-2 text-[17px] font-medium">
                We make sure that both your on page and off page optimization is taken care of
                </p>
            </div>


     


      <div className="text-white bg-black text-center py-16 px-6">
        <p className="text-3xl md:text-5xl font-medium">Let's Talk</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
          {[
            {
              img: "https://cybetiq.com/wp-content/themes/cybetiq-v2/img/ic/talk_call.png",
              title: "Give us a call",
              desc: "+91 9800942901",
            },
            {
              img: "https://cybetiq.com/wp-content/themes/cybetiq-v2/img/ic/talk_mail.png",
              title: "Write to us",
              desc: "jim-digital@gmail.com",
            },
            {
              img: "https://cybetiq.com/wp-content/themes/cybetiq-v2/img/ic/talk_skype.png",
              title: "Video chat with us",
              desc: "Jim",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 px-4 text-center"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <h2 className="text-xl font-medium">{card.title}</h2>
              <p className="text-lg text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Info />
        </>
    )
}

export default SeoDev
