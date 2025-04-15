import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './page/Navbar'
import Footer from './page/Footer'
import Home from './page/Home'
import NotFound from './page/PageNotFound'

function App() {
  return (
    <div className='min-h-screen text-white bg-gray-950'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
