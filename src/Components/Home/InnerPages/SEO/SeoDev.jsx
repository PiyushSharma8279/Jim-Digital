import React, { useEffect } from "react";
import Header from "../../../Header/Header";
import Info from "../../../Footer/Info";
import { FaAndroid, FaApple, FaHSquare } from "react-icons/fa";
import seo from '../../../../assets/seo.jpg'
import phone from '../../../../assets/phone.png'
import mail from '../../../../assets/mail.png'
import video from '../../../../assets/video.png'

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
          Best Seo Development Company in Melbourne
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
             We are the best SEO Services Company in Melbourne, and we think that your website isn't complete without Search Engine Optimization (SEO). The main idea behind SEO is to make a website more visible to users. The more people who visit a website, the more often it will show up on the search results page. In a good way, these visitors can later become customers. Jim Digital Company is the best SEO company in Melbourne.
              They offer you the best content that will help you get more online traffic.
            </p>

            <p className="text-[17px] font-normal text-gray-500 pt-4">
              As the best SEO services company in Melbourne, it's our job to not only give you the best content but also to help your business get the best rank. The clear content keeps the audience interested and up to date. This is the best way to improve your rank and put all of your wants into words so that you can show off your best work and make your business run smoothly. With Jim Digital, the Best SEO Company in Australia, you can improve your overall terms and make your presence felt. This will make people want to click on your page by putting you in the top few results.
               Need an SEO Services Company in Melbourne? Then get in touch with us now.
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
                            img: phone,
                            title: "Market Analysis & Keyword",
                            
                        },
                        {
                            img: mail,
                            title: "Content Development ",
                            
                        },
                        {
                            img: video,
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
                    What makes Jim Digital, Best SEO Agency In Melbourne?
                </h2>
                <p className=" mx-auto text-gray-700 py-2 text-[17px] font-medium">
                We use research and technical methods to find the exact keywords that will get your site to show up in the top few results on Google.
                </p>
                 <p className=" mx-auto text-gray-700 py-2 text-[17px] font-medium">
                 We not only stay within the limits of your business, but we also look at how well your competitors are doing to make sure you stay ahead.
                </p>
                 <p className=" mx-auto text-gray-700 py-2 text-[17px] font-medium">
                We make sure that both your on-page and off-page optimization are done.
                </p>
            </div>


     


      <div className="text-white bg-black text-center py-16 px-6">
        <p className="text-3xl md:text-5xl font-medium">Let's Talk</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
          {[
            {
              img: "https://cybetiq.com/wp-content/themes/cybetiq-v2/img/ic/talk_call.png",
              title: "Give us a call",
              desc: "+61 426 443 970",
            },
            {
              img: "https://cybetiq.com/wp-content/themes/cybetiq-v2/img/ic/talk_mail.png",
              title: "Write to us",
              desc: "jimdigital93@gmail.com",
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
