import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import WebsiteDev from './Components/Home/InnerPages/WebsiteDev/WebsiteDev'
import MobileDev from './Components/Home/InnerPages/Mobile/MobileDev'
import SoftwareDev from './Components/Home/InnerPages/Software/SoftwareDev'
import UxDesign from './Components/Home/InnerPages/UxDesign/UxDesign'
import Digital from './Components/Home/InnerPages/DigitalMarketting/Digital'

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

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
