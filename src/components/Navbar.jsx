import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>

    <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
        <div className="container">

 

      <Link className="navbar-brand logo-text" to="/ ">Office Space</Link>

            <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ms-auto navbar-nav-scroll">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#header">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#details">Details</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
                        <ul className="dropdown-menu" aria-labelledby="dropdown01">
                            <li><Link className="dropdown-item" to="/articles">Article Details</Link></li>
                            <li><div className="dropdown-divider"></div></li>
                            <li><Link className="dropdown-item" to="/term">Terms Conditions</Link></li>
                            <li><div className="dropdown-divider"></div></li>
                            <li><Link className="dropdown-item" to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </li>
                </ul>
                <span className="nav-item">
                    <a className="btn-outline-sm" href="#contact">Contact us</a>
                </span>
            </div>
        </div>
    </nav>

    </div>
  )
}

export default Navbar
