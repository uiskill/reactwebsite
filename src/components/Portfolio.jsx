import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const titleportfolio="Office space for banking"
const Portfolio = () => {


    const [portfolio, setportfolio] = useState([
            { "id": 1,
             "imgport": "images/project-2.jpg",
             "cardtitle": "Planning and design for startup",
            "cardtext":"Instantly remaining up certainly to necessary as over walk dull into son"
            },

            { "id": 2,
                "imgport": "images/project-3.jpg",
                "cardtitle": "Planning and design for startup",
               "cardtext":"Instantly remaining up certainly to necessary as over walk dull into son"
               },

               { "id": 3,
                "imgport": "images/project-4.jpg",
                "cardtitle": "Planning and design for startup",
               "cardtext":"Instantly remaining up certainly to necessary as over walk dull into son"
               },

               { "id": 4,
                "imgport": "images/project-5.jpg",
                "cardtitle": "Planning and design for startup",
               "cardtext":"Instantly remaining up certainly to necessary as over walk dull into son"
               },

               { "id": 5,
                "imgport": "images/project-6.jpg",
                "cardtitle": "Planning and design for startup",
               "cardtext":"Instantly remaining up certainly to necessary as over walk dull into son"
               },

               { "id": 6,
                "imgport": "images/project-2.jpg",
                "cardtitle": "Planning and design for startup",
               "cardtext":"Instantly remaining up certainly to necessary as over walk dull into son"
               },

       
      ]);








  return (








    <div>
<div id="projects" className="cards-2">
 <div className="container">
     <div className="row">
         <div className="col-lg-12">
             <h2 className="h2-heading">{titleportfolio}</h2>
         </div>
     </div>
     <div className="row">
         <div className="col-lg-12">

         {portfolio.map(portfolios => (

             <div className="card" key={portfolios.id}>
                 <img className="img-fluid" src={portfolios.imgport}alt="alternative"/>
                 <div className="card-body">
                     <h5 className="card-title">{portfolios.cardtitle}</h5>
                     <p className="card-text">{portfolios.cardtext} <Link className="blue no-line" to="/articles">...Read more</Link></p>
                 </div>
             </div>
        ))}
           

         </div>
     </div>
 </div> 
</div>

</div>
  )
}

export default Portfolio
