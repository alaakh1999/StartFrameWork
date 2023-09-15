import React from 'react';
import { Link ,NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-body-tertiary container-fluid fixed-top py-4 animate__animated animate__slideInDown">
                <div className="container">
                    <Link className="navbar-brand fw-bolder fs-2 text-white" to='/'>START FRAMEWORK</Link>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item me-3">
                                <NavLink className="nav-link  fw-bold text-white mt-3 px-2 mt-mb-0" to="about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link  fw-bold text-white mt-3 px-2 mt-mb-0" to="portfolio">PORTFOlIO</NavLink>
                            </li>
                            <li className="nav-item me-3 rounded-3">
                                <NavLink className="nav-link  fw-bold text-white mt-3 px-2 mt-mb-0" to="contact">CONTACT</NavLink>
                            </li>
                           

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
<button _ngcontent-poq-c20="" type="button" data-bs-toggle="collapse" 
data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
 aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler collapsed">
    <span _ngcontent-poq-c20="" class="navbar-toggler-icon"></span>
</button> 

