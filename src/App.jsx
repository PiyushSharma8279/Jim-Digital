import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import WebsiteDev from './Components/Home/InnerPages/WebsiteDev/WebsiteDev'
import MobileDev from './Components/Home/InnerPages/Mobile/MobileDev'
import SoftwareDev from './Components/Home/InnerPages/Software/SoftwareDev'
import UxDesign from './Components/Home/InnerPages/UxDesign/UxDesign'
import Digital from './Components/Home/InnerPages/DigitalMarketting/Digital'
import WordPress from './Components/Home/InnerPages/WordPressDev/WordPress'

import SeoDev from './Components/Home/InnerPages/SEO/SeoDev'
import AboutUs from './Components/UseFullLinks/Company/AboutUs'
import Portfolio from './Components/UseFullLinks/Portfolio/Portfolio'
import Contact from './Components/UseFullLinks/ContactUs/Contact'
import Career from './Components/UseFullLinks/Career/Career'
import Blog from './Components/UseFullLinks/Blog/Blog'
import FormPage from './Components/Home/Modals/WebDevForm'
import DesignForm from './Components/Home/Modals/WebDesignForm'
import Customform from './Components/Home/Modals/Customform'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
           <Route path="/website-dev" element={<WebsiteDev/>}/>
           <Route path='/mobile-dev' element={<MobileDev/>} />
           <Route path='/software-dev' element={<SoftwareDev/>}/>
           <Route path='/ux-dev' element={<UxDesign/>}/>
           <Route path='/digital-dev' element={<Digital/>}/>
           <Route path='/wordpress-dev' element={<WordPress/>}/>
           <Route path='/seo-dev' element={<SeoDev/>}/>
           <Route path='/about' element={<AboutUs/>}/>
           <Route path='/portfolio' element={<Portfolio/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/career' element={<Career/>}/>
           <Route path='/blog' element={<Blog/>}/>
           <Route path="/form/:category" element={<FormPage />} />
           <Route path="/design/:category" element={<DesignForm />} />
           <Route path="/custom/:category" element={<Customform />} />



        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
