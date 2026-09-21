import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Service.css'
import './Product.css'
import './App.css'

const Service = () => {
    return (
        <>
            <Navbar />

            <div className="products-hero">
                <h1>Our Services</h1>
                <p>
                    SComplete solar energy solutions for residential and commercial properties,
                    from design to installation and beyond.
                </p>
                <div className="breadcrumb">
                    <span>Home</span>
                    <span> / </span>
                    <span className="active">Services</span>
                </div>
            </div>

            <section className="services-section">
                <div className="service-header">
                    <h2>Complete Solar Solutions</h2>
                    <p>We handle every aspect of your solar journey, from initial assessment to ongoing maintenance.</p>
                </div>

                <div className="container">
                    <div className="row g-4">

                        <div className="col-lg-4 col-md-6">
                            <div className="serv-card">
                                <div className="serv-icon">
                                    <i className="bi bi-sun"></i>
                                </div>
                                <h4>Residential Solar</h4>
                                <p>Custom rooftop solar systems designed for your home's unique energy profile and roof configuration.</p>
                                <ul className="serv-features">
                                    <li><i className="bi bi-check2"></i> Custom system design</li>
                                    <li><i className="bi bi-check2"></i> Premium panel selection</li>
                                    <li><i className="bi bi-check2"></i> Professional installation</li>
                                    <li><i className="bi bi-check2"></i> Permit handling</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="serv-card">
                                <div className="serv-icon">
                                    <i className="bi bi-building"></i>
                                </div>
                                <h4>Commercial Solar</h4>
                                <p>Large-scale solar solutions for businesses, warehouses, and commercial properties.</p>
                                <ul className="serv-features">
                                    <li><i className="bi bi-check2"></i> ROI analysis</li>
                                    <li><i className="bi bi-check2"></i> Scalable systems</li>
                                    <li><i className="bi bi-check2"></i> Tax incentive guidance</li>
                                    <li><i className="bi bi-check2"></i> Minimal disruption</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="serv-card">
                                <div className="serv-icon">
                                    <i className="bi bi-battery-half"></i>
                                </div>
                                <h4>Battery Storage</h4>
                                <p>Store excess solar energy for nighttime use or power outages with advanced battery systems.</p>
                                <ul className="serv-features">
                                    <li><i className="bi bi-check2"></i> Backup power</li>
                                    <li><i className="bi bi-check2"></i> Peak shaving</li>
                                    <li><i className="bi bi-check2"></i> Time-of-use optimization</li>
                                    <li><i className="bi bi-check2"></i> Expandable capacity</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="serv-card">
                                <div className="serv-icon">
                                    <i className="bi bi-tools"></i>
                                </div>
                                <h4>Maintenance & Repair</h4>
                                <p>Keep your solar system running at peak performance with our comprehensive maintenance plans.</p>
                                <ul className="serv-features">
                                    <li><i className="bi bi-check2"></i> Annual inspections</li>
                                    <li><i className="bi bi-check2"></i> Panel cleaning</li>
                                    <li><i className="bi bi-check2"></i> Rapid repair service</li>
                                    <li><i className="bi bi-check2"></i> Performance reports</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="serv-card">
                                <div className="serv-icon">
                                    <i className="bi bi-graph-up"></i>
                                </div>
                                <h4>Energy Monitoring</h4>
                                <p>Real-time monitoring of your solar system's performance through our intuitive dashboard.</p>
                                <ul className="serv-features">
                                    <li><i className="bi bi-check2"></i> Live production data</li>
                                    <li><i className="bi bi-check2"></i> Savings tracking</li>
                                    <li><i className="bi bi-check2"></i> Mobile app access</li>
                                    <li><i className="bi bi-check2"></i> Alert notifications</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="serv-card">
                                <div className="serv-icon">
                                    <i className="bi bi-house-check"></i>
                                </div>
                                <h4>Roof Assessment</h4>
                                <p>Professional evaluation of your roof's solar potential before any installation begins.</p>
                                <ul className="serv-features">
                                    <li><i className="bi bi-check2"></i> Shading analysis</li>
                                    <li><i className="bi bi-check2"></i> Structural check</li>
                                    <li><i className="bi bi-check2"></i> Orientation mapping</li>
                                    <li><i className="bi bi-check2"></i> Free consultation</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="process-section">

                <div className="service-header">
                    <h2>Our Installation Process</h2>
                    <p>
                       A streamlined four-step process that gets your solar system up and running efficiently.
                    </p>
                </div>

                <div className="process-grid">

                    <div className="process-step">
                        <div className="circle">1</div>
                        <h3>Free Consultation</h3>
                        <p>
                            We assess your energy needs, evaluate your property, and design a custom solar solution.
                        </p>
                    </div>

                    <div className="process-step">
                        <div className="circle">2</div>
                        <h3>Design & Permits</h3>
                        <p>
                            Our engineers create detailed plans and handle all permitting and paperwork.
                        </p>
                    </div>

                    <div className="process-step">
                        <div className="circle">3</div>
                        <h3>Professional Installation</h3>
                        <p>
                            Our certified installers complete the job quickly with minimal disruption.
                        </p>
                    </div>

                    <div className="process-step">
                        <div className="circle">4</div>
                        <h3>Activation & Monitoring</h3>
                        <p>
                            We activate your system and provide ongoing monitoring and support.
                        </p>
                    </div>

                </div>

            </section>

             <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Start Saving?</h2>
                    <p>
                        Get a free solar assessment and discover your savings potential today.
                    </p>

                    <div className="cta-buttons">
                        <button className="btn primary">Get Free Quote</button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Service