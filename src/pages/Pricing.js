import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Pricing.css'
import './Product.css'
import './App.css'


const Pricing = () => {
    return (
        <>
            <Navbar />

            <div className="products-hero">
                <h1>Solar System Pricing</h1>
                <p>
                    Transparent pricing for every home size. All systems include installation, permits, and monitoring.
                </p>
                <div className="breadcrumb">
                    <span>Home</span>
                    <span> / </span>
                    <span className="active">Pricing</span>
                </div>
            </div>

            <section className="pricing-section">

                <div className="service-header">
                    <span className="service-badge">Pricing</span>
                    <h2>Choose Your System Size</h2>
                    <p>
                        Every system is custom-designed for your home. These packages provide a starting framework.
                    </p>
                </div>

                <div className="container">
                    <div className="row g-4 justify-content-center">


                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-card">
                                <h3 className="plan-name">Starter</h3>
                                <p className="plan-sub">Small homes & apartments</p>
                                <h2 className="plan-price">$15,000</h2>
                                <p className="plan-note">4 kW system (before tax credit)</p>
                                <ul className="plan-features">
                                    <li className="check"><i className="bi bi-check2"></i> 4 kW solar panel system</li>
                                    <li className="check"><i className="bi bi-check2"></i> 10-12 panels installed</li>
                                    <li className="check"><i className="bi bi-check2"></i> Microinverter included</li>
                                    <li className="check"><i className="bi bi-check2"></i> 25-year panel warranty</li>
                                    <li className="cross"><i className="bi bi-x"></i> Battery storage add-on</li>
                                    <li className="cross"><i className="bi bi-x"></i> EV charger installation</li>
                                </ul>
                                <button className="plan-btn">Get Quote</button>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-card popular">
                                <div className="popular-badge">Most Popular</div>
                                <h3 className="plan-name">Home</h3>
                                <p className="plan-sub">Average-sized homes</p>
                                <h2 className="plan-price">$25,000</h2>
                                <p className="plan-note">8 kW system (before tax credit)</p>
                                <ul className="plan-features">
                                    <li className="check"><i className="bi bi-check2"></i> 8 kW solar panel system</li>
                                    <li className="check"><i className="bi bi-check2"></i> 20-24 panels installed</li>
                                    <li className="check"><i className="bi bi-check2"></i> String inverter included</li>
                                    <li className="check"><i className="bi bi-check2"></i> 25-year panel warranty</li>
                                    <li className="check"><i className="bi bi-check2"></i> Battery storage compatible</li>
                                    <li className="check"><i className="bi bi-check2"></i> Performance monitoring</li>
                                </ul>
                                <button className="plan-btn popular-btn">Get Quote</button>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-card">
                                <h3 className="plan-name">Premium</h3>
                                <p className="plan-sub">Large homes & high usage</p>
                                <h2 className="plan-price">$40,000</h2>
                                <p className="plan-note">12 kW system (before tax credit)</p>
                                <ul className="plan-features">
                                    <li className="check"><i className="bi bi-check2"></i> 12 kW solar panel system</li>
                                    <li className="check"><i className="bi bi-check2"></i> 30-36 panels installed</li>
                                    <li className="check"><i className="bi bi-check2"></i> Premium inverter system</li>
                                    <li className="check"><i className="bi bi-check2"></i> 25-year panel warranty</li>
                                    <li className="check"><i className="bi bi-check2"></i> Battery storage included</li>
                                    <li className="check"><i className="bi bi-check2"></i> EV charger ready</li>
                                </ul>
                                <button className="plan-btn">Get Quote</button>
                            </div>
                        </div>

                    </div>
                </div>

                <p className=''>
                    Prices shown are before the 30% federal tax credit. Final pricing depends on your roof, location, and energy needs.
                </p>
            </section>

            <section className="faq-section">

                <div className="service-header">
                    <span className="service-badge">FAQ</span>
                    <h2>Frequently Asked Questions</h2>
                    <p>
                        Common questions about solar energy and our installation process.</p>
                </div>

                <div className="faq-container">

                    <details className="faq-item" >
                        <summary>How much does a solar system cost?</summary>
                        <div className="Line"></div>
                        <p className="faq-answer">The average residential solar system costs...</p>
                    </details>

                    <details className="faq-item">
                        <summary>How long does installation take?</summary>
                        <div className="Line"></div>
                        <p className="faq-answer">Installation typically takes 1–3 days...</p>
                    </details>

                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Not Sure Which System Size?</h2>
                    <p>
                        Our solar experts will analyze your energy usage
                         and recommend the perfect system size for your home.
                    </p>

                    <div className="cta-buttons">
                        <button className="btn primary">Get Free Assessment</button>
                        <button className="btn outline">Call (555) 763-2748</button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Pricing