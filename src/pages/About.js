import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './About.css'
import './Product.css'
import p1 from './p1.jpg'
import team1 from './team1.jpg'
import team2 from './team2.jpg'
import team3 from './team3.jpg'
import team4 from './team4.jpg'


const About = () => {
    return (
        <>
            <Navbar />

            <div className="products-hero">
                <h1>About SolarShift</h1>
                <p>
                    Powering homes and businesses with clean, affordable solar energy since 2018.
                </p>
                <div className="breadcrumb">
                    <span>Home</span>
                    <span> / </span>
                    <span className="active">About</span>
                </div>
            </div>

            <section className="mission-section">
                <div className="container">
                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">
                            <span className="service-badge">Our Mission</span>
                            <h2 className="mission-title">Powering a Sustainable Future</h2>
                            <p className="mission-quote">"To make clean energy accessible to every home and business, creating a world powered by sunshine, not fossil fuels."</p>
                            <p className="mission-text">SolarShift was founded in 2018 by a team of renewable energy engineers who believed solar power should be simple, affordable, and available to everyone. Starting with a single installation crew in Austin, Texas, we have grown to serve over 10,000 customers across all 50 states.</p>
                            <p className="mission-text">Our approach combines cutting-edge solar technology with personalized service. Every installation is custom-designed using satellite imagery, energy consumption analysis, and local climate data to maximize your return on investment.</p>
                        </div>


                        <div className="col-lg-6">
                            <div className="mission-img">
                                <img src={p1} alt="Solar Panels" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="container">
                    <div className="service-header">
                        <h2>Our Values</h2>
                        <p>The principles that guide every installation and interaction.</p>
                    </div>

                    <div className="row g-4">

                        <div className="col-lg-4 col-md-6">
                            <div className="value-card">
                                <div className="value-icon">
                                    <i className="bi bi-shield-check"></i>
                                </div>
                                <h4>Sustainability First</h4>
                                <p>Every decision we make is guided by our commitment to environmental stewardship and reducing carbon emissions for future generations.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="value-card">
                                <div className="value-icon">
                                    <i className="bi bi-shield-check"></i>
                                </div>
                                <h4>Quality & Reliability</h4>
                                <p>We use only premium equipment with industry-leading warranties, ensuring your system performs flawlessly for decades.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="value-card">
                                <div className="value-icon">
                                    <i className="bi bi-shield-check"></i>
                                </div>
                                <h4>Customer-Centered</h4>
                                <p>From your first consultation to ongoing support, we treat every customer like family and every home like our own.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="container">
                    <div className="service-header">
                        <h2>Meet Our Team</h2>
                        <p>The passionate experts behind your solar installation.</p>
                    </div>

                    <div className="row g-4 justify-content-center">

                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="team-card">
                                <img src={team1} alt="James Rivera" className="team-avatar" />
                                <h5>James Rivera</h5>
                                <p>CEO & Co-Founder</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="team-card">
                                <img src={team2} alt="James Rivera" className="team-avatar" />
                                <h5>Dr. Sarah Chen</h5>
                                <p>Chief Technology Officer</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="team-card">
                                <img src={team3} alt="James Rivera" className="team-avatar" />
                                <h5>Michael Okafor</h5>
                                <p>Head of Installation</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="team-card">
                                <img src={team4} alt="James Rivera" className="team-avatar" />
                                <h5>Emily Nakamura</h5>
                                <p>Customer Success Lead</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Go Solar?</h2>
                    <p>
                        Schedule a free consultation and discover how much you can save.
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

export default About
