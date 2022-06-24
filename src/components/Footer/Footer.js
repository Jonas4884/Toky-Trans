import React from 'react';
import '../css/bootstrap.min.css'
import '../css/style.css'
import './Footer.css'
import apple from '../css/icons/logo-apple.png'
import facebook from '../css/icons/logo-facebook.png'
import twitter from '../css/icons/logo-twitter.png'
import linkedin from '../css/icons/logo-linkedin.png'
import playsotre from '../css/icons/logo-google-playstore.png'
import '../css/icons/logo-rss.png'
function Footer() {
    return (
        <>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">

                    </div>
                </div>
            </section>
            <footer className="footer-08">
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <div className="col-md-9 py-5">
                            <div className="row">
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">A propos</h2>
                                    <p>Trouvez le meilleur moyen de vous rendre de A à B, n'importe où à Madagascar</p>
                                    <ul className="ftco-footer-social p-0">
                                        <li className="ftco-animate"><a href="#"  title="Facebook">
                                            <img src={facebook} className="text-dark fbicon" alt="fb"/>
                                        </a></li>
                                        <li className="ftco-animate"><a href="#" data-toggle="tooltip"
                                                                        data-placement="top" title="Twitter">
                                            <img src={twitter} className="text-dark fbicon" alt="twitter"/>
                                        </a></li>
                                        <li className="ftco-animate"><a href="#" data-toggle="tooltip"
                                                                        data-placement="top" title="Instagram">
                                            <img src={linkedin} className="text-dark fbicon" alt="linkedin"/>
                                        </a></li>
                                    </ul>
                                </div>
                                <div className="col-md-8">
                                    <div className="row justify-content-center">
                                        <div className="col-md-12 col-lg-9">
                                            <div className="row">
                                                <div className="col-md-5 mb-md-0 mb-4 ">
                                                    <h2 className="footer-heading">Applications mobiles</h2>
                                                    <ul className="list-unstyled">
                                                        <li><a href="#" className="py-1 d-block " id="lien"> <img src={playsotre} className="fbicon" alt="playstore"/>Playstore App</a></li>
                                                        <li><a href="#" className="py-1 d-block " id="lien"><img src={apple} className="fbicon" alt="apple"/>IOS App</a></li>
                                                        <li><a href="#" className="py-1 d-block " id="lien">Aide &amp; Support</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-5 mb-md-0 mb-4">
                                                    <h2 className="footer-heading">TokyTrans</h2>
                                                    <ul className="list-unstyled">
                                                        <li><a href="#" className="py-1 d-block" id="lien">Qui sommes-nous?</a></li>
                                                        <li><a href="#" className="py-1 d-block" id="lien">Presse</a></li>
                                                        <li><a href="#" className="py-1 d-block" id="lien">Offres d'emploi</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3 py-md-5 py-4 aside-stretch-right pl-lg-5">
                            <h2 className="footer-heading footer-heading-white">Contactez-nous</h2>
                            <form action="#" className="contact-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name"></input>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email"></input>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject"></input>
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols="30" rows="3" className="form-control"
                                              placeholder="Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control submit px-3" id="lien">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;