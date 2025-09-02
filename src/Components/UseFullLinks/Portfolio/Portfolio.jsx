import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import Header from '../../Header/Header'
import Info from '../../Footer/Info'

import wordpress from '../../../assets/wordPress.jpeg'
import shopify from '../../../assets/shopifyoption.webp'
import laravel from '../../../assets/larawel.png'

function Portfolio() {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <main className="pt-20">
                <div className="text-white bg-[#0b0f28] text-center py-16 px-4">
                    <p className="text-3xl md:text-5xl font-medium">Portfolio</p>
                    <p className="flex items-center justify-center gap-2 text-sm mt-4">
                        <span className="text-blue-500 cursor-pointer">Home</span>
                        <span>|</span>
                        <span>Portfolio</span>
                    </p>
                </div>
            </main>

             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={()=> navigate('/innercategories/wordpress')}>
                    <img
                        src={wordpress}
                        alt="Backup"
                        className="w-full h-48 object-cover "
                    />
                    <div className=' p-2'>
                        <h2 className="text-lg font-semibold mt-3">Wordpress</h2>
                    </div>

                </div>

                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={()=> navigate('/innercategories/shopify')}>
                    <img
                        src={shopify}
                        alt="Zomento"
                        className="w-full h-48 object-cover"
                    />
                    <div className='p-2'>
                        <h2 className="text-lg font-semibold mt-3">Shopify</h2>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer "
                onClick={()=> navigate('/innercategories/laravel')}>
                    <img
                        src={laravel}
                        alt="Dazzle"
                        className="w-full h-48 object-cover"
                    />
                    <div className=' p-2'>
                        <h2 className="text-lg font-semibold mt-3">Laravel</h2>

                    </div>
                </div>
            </div>
            
            


            <Info />

        </>
    )
}

export default Portfolio
