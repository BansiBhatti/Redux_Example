import React from 'react'
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import './Product.css'
import b1 from './b1.jpg'

const Products = () => {
    return (

        <>
            <Navbar />

            <div className="products-hero">
                <h1>Solar Products</h1>
                <p>Premium solar panels, inverters, and battery storage systems from industry-leading manufacturers.</p>
                <div className="breadcrumb">
                    <span>Home</span>
                    <span> / </span>
                    <span className="active">Products</span>
                </div>
            </div>

            <section className="products-section">

                <div className="service-header">
                    <span className="service-badge">Solar Panels </span>
                    <h2>Premium Solar Panels</h2>
                    <p>We offer a curated selection of the highest-performing solar panels on the market.</p>
                </div>

                <div className="container">
                    <div className="row g-4">

                        {/* Card 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="product-card">
                                <div className="product-img">
                                    <img src={p1} alt="SunPower Maxeon 6" />
                                </div>
                                <div className="product-body">
                                    <h4 className="product-title">SunPower Maxeon 6</h4>
                                    <p className="product-desc">Industry-leading efficiency with an unmatched 40-year warranty. The gold standard for residential solar.</p>
                                    <hr className="product-divider" />
                                    <div className="product-stats">
                                        <div className="stat-item">
                                            <span className="stat-label">WATTAGE</span>
                                            <span className="stat-value">440W</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">EFFICIENCY</span>
                                            <span className="stat-value green">22.8%</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">WARRANTY</span>
                                            <span className="stat-value">40 years</span>
                                        </div>
                                    </div>
                                    <hr className="product-divider" />
                                    <ul className="product-features">
                                        <li><i className="bi bi-check2"></i> Highest efficiency available</li>
                                        <li><i className="bi bi-check2"></i> Exceptional low-light performance</li>
                                        <li><i className="bi bi-check2"></i> All-black aesthetic design</li>
                                        <li><i className="bi bi-check2"></i> Built-in microinverter option</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="product-card">
                                <div className="product-img">
                                    <img src={p2} alt="LG NeON H+" />
                                </div>
                                <div className="product-body">
                                    <h4 className="product-title">LG NeON H+</h4>
                                    <p className="product-desc">Excellent balance of performance and value. Proven reliability with millions of panels installed worldwide.</p>
                                    <hr className="product-divider" />
                                    <div className="product-stats">
                                        <div className="stat-item">
                                            <span className="stat-label">WATTAGE</span>
                                            <span className="stat-value">390W</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">EFFICIENCY</span>
                                            <span className="stat-value green">21.4%</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">WARRANTY</span>
                                            <span className="stat-value">25 years</span>
                                        </div>
                                    </div>
                                    <hr className="product-divider" />
                                    <ul className="product-features">
                                        <li><i className="bi bi-check2"></i> Enhanced durability</li>
                                        <li><i className="bi bi-check2"></i> High output in heat</li>
                                        <li><i className="bi bi-check2"></i> Slim profile design</li>
                                        <li><i className="bi bi-check2"></i> Strong wind/snow rating</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="product-card">
                                <div className="product-img">
                                    <img src={p3} alt="Canadian Solar HiKu7" />
                                </div>
                                <div className="product-body">
                                    <h4 className="product-title">Canadian Solar HiKu7</h4>
                                    <p className="product-desc">High-wattage panels ideal for commercial installations. Maximize output with fewer panels.</p>
                                    <hr className="product-divider" />
                                    <div className="product-stats">
                                        <div className="stat-item">
                                            <span className="stat-label">WATTAGE</span>
                                            <span className="stat-value">600W</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">EFFICIENCY</span>
                                            <span className="stat-value green">21.3%</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-label">WARRANTY</span>
                                            <span className="stat-value">25 years</span>
                                        </div>
                                    </div>
                                    <hr className="product-divider" />
                                    <ul className="product-features">
                                        <li><i className="bi bi-check2"></i> Commercial-grade output</li>
                                        <li><i className="bi bi-check2"></i> Lower balance of system cost</li>
                                        <li><i className="bi bi-check2"></i> Excellent degradation rate</li>
                                        <li><i className="bi bi-check2"></i> Multi-busbar technology</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="inverters-section">
                <div className="service-header">
                    <span className="service-badge">Inverters</span>
                    <h2>Solar Inverters</h2>
                    <p>The brain of your solar system — converting DC power to usable AC electricity.</p>
                </div>

                <div className="row g-4">

                    <div className="col-lg-4 col-md-6">
                        <div className="inverter-card">
                            <span className="inverter-badge">Microinverter</span>
                            <h4>Enphase IQ8+</h4>
                            <p>Panel-level optimization with module-level monitoring. Ideal for residential systems with partial shading.</p>
                            <hr className="inverter-divider" />
                            <div className="inverter-row">
                                <span className="inv-label">Type</span>
                                <span className="inv-value">Microinverter</span>
                            </div>
                            <div className="inverter-row">
                                <span className="inv-label">Warranty</span>
                                <span className="inv-value">25 years</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="inverter-card">
                            <span className="inverter-badge">String Inverter + Optimizers</span>
                            <h4>SolarEdge SE10000H</h4>
                            <p>High-efficiency string inverter with DC optimizers for panel-level performance tracking.</p>
                            <hr className="inverter-divider" />
                            <div className="inverter-row">
                                <span className="inv-label">Type</span>
                                <span className="inv-value">String Inverter + Optimizers</span>
                            </div>
                            <div className="inverter-row">
                                <span className="inv-label">Warranty</span>
                                <span className="inv-value">25 years</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="inverter-card">
                            <span className="inverter-badge">String Inverter</span>
                            <h4>SMA Sunny Tripower</h4>
                            <p>Industry-standard commercial inverter with proven reliability and remote monitoring capabilities.</p>
                            <hr className="inverter-divider" />
                            <div className="inverter-row">
                                <span className="inv-label">Type</span>
                                <span className="inv-value">String Inverter</span>
                            </div>
                            <div className="inverter-row">
                                <span className="inv-label">Warranty</span>
                                <span className="inv-value">20 years</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="battery-section">
                <div className="service-header">
                    <span className="service-badge">Battery Storage</span>
                    <h2>Home Battery Systems</h2>
                    <p>
                        Store excess solar energy for nighttime use, peak shaving, or emergency backup power
                    </p>
                </div>

                <div className="row g-4">

                    <div className="col-lg-4 col-md-6">
                        <div className="battery-card">
                            <div className="battery-img">
                                <img src={b1} alt="Tesla Powerwall 3" />
                            </div>
                            <div className="battery-body">
                                <h4>Tesla Powerwall 3</h4>
                                <p>The most popular home battery with seamless Tesla app integration and whole-home backup capability.</p>
                                <hr className="battery-divider" />
                                <div className="battery-row">
                                    <span className="bat-label">Capacity</span>
                                    <span className="bat-value">13.5 kWh</span>
                                </div>
                                <div className="battery-row">
                                    <span className="bat-label">Power Output</span>
                                    <span className="bat-value">11.5 kW</span>
                                </div>
                                <div className="battery-row">
                                    <span className="bat-label">Warranty</span>
                                    <span className="bat-value">10 years</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="battery-card">
                            <div className="battery-img">
                                <img src={b1} alt="Enphase IQ Battery 5P" />
                            </div>
                            <div className="battery-body">
                                <h4>Enphase IQ Battery 5P</h4>
                                <p>Modular battery system that scales to your needs. Pairs perfectly with Enphase microinverters.</p>
                                <hr className="battery-divider" />
                                <div className="battery-row">
                                    <span className="bat-label">Capacity</span>
                                    <span className="bat-value">5 kWh</span>
                                </div>
                                <div className="battery-row">
                                    <span className="bat-label">Power Output</span>
                                    <span className="bat-value">3.84 kW</span>
                                </div>
                                <div className="battery-row">
                                    <span className="bat-label">Warranty</span>
                                    <span className="bat-value">15 years</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="battery-card">
                            <div className="battery-img">
                                <img src={b1} alt="Generac PWRcell" />
                            </div>
                            <div className="battery-body">
                                <h4>Generac PWRcell</h4>
                                <p>High-capacity battery with smart management. Prioritize critical loads during outages automatically.</p>
                                <hr className="battery-divider" />
                                <div className="battery-row">
                                    <span className="bat-label">Capacity</span>
                                    <span className="bat-value">18 kWh</span>
                                </div>
                                <div className="battery-row">
                                    <span className="bat-label">Power Output</span>
                                    <span className="bat-value">9 kW</span>
                                </div>
                                <div className="battery-row">
                                    <span className="bat-label">Warranty</span>
                                    <span className="bat-value">10 years</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className="cta-section">
                <div className="cta-content">
                    <h2>Need Help Choosing?</h2>
                    <p>
                        Our solar experts will recommend the best equipment combination for your specific needs and budget.
                    </p>

                    <div className="cta-buttons">
                        <button className="btn primary">Get Expert Recommendation</button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Products