import React from 'react';
import './Navbar.scss';


const Navbar = () => {
  return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbar'>
                <div className="container-fluid">

                    <a className="navbar-brand" href="#carousel">Interior  Company</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{flexGrow:'0'}}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                             <i className="fa-solid fa-house"></i>
                             <a className="nav-link " href="#carousel">Home</a>
                        </li>
    
                        <li className="nav-item">
                        <i className="fa-solid fa-screwdriver-wrench"></i>
                             <a className="nav-link" href="#services">Service</a>
                        </li>

                        <li className="nav-item">
                        <i className="fa-solid fa-circle-info"></i>
                             <a className="nav-link" href='#about'>About</a>       
                        </li>

                        <li className="nav-item">
                        <i className="fa-solid fa-people-group"></i>
                             <a className="nav-link" href='#team'>Our Team</a>       
                        </li>

                        <li className="nav-item">
                        <i className="fa-solid fa-briefcase"></i>
                              <a className="nav-link" href='#gallery'>Portfolio</a>       
                        </li>

                        <li className="nav-item">
                        <i className="fa-solid fa-calculator"></i>
                              <a className="nav-link" href='#carousel'>Calculator</a>       
                        </li>

                        <li className="nav-item">
                        <i className="fa-solid fa-address-book"></i>
                              <a className="nav-link" href='#contact'>Contact</a>       
                        </li>

                    </ul>
                    </div>
                </div>
             </nav>
  )
}

export default Navbar