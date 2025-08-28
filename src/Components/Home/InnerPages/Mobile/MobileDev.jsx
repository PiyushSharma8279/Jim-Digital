import React, { useEffect } from "react";
import Header from "../../../Header/Header";
import Info from "../../../Footer/Info";
import { FaAndroid, FaApple, FaHSquare } from "react-icons/fa";
import mobile from '../../../../assets/mobile.jpg'

function MobileDev() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        
        <div className="text-white bg-[#0b0f28] text-center py-16 px-4">
          <p className="text-3xl md:text-5xl font-medium">
            Mobile App Development
          </p>
          <p className="flex items-center justify-center gap-2 text-sm mt-4">
            <span className="text-blue-500 cursor-pointer">Home</span>
            <span>|</span>
            <span> Mobile App Development</span>
          </p>
        </div>
      </main>

      
      <div className="text-center py-16 px-6">
        <h2 className="text-2xl md:text-4xl py-4 font-medium">
          Best Mobile App Development Company in Melbourne | Australia
        </h2>
      </div>

      
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row w-[90%] py-20 gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={mobile}
              alt="Web Development"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-10 text-left">
            <p className="text-[17px] font-normal text-gray-500">
             We are the Best Mobile App Development Company in Melbourne, Australia, and we think that mobile apps have made it easier to get to services like business, shopping, chatting, mailing, instant messaging, getting the latest news, and more.
            </p>

            <h2 className="text-2xl md:text-3xl py-4 font-medium text-blue-900">
              Strong Branding of a mobile app.
            </h2>
            <p className="text-[17px] font-normal text-gray-500">
             We all know that a strong brand name and a well-designed brand logo are two of the most important things to think about when making a mobile app.
            </p>

            <h2 className="text-2xl md:text-3xl py-4 font-medium text-blue-900">
              Featuring a convenient app.
            </h2>
            <p className="text-[17px] font-normal text-gray-500">
             A useful app that is easy to use will attract a wide range of users to the mobile app and keep them using it for a long time.
            </p>
          </div>
        </div>
      </div>

      
      <div className="text-white bg-[#0b0f28] text-center py-20 px-4">
        <p className="text-2xl md:text-5xl font-medium">
         Customized Mobile App Development
        </p>
        <p className="mt-4 text-sm md:text-lg max-w-4xl mx-auto text-gray-300">
        The more flexible an app developer makes the app, the less likely it is to cause problems and the more useful it will be.
        </p>
      </div>

      
      <div className="text-center py-16 px-6">
        <h2 className="text-2xl md:text-4xl py-4 font-medium">
          We Build Apps For Every Platform
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          <div className="shadow-2xl p-6 flex flex-col gap-4 text-left rounded-2xl">
            <FaAndroid
              color="white"
              size={100}
              className="bg-green-600 p-4 rounded-full self-center"
            />
            <h2 className="font-medium text-xl text-center">
              Android App Development
            </h2>
            <p className="text-gray-500 text-[17px] text-center">
            To make custom Android apps, you need to know a lot and be very skilled. We turn business ideas into successful mobile apps by using the latest technologies and
             our years of experience in Android app development services in Melbourne.
            </p>
          </div>

          <div className="shadow-2xl p-6 flex flex-col gap-4 text-left rounded-2xl">
            <FaApple
              color="white"
              size={100}
              className="bg-gray-800 p-4 rounded-full self-center"
            />
            <h2 className="font-medium text-xl text-center">
              iOS App Development
            </h2>
            <p className="text-gray-500 text-[17px] text-center">
            As a mobile app development company, we offer full iOS app development services in Melbourne, from coming up with ideas to putting them into action. This will help your business grow and make more money. To give you strong iOS app solutions, we look at the app's mobility, 
            needs, and return on investment.
            </p>
          </div>

          <div className="shadow-2xl p-6 flex flex-col gap-4 text-left rounded-2xl">
            <FaHSquare
              color="white"
              size={100}
              className="bg-indigo-600 p-4 rounded-full self-center"
            />
            <h2 className="font-medium text-xl text-center">
              Hybrid App Development
            </h2>
            <p className="text-gray-500 text-[17px] text-center">
              One Application for all platform. Hybrid App is for small and mid
              level business...
            </p>
          </div>
        </div>
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
  );
}

export default MobileDev;
