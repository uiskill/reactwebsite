import React from 'react'
import { Link } from "react-router-dom";
const details="images/details-1.png"
const detailstitle="Office spaces should be unique they don’t need to look the same"
const point1="At every tiled on ye defer do. No attention suspected oh difficult. Fond his say"
const point2="Old meet cold find come whom. The sir park sake bred. Wonder matter now"
const point3="Can estate esteem assure fat roused. Am performed on existence as discourse"
const point4="existence as discourse is. Pleasure friendly at marriage blessing or should"
const Details = () => {
  return (
    <div>
      

    <div id="details" className="basic-2">
        <img className="decoration-star" src="images/decoration-star.svg" alt="alternative"/>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-xl-5">
                    <div className="image-container">
                        <img className="img-fluid" src={details} alt="alternative"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-7">
                    <div className="text-container">
                        <h2>{detailstitle}</h2>
                        <ul className="list-unstyled li-space-lg">
                            <li className="d-flex">
                                <i className="fas fa-square"></i>
                                <div className="flex-grow-1">{point1}</div>
                            </li>
                            <li className="d-flex">
                                <i className="fas fa-square"></i>
                                <div className="flex-grow-1">{point2}</div>
                            </li>
                            <li className="d-flex">
                                <i className="fas fa-square"></i>
                                <div className="flex-grow-1">{point3}</div>
                            </li>
                            <li className="d-flex">
                                <i className="fas fa-square"></i>
                                <div className="flex-grow-1">{point4}</div>
                            </li>
                        </ul>
                        <Link className="btn-solid-reg" to="/articles">Get started</Link>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Details
