import React from 'react'
import wooCommerce from "../../assets/wooCommerce.webp"
import shopify from "../../assets/shopify.webp"
import domain from "../../assets/domain.webp"
import AWS from "../../assets/aws.webp"
import portal from "../../assets/web-portal-development.webp"
import website from "../../assets/Website-Maintenance-Services.webp"
import wordPress from "../../assets/wordpress.webp"
import hosting from "../../assets/hosting.webp"
import business from "../../assets/business.webp" 
import ssl from "../../assets/ssl.webp"

function Seo() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 px-6 md:px-16 py-8">

        <div className="relative group">
          <img
            src={wooCommerce}
            alt="WooCommerce"
            className="rounded-xl shadow-lg w-54 md:w-60 lg:w-90 object-cover"
          />

          <div className="absolute  top-0   px-3 py-1 rounded-md">
            <p className="text-white text-3xl  font-semibold">
              WooCommerce
            </p>
          </div>


          <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl text-center">
            <p className=" text-xl font-normal">
              WooCommerce
            </p>
            <p >Launch a powerful online store with WooCommerce. We set up user-friendly, secure, and fully customizable shopping platforms for all business types.</p>
            <button className=' border border-black px-8 py-1 mt-2 rounded-2xl text-xl font-medium'>Read More</button>
          </div>
        </div>


        <div className="relative group">
          <img
            src={shopify}
            alt="Shopify"
            className="rounded-xl shadow-lg w-54 md:w-60 lg:w-90 object-cover"
          />


          <div className="absolute  top-0  px-3 py-1 rounded-md">
            <p className="text-white text-3xl font-semibold">
              Shopify Website
            </p>
          </div>


          <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl text-center">
            <p className=" text-xl font-normal">
              Shopify Website
            </p>
            <p >Launch a powerful online store with WooCommerce. We set up user-friendly, secure, and fully customizable shopping platforms for all business types.</p>
            <button className=' border border-black px-8 py-1 mt-2 rounded-2xl text-xl font-medium'>Read More</button>
          </div>
        </div>


        <div className="relative group">
          <img
            src={domain}
            alt="Domain"
            className="rounded-xl shadow-lg w-54 md:w-60 lg:w-90 object-cover"
          />


          <div className="absolute top-0 px-3 py-1 rounded-md">
            <p className="text-white text-3xl font-semibold">
              Domain
            </p>
          </div>


          <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl text-center">
            <p className=" text-xl font-normal">
              Domain
            </p>
            <p >Launch a powerful online store with WooCommerce. We set up user-friendly, secure, and fully customizable shopping platforms for all business types.</p>
            <button className=' border border-black px-8 py-1 mt-2 rounded-2xl text-xl font-medium'>Read More</button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-6 md:px-16 pb-4">

        <div className="relative group">
          <img
            src={AWS}
            alt="WooCommerce"
            className="rounded-xl shadow-lg w-54 md:w-60 lg:w-65 object-cover"
          />

          <div className="absolute  top-0   px-3 py-1 rounded-md">
            <p className="text-white text-3xl  font-semibold">
              AWS Management
            </p>
          </div>


          <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl text-center">
            <p className=" text-xl font-normal">
              WooCommerce
            </p>
            <p >Launch a powerful online store with WooCommerce. We set up user-friendly, secure, and fully customizable shopping platforms for all business types.</p>
            <button className=' border border-black px-8 py-1 mt-2 rounded-2xl text-xl font-medium'>Read More</button>
          </div>
        </div>


        <div className="relative group">
          <img
            src={portal}
            alt="Shopify"
            className="rounded-xl shadow-lg w-54 md:w-68 lg:w-66 object-cover"
          />


          <div className="absolute  top-0  px-3 py-1 rounded-md">
            <p className="text-white text-3xl font-semibold">
              Portal Development
            </p>
          </div>


          <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl text-center">
            <p className=" text-xl font-normal">
              Shopify Website
            </p>
            <p >Launch a powerful online store with WooCommerce. We set up user-friendly, secure, and fully customizable shopping platforms for all business types.</p>
            <button className=' border border-black px-8 py-1 mt-2 rounded-2xl text-xl font-medium'>Read More</button>
          </div>
        </div>


        <div className="relative group">
          <img
            src={website}
            alt="Domain"
            className="rounded-xl shadow-lg w-54 md:w-60 lg:w-66 object-cover"
          />


          <div className="absolute top-0 px-3 py-1 rounded-md">
            <p className="text-white text-3xl font-semibold">
              Website Maintenance
            </p>
          </div>


          <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl text-center">
            <p className=" text-xl font-normal">
              Domain
            </p>
            <p >Launch a powerful online store with WooCommerce. We set up user-friendly, secure, and fully customizable shopping platforms for all business types.</p>
            <button className=' border border-black px-8 py-1 mt-2 rounded-2xl text-xl font-medium'>Read More</button>
          </div>
        </div>
         <div className="relative group">
          <img
            src={wordPress}
            alt="Domain"
            className="rounded-xl shadow-lg w-54 md:w-60 lg:w-66 object-cover"
          />


          <div className="absolute top-0 px-3 py-1 rounded-md">
            <p className="text-white text-3xl font-semibold">
              WordPress Website
            </p>
          </div>


          <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl text-center">
            <p className=" text-xl font-normal">
              Domain
            </p>
            <p >Launch a powerful online store with WooCommerce. We set up user-friendly, secure, and fully customizable shopping platforms for all business types.</p>
            <button className=' border border-black px-8 py-1 mt-2 rounded-2xl text-xl font-medium'>Read More</button>
          </div>
        </div>
      </div>


      <div className="flex flex-wrap justify-center gap-6 px-6 md:px-16 py-8">

        <div className="relative group">
          <img
            src={hosting}
            alt="WooCommerce"
            className="rounded-xl shadow-lg w-54 md:w-60 lg:w-90 object-cover"
          />

          <div className="absolute  top-0   px-3 py-1 rounded-md">
            <p className="text-white text-3xl  font-semibold">
              Hosting
            </p>
          </div>


          <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl text-center">
            <p className=" text-xl font-normal">
              Hosting
            </p>
            <p >Launch a powerful online store with WooCommerce. We set up user-friendly, secure, and fully customizable shopping platforms for all business types.</p>
            <button className=' border border-black px-8 py-1 mt-2 rounded-2xl text-xl font-medium'>Read More</button>
          </div>
        </div>


        <div className="relative group">
          <img
            src={business}
            alt="Shopify"
            className="rounded-xl shadow-lg w-54 md:w-60 lg:w-90 object-cover"
          />


          <div className="absolute  top-0  px-3 py-1 rounded-md">
            <p className="text-white text-3xl font-semibold">
              Business Email
            </p>
          </div>


          <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl text-center">
            <p className=" text-xl font-normal">
              Business email
            </p>
            <p >Launch a powerful online store with WooCommerce. We set up user-friendly, secure, and fully customizable shopping platforms for all business types.</p>
            <button className=' border border-black px-8 py-1 mt-2 rounded-2xl text-xl font-medium'>Read More</button>
          </div>
        </div>


        <div className="relative group">
          <img
            src={ssl}
            alt="Domain"
            className="rounded-xl shadow-lg w-54 md:w-60 lg:w-90 object-cover"
          />


          <div className="absolute top-0 px-3 py-1 rounded-md">
            <p className="text-white text-3xl font-semibold">
              SSL Certificate
            </p>
          </div>


          <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl text-center">
            <p className=" text-xl font-normal">
              SSL Certificate
            </p>
            <p >Launch a powerful online store with WooCommerce. We set up user-friendly, secure, and fully customizable shopping platforms for all business types.</p>
            <button className=' border border-black px-8 py-1 mt-2 rounded-2xl text-xl font-medium'>Read More</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Seo
