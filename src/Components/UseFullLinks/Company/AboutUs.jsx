import React from 'react';
import Header from '../../Header/Header'
import Info from '../../Footer/Info'
import { useEffect } from 'react';
import scrollreveal from "scrollreveal";
import about from '../../../assets/about.jpg'
import aboutCompany from '../../../assets/aboutCompany.jx.jpg'

function AboutUs() {
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
                <div className="text-white bg-[#0b0f28] text-center py-16 px-4">
                    <p className="text-3xl md:text-5xl font-medium">About Us</p>
                    <p className="flex items-center justify-center gap-2 text-sm mt-4">
                        <span className="text-blue-500 cursor-pointer">Home</span>
                        <span>|</span>
                        <span>About Us</span>
                    </p>
                </div>
            </main>
            <div className="text-center py-16 px-6">
                <h2 className="text-2xl md:text-4xl py-4 font-medium">
                    About our company
                </h2>
                <p className="text-gray-500  mx-auto py-3">
                   Jim Digital is the best website design company in Melbourne. We are a group of professionals with a lot of experience in high-quality web services. In a tough world where you have to pick someone, our company always has something up its sleeve. It's not an illusion; our skilled web developers show their skills clearly in every job they do. Web and mobile app solutions, website design and development, mobile application design and development, eCommerce solutions, WordPress website development, search engine optimization (SEO), email marketing, branding and marketing, leads and advertisement, and domain and hosting registration are all examples of interdisciplinary skills. We want to stay up to date with the latest technologies so that we can provide our clients with high-quality services and keep the good name we've built up over the years by meeting the needs of thousands of customers around the world.
 
                </p>
                <p className='text-gray-500  mx-auto py-2'>
                    Jim Digital is a young group of smart, tech-savvy developers who are sure of their work. The leaders of the organization have set a standard that makes them different from any other organization. The services we offer may be the same as those of other businesses, but the values we hold, the satisfaction we give our clients, and the creativity we bring to the table set us apart.
                </p>
                <p className='text-gray-500  mx-auto py-2'>
                   Jim Digital is one of the best website design companies in Australia. We are proud of the great track record our services and quality sustainability have. The company has been driven to grow its service area and offer full business posting services by its current clients and a large number of happy customers. We offer a full range of services to help you digitize or grow your business. Our company is well-known among reliable and well-known customers for the work we do. Our company offers a wide range of marketing services, starting with website design, web hosting, and domain registration. After Jim Digital became well-known, marketing on social media, putting ads on Facebook, and building a WordPress website have all been very easy tasks.
                </p>
                <p className='text-gray-500  mx-auto py-2'>Jim digital helps your website reach its full potential and become the best it can be. Best Website Designing Company in Melbourne | Australia</p>

            </div>
            <div className="flex  justify-center">
                <div className="flex flex-col md:flex-row-reverse w-[90%] py-20  gap-10">
                    <div className="w-full md:w-1/2 ">
                        <img
                            src={about}
                            alt="Web Development"
                            className="development rounded-4xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 md:px-10 text-left devText">
                        <h2 className="text-2xl md:text-4xl py-4 font-medium">
                            Vision Behind & Values Beneath
                        </h2>
                        <p className="text-gray-700">
                           Our goal is to provide the best service with the highest quality, and we want to stay at the cutting edge of both service quality and technology. Our main goal is to help businesses grow in every way and on every level. The vision is being fine-tuned to get the most out of the digital transformation's effect on the Indian IT industry. The end goal is to get all the services a business needs online in a way that puts the customer first. We know that a complicated vision can make people stop working together. Our daily passion and excitement keep us on our toes to learn and do our best for the industry.
 
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex  justify-center">
                <div className="flex flex-col md:flex-row w-[90%] py-20  gap-10">
                    <div className="w-full md:w-1/2 ">
                        <img
                            src={aboutCompany}
                            alt="Web Development"
                            className="development rounded-4xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 md:px-10 text-left devText">
                        <h2 className="text-2xl md:text-4xl py-4 font-medium">
                            Company Services
                        </h2>
                        <p className="text-gray-700">
                           We at Jim-Digital provide Website Designing, Website Development, Custom Softwares, Mobile Application,
                            SEO and Digital Marketing services at resonable price.
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
    )
}

export default AboutUs
