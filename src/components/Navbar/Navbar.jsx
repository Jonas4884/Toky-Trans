import React from "react";
import "../css/bootstrap.min.css";
import logo from '../css/icons/logo_transparent.png'
function Navbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark container-fluid">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} className="w-25 h-25"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Acceuil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">INTRANET</a>
                            </li> <li className="nav-item">
                                <a className="nav-link" href="#">Informations</a>
                            </li>
                            <span>
                                <button className="btn btn-info btn-check w-100">Actualité</button>
                            </span>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}
export default Navbar;