import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const ThankYou = () => {
  return (
    <div>
       <div>
    <Navbar />
    <section className="thankyou">
      <div className="container mt-5">
         <h2 className="form-title">Thanking You</h2>
        <div className="thankyou-content">
          <img src="images/boy.svg"/>
          <div className="thankyou_content">
            <h4>I'm so grateful to you </h4>
            <p>Thank you so much for taking the time to visit my portfolio site. I truly appreciate your interest and support.</p>
            <h6>- Vikash Kaushik</h6>
          </div>

          
        </div>
      </div>
    </section>

    <Footer />
    </div>
    </div>
  )
}

export default ThankYou

