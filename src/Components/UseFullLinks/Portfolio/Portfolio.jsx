import React from 'react'
import { useEffect } from 'react'
import Header from '../../Header/Header'
import Info from '../../Footer/Info'
import backup from '../../../assets/backup.png'
import zomento from '../../../assets/zomento.png'
import dazzle from '../../../assets/dazzle.png'
import taxi from '../../../assets/taxi.png'
import rent from '../../../assets/rent.png'
import bluesaphire from '../../../assets/bluesaphire.png'

function Portfolio() {
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
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center">
                    <img
                        src={backup}
                        alt="Backup"
                        className="w-full h-48 object-cover"
                    />
                    <div className=' p-2'>
                        <h2 className="text-lg font-semibold mt-3">Backup</h2>
                    <p className="text-gray-600 text-sm">Australian Based Stafing company</p>
                    </div>
                    
                </div>

                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center ">
                    <img
                        src={zomento}
                        alt="Zomento"
                        className="w-full h-48 object-cover"
                    />
                    <div className='p-2'>
                        <h2 className="text-lg font-semibold mt-3">Zomento</h2>
                    <p className="text-gray-600 text-sm">Australian based E-Commerce comapny</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center ">
                    <img
                        src={dazzle}
                        alt="Dazzle"
                        className="w-full h-48 object-cover"
                    />
                    <div className=' p-2'>
                        <h2 className="text-lg font-semibold mt-3">Dazzle</h2>
                    <p className="text-gray-600 text-sm">Australia based Beauty Product Company</p>
                    </div>
                    </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center">
                    <img
                        src={taxi}
                        alt="Taxi"
                        className="w-full h-48 object-cover"
                    />
                    <div className=' p-2'>
                        <h2 className="text-lg font-semibold mt-3">Taxi</h2>
                    <p className="text-gray-600 text-sm">Australian Based Taxi company</p>
                    </div>
                    
                </div>

                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center ">
                    <img
                        src={rent}
                        alt="Rent"
                        className="w-full h-48 object-cover"
                    />
                    <div className='p-2'>
                        <h2 className="text-lg font-semibold mt-3">Rent a man</h2>
                    <p className="text-gray-600 text-sm">Australian based Job Post comapny</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center ">
                    <img
                        src={bluesaphire}
                        alt="BlueSaphire"
                        className="w-full h-48 object-cover"
                    />
                    <div className=' p-2'>
                        <h2 className="text-lg font-semibold mt-3">Blue Saphire</h2>
                    <p className="text-gray-600 text-sm">Australia based Real Estate Company</p>
                    </div>
                    </div>
            </div>


            <Info />

        </>
    )
}

export default Portfolio
