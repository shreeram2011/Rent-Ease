import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/NavRoutes/Home.jsx'
import ContactUs from '../Components/NavRoutes/ContactUs.jsx'
import Blog from '../Components/NavRoutes/Blog.jsx'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path="/blog" element={<Blog />}/>
            <Route path="/contact-us" element={<ContactUs />}/>
        </Routes>
    </div>
  )
}

export default Routing