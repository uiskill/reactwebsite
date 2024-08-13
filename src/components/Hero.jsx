import React from 'react'
const herot1="Beautifying office spaces"
const testhero="Is education residence conveying and sore. Suppose shyness say ten behaved morning had. Any propose assist compliment occasional too reasonably"
const heroimage1="images/decoration-star.svg"
const heroimage2="images/decoration-star.svg"
const heroimg3="images/header.png"
const Hero = () => {
  return (
    <div>

    <header id="header" className="header">
        <img className="decoration-star" src={heroimage1} alt="alternative"/>
        <img className="decoration-star-2" src={heroimage2} alt="alternative"/>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-xl-5">
                    <div className="text-container">
                        <h1 className="h1-large">{herot1}</h1>
                        <p className="p-large">{testhero}</p>
                        <a className="btn-solid-lg" href="#introduction">More details</a>
                        <a className="btn-outline-lg" href="#contact">Contact us</a>
                    </div> 
                </div> 
                <div className="col-lg-5 col-xl-7">
                    <div className="image-container">
                        <img className="img-fluid" src={heroimg3} alt="alternative"/>
                    </div> 
                </div>
            </div>
        </div>
    </header>
       </div>
  )
}

export default Hero
