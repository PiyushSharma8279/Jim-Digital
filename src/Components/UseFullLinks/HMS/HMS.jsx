import React, { useEffect } from 'react';
import Header from '../../Header/Header';
import Info from '../../Footer/Info';
import hms from '../../../assets/hms.jpg'

function HMS() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    

    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <div className="text-white bg-[#0b0f28] text-center py-16 px-4">
                    <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
                        Hospital Management System (HMS)
                    </h1>
                    <p className="flex items-center justify-center gap-2 text-sm mt-4">
                        <span className="text-blue-500 cursor-pointer hover:underline">Home</span>
                        <span>|</span>
                        <span>HMS</span>
                    </p>
                </div>
            </main>

            {/* Content Section */}
            <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
                {/* Left Side - Text */}
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Hospital Management System
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      A Hospital Management System (HMS) is a set of software programs that work together to handle all the tasks that hospitals need to do. It makes it easier to keep track of patient records, appointments, bills, inventory, and staff schedules. This makes things run more smoothly, cuts down on mistakes, and improves patient care and administrative productivity as a whole through a single digital platform.
 
                    </p>
                </div>

                {/* Right Side - Image */}


                <div className="md:w-1/2">
                    <img
                        src={hms}
                        alt="CRM software illustration"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </section>
            
           

            <Info />
        </>
    );
}

export default HMS;
