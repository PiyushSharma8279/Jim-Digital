import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import WebsiteDev from './Components/Home/InnerPages/WebsiteDev/WebsiteDev'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
           <Route path="/website-dev" element={<WebsiteDev />} />


        </Routes>




      </BrowserRouter>

    </>
  )
}

export default App
