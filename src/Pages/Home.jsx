import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Counter from '../components/Counter'
import Call from '../components/Call'
import Details from '../components/Details'
import Services from '../components/Services'

import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <div>
 
      <Navbar/>
      <Hero/>
      <Counter/>
      <Call/>
      <Details/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
