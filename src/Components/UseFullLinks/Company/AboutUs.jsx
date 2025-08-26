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
                    Jim digital is a Best Website Designing Company in Noida | India. We are a team
                    of experts with huge experience in top notch web services. In the challenging
                    world of who to choose, our company has always got something up its sleeves.
                    It’s not an illusion, rather a transparency in skills showcased by our able web
                    developers for every task undertaken. Such interdisciplinary skills include web
                    and mobile app solutions, website design and development, mobile application design
                    and development, eCommerce solutions, WordPress Website development, Search Engine
                    Optimization(SEO), Email Marketing, Branding and Marketing, Leads & Advertisement
                    and Domain and Hosting registration. We aim at being in touch with the up-to date
                    technologies to render quality services to our clients and to maintain the reputation
                    that we have attained for numerous years
                    by satisfying the expectations of thousands of customers around the world.
                </p>
                <p className='text-gray-500  mx-auto py-2'>
                    Jim digital is a spirited team of intelligent and tech-savvy developers who are
                    confident in their work. The leaders of the organization have set a standard
                    to be followed which makes them stand out from any other organisation.
                    The services offered might be similar to every other organisation but the
                    values we follow, the satisfaction and creativity we can render to our
                    clients differentiates us from others.
                </p>
                <p className='text-gray-500  mx-auto py-2'>
                    Jim digital Pvt Ltd can earn a count among the best website designing companies
                    in Noida. We are proud to have had an outstanding track record of our
                    services and quality sustainability. The company has been motivated by
                    the present clients and a broad base of thousands of satisfied customers
                    to expand the service area and provide complete business posting services.
                    We offer all-around comprehensive services to digitize or build your
                    business. Our company is well known among the recognised and reliable
                    customers for the services we render. Commencing with website design,
                    web hosting and domain registration, our company scales miles when it
                    comes to marketing. Marketing on social media, advertising on facebook
                    and development of wordpress website has been quite an easy task after
                    Jim digital came into limelight.
                </p>
                <p className='text-gray-500  mx-auto py-2'>Jim digital helps unleash the good and the better in your website to turn it into the best. <span className=' font-bold'> Best Website Designing Company in Noida | India</span></p>

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
                           Our vision drives upon rendering the best service with top notch quality where we be 
                           updated to the crossroads of impeccable quality of service and technology-oriented 
                           progressiveness. Our central moto is to help businesses grow at all levels and dimensions. 
                           The vision is refined to maximize the quantum of impact of digital transformation on the
                            Indian IT industry. The ultimate aim is to bring in all the services required by a business 
                            over the Internet in the most customer-centric manner. We understand that a complex vision
                             might lead to dissolved effort.
                            Our day to day zeal and the enthusiasm is keeping us on the toes to learn and serve the industry to the best of our abilities.
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
                           We at Cybetiq provide Website Designing, Website Development, Custom Softwares, Mobile Application,
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

export default AboutUs
