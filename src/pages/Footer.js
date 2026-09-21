export default function Footer() {

    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    
                    <div className="row footer-top">


                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="footer-logo mb-3">
                                <span className="logo-icon">✳</span>
                                <span className="logo-text">Solar<span className="logo-green">Shift</span></span>
                            </div>
                            <p className="footer-desc">Harness the power of the sun. Save money. Save the planet.</p>
                            <div className="social-icons">
                                <a href="#" className="social-btn"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="social-btn"><i className="bi bi-linkedin"></i></a>
                                <a href="#" className="social-btn"><i className="bi bi-twitter-x"></i></a>
                            </div>
                        </div>


                        <div className="col-lg-2 col-md-6 mb-4">
                            <h6 className="footer-heading">SOLUTIONS</h6>
                            <ul className="footer-links">
                                <li><a href="#">Residential Solar</a></li>
                                <li><a href="#">Commercial Solar</a></li>
                                <li><a href="#">Battery Storage</a></li>
                                <li><a href="#">EV Charging</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4">
                            <h6 className="footer-heading">RESOURCES</h6>
                            <ul className="footer-links">
                                <li><a href="#">Savings Calculator</a></li>
                                <li><a href="#">Incentives & Rebates</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>


                        <div className="col-lg-2 col-md-6 mb-4">
                            <h6 className="footer-heading">COMPANY</h6>
                            <ul className="footer-links">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>


                        <div className="col-lg-3 col-md-6 mb-4">
                            <h6 className="footer-heading">CONTACT US</h6>
                            <ul className="footer-contact">
                                <li>
                                    <i className="bi bi-geo-alt-fill contact-icon"></i>
                                    <span>890 Solar Way<br />Austin, TX 78701</span>
                                </li>
                                <li>
                                    <i className="bi bi-telephone-fill contact-icon"></i>
                                    <span>(555) 763-2748</span>
                                </li>
                                <li>
                                    <i className="bi bi-envelope-fill contact-icon"></i>
                                    <span>hello@solarshift.com</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="footer-bottom">
                        <span>© 2026 SolarShift. All rights reserved.</span>
                        <div className="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Style Guide</a>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}