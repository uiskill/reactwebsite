import React from 'react'
const servicestitle="Services that we offer"
const servicediscription="Greatly hearted has who believe. Drift allow green son walls years for blush. Sir margaret drawings repeated recurred exercise laughing may you Do repeated whatever to welcomed absolute no. Fat surprise although more words outlived"
const point5="At every tiled on ye defer do. No attention suspected oh difficult. Fond his say"
const point6="Old meet cold find come whom. The sir park sake bred. Wonder matter now"
const point7="Can estate esteem assure fat roused. Am performed on existence as discourse"
const service1="Space analysis and planning"
const service2="Design and color choosing"
const service3="Materials and delivery"
const service4="Execute the concept"
const service5="Creating great atmosphere"
const service6="Evaluation and reporting"
const serimage="images/decoration-star.svg"
const serimage2="images/details-2.png"


const Services = () => {
  return (
    <div>
       <div id="services" className="cards-1 bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="text-container">
                        <h2>{servicestitle}</h2>
                        <p>{servicediscription}</p>
                        <ul className="list-unstyled li-space-lg">
                            <li className="d-flex">
                                <i className="fas fa-square"></i>
                                <div className="flex-grow-1">{point5}</div>
                            </li>
                            <li className="d-flex">
                                <i className="fas fa-square"></i>
                                <div className="flex-grow-1">{point6}</div>
                            </li>
                            <li className="d-flex">
                                <i className="fas fa-square"></i>
                                <div className="flex-grow-1">{point7}</div>
                            </li>
                        </ul>
                    </div> 
                </div> 
                <div className="col-lg-7">
                    <div className="card-container">

                        <div className="card">
                            <div className="card-icon">
                                <span className="fas fa-rocket"></span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{service1}</h5>
                            </div>
                        </div>
                   

                        <div className="card">
                            <div className="card-icon">
                                <span className="far fa-clock"></span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{service2}</h5>
                            </div>
                        </div>
             

               
                        <div className="card">
                            <div className="card-icon">
                                <span className="far fa-comments"></span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{service3}</h5>
                            </div>
                        </div>
              
                        <div className="card">
                            <div className="card-icon">
                                <span className="fas fa-tools"></span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{service4}</h5>
                            </div>
                        </div>
              
                        <div className="card">
                            <div className="card-icon">
                                <span className="fas fa-chart-pie"></span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{service5}</h5>
                            </div>
                        </div>
           
                        <div className="card">
                            <div className="card-icon">
                                <span className="far fa-chart-bar"></span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{service6}</h5>
                            </div>
                        </div>
                 

                    </div>
                </div>
            </div> 
        </div> 
    </div> 

    <div className="basic-3">
        <img className="decoration-star" src={serimage} alt="alternative"/>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-xl-7">
                    <div className="text-container">
                        <h2>A beautiful and well organized office space increases productivity</h2>
                        <p>On it differed repeated wandered required in. Then girl neat why yet knew rose spot. Moreover property we he kindness greatest be oh striking laughter. In me he at collecting affronting principles apartments. Has visitor law attacks pretend you calling own excited painted. Contented attending</p>
                        <a className="btn-solid-reg" href="article.html">Get started</a>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-5">
                    <div className="image-container">
                        <img className="img-fluid" src={serimage2} alt="alternative"/>
                    </div>
                </div>
            </div>
    </div> 



    <div className="basic-4 bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h4>Our team of highly skilled designers and interior construction workers can deliver above your level of expections</h4>
                    <a className="btn-solid-lg" href="#contact">Get quote</a>
                </div>
            </div>
        </div> 
    </div> 
  
    </div>
    </div>
  )
}

export default Services
