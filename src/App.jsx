import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import WebsiteDev from './Components/Home/InnerPages/WebsiteDev/WebsiteDev'
import MobileDev from './Components/Home/InnerPages/Mobile/MobileDev'
import SoftwareDev from './Components/Home/InnerPages/Software/SoftwareDev'
import UxDesign from './Components/Home/InnerPages/UxDesign/UxDesign'
import Digital from './Components/Home/InnerPages/DigitalMarketting/Digital'
import SeoDev from './Components/Home/InnerPages/SEO/SeoDev'
import AboutUs from './Components/UseFullLinks/Company/AboutUs'
import Portfolio from './Components/UseFullLinks/Portfolio/Portfolio'
import Contact from './Components/UseFullLinks/ContactUs/Contact'
import Career from './Components/UseFullLinks/Career/Career'
import Blog from './Components/UseFullLinks/Blog/Blog'
import CRM from './Components/UseFullLinks/CRM/CRM'
import MLM from './Components/UseFullLinks/MLM/MLM'
import ERP from './Components/UseFullLinks/ERP/ERP'
import HMS from './Components/UseFullLinks/HMS/HMS'
import InnerCategories from './Components/UseFullLinks/Portfolio/InnerCategories'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
           <Route path="/website-development-company-in-melbourne" element={<WebsiteDev/>}/>
           <Route path='/mobile-app-development-company-in-melbourne' element={<MobileDev/>} />
           <Route path='/software-development-company-in-melbourne' element={<SoftwareDev/>}/>
           <Route path='/ux-ui-design-company-in-melbourne' element={<UxDesign/>}/>
           <Route path='/digital-marketing-company-in-melbourne' element={<Digital/>}/>
           <Route path='/seo-company-in-melbourne' element={<SeoDev/>}/>
           <Route path='/about-us' element={<AboutUs/>}/>
           <Route path='/our-portfolio' element={<Portfolio/>}/>
          <Route path="/innercategories/:category" element={<InnerCategories />} />
           <Route path='/contact-us' element={<Contact/>}/>
           <Route path='/career' element={<Career/>}/>
           <Route path='/our-blog' element={<Blog/>}/>
           <Route path="/crm-software-development-company-in-melbourne" element={<CRM />} />
           <Route path="/mlm-software-development-company-in-melbourne" element={<MLM />} />
           <Route path="/erp-software-development-company-in-melbourne" element={<ERP />} />
           <Route path="/hms-software-development-company-in-melbourne" element={<HMS />} />


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
