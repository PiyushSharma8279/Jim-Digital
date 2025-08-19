import React from 'react'
import Layout from '../Layout/Layout'
import Marketting from '../Components/Home/Marketting'
import Categories from '../Components/Home/categories'
import Details from '../Components/Home/Details'
import Seo from '../Components/Home/Seo'
import Review from '../Components/Home/Review'
import Footer from '../Components/Footer/Footer'

function Home() {
    return (
        <>
        <Layout/>
         <Marketting/>
         <Categories/>
         <Details/>
         <Seo/>
         <Review/>
         <Footer/>


        
        
        </>
    )
}

export default Home
