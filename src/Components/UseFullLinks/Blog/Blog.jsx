import React from 'react'
import Header from '../../Header/Header'
import Info from '../../Footer/Info'
import { useEffect } from 'react';

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <main className="pt-20">

                <div className="text-white bg-[#0b0f28] text-center py-16 px-4">
                    <p className="text-3xl md:text-5xl font-medium">Blog</p>
                    <p className="flex items-center justify-center gap-2 text-sm mt-4">
                        <span className="text-blue-500 cursor-pointer hover:underline">Home</span>
                        <span>|</span>
                        <span>Blog</span>
                    </p>
                </div>
            </main>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ">
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center">
                    <img
                        src="https://cybetiq.com/wp-content/uploads/2019/08/906.jpg"
                        alt=""
                        className="w-full h-48 object-cover"
                    />
                    <div className=' p-2'>
                        <h2 className="text-lg font-semibold mt-3">How to find the best Website...</h2>
                        <p className="text-gray-600 text-sm">Nowadays, a website is considered as one of the important aspects of online marketing. A stunning and fully functional website
                            can speak volumes about a particular company. You need to...</p>
                    </div>

                </div>

                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center ">
                    <img
                        src="https://cybetiq.com/wp-content/uploads/2019/08/2147847477.jpg"
                        alt=""
                        className="w-full h-48 object-cover"
                    />
                    <div className='p-2'>
                        <h2 className="text-lg font-semibold mt-3">Social Media Company Noida: ...</h2>
                        <p className="text-gray-600 text-sm">Ways to Promote Business You’ve spent hours researching, analyzing, and lastly creating compelling content to assist you to reach your content advertising objectives.
                            And like novel writers, you need to...</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center ">
                    <img
                        src="https://cybetiq.com/wp-content/uploads/2019/05/choose.png"
                        alt="Dazzle"
                        className="w-full h-48 object-cover"
                    />
                    <div className=' p-2'>
                        <h2 className="text-lg font-semibold mt-3">What is Firebase and Its Fea...</h2>
                        <p className="text-gray-600 text-sm">What is firebase? This is the most trending question among beginners web and mobile application developers. So, In this post,
                            I will give you the basic introduction to google’s firebase....</p>
                    </div>
                </div>
           

            
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center">
                    <img
                        src="https://cybetiq.com/wp-content/uploads/2019/05/seo-blog-cybetiq.jpg"
                        alt=""
                        className="w-full h-48 object-cover"
                    />
                    <div className=' p-2'>
                        <h2 className="text-lg font-semibold mt-3">Why SEO is Absolutely Import...</h2>
                        <p className="text-gray-600 text-sm">What is SEO? SEO (Special Engine Optimization) is the method used to increase a site’s position on (SERPs) Search Engine Results pages.
                            Understanding the application of SEO strategies helps to...</p>
                    </div>

                </div>

                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center ">
                    <img
                        src="https://cybetiq.com/wp-content/uploads/2019/05/webdesign-development.jpg"
                        alt="Rent"
                        className="w-full h-48 object-cover"
                    />
                    <div className='p-2'>
                        <h2 className="text-lg font-semibold mt-3">Tips to Choose a Web Design ...</h2>
                        <p className="text-gray-600 text-sm">Finding the right web design company for your small business in India could be strenuous and tasking,
                            because choosing the wrong company could put you at loss to your money...</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center ">
                    <img
                        src="https://cybetiq.com/wp-content/uploads/2019/05/ubuntu.jpg"
                        alt=""
                        className="w-full h-48 object-cover"
                    />
                    <div className=' p-2'>
                        <h2 className="text-lg font-semibold mt-3">How to Install Angular 7 on ...</h2>
                        <p className="text-gray-600 text-sm">Want to learn how to install Angular 7 on Ubuntu? Yes! Then you are at right place. In this article,
                            we will learn how to set up an Angular environment...</p>
                    </div>
                </div>
             </div>

            <Info />

        </>
    )
}

export default Blog
