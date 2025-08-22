import React from 'react'
import Header from '../../Header/Header'
import Info from '../../Footer/Info'

function AboutUs() {
    return (
        <>
        <Header/>
           <main className="pt-24">
                <div className="text-white bg-[#0b0f28] text-center py-16 px-4">
                    <p className="text-3xl md:text-5xl font-medium">Abou Us</p>
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


        <Info/>
        </>
    )
}

export default AboutUs
