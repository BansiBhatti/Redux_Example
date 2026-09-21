import Navbar from './Navbar'
import Footer from './Footer'
import './Product.css'
import './Contact.css'


const Contact = () => {
    return (
        <>
            <Navbar />

            <div className="products-hero">
                <h1>Contact Us</h1>
                <p>
                    Ready to go solar? Get in touch for a free consultation and personalized quote.
                </p>
                <div className="breadcrumb">
                    <span>Home</span>
                    <span> / </span>
                    <span className="active">Contact</span>
                </div>
            </div>

            <section className="contact-page-section">
                <div className="container">
                    <div className="row g-5">

                        {/* Left  */}
                        <div className="col-lg-7">
                            <h2 className="contact-form-title">Request a Free Quote</h2>
                            <p className="contact-form-sub">Fill out the form below and a solar consultant will reach out within 24 hours.</p>

                            <div className="row g-3 mt-2">
                                <div className="col-md-6">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control contact-input" placeholder="John Doe" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control contact-input" placeholder="john@example.com" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Service Interest</label>
                                    <select className="form-select contact-input">
                                        <option value="">Select a service...</option>
                                        <option value="solar">Solar Installation</option>
                                        <option value="battery">Battery Storage</option>
                                        <option value="maintenance">Maintenance</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-control contact-input" rows="6" placeholder="Tell us about your energy needs or any questions you have..."></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn submit-btn">Submit Request →</button>
                                </div>
                            </div>
                        </div>

                        {/* Right  */}
                        <div className="col-lg-5">
                            <h2 className="contact-form-title">Get In Touch</h2>
                            <p className="contact-form-sub">Our team is ready to help you start your solar journey.</p>

                            <div className="contact-info-list mt-4">

                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>
                                    <div>
                                        <h6>Email</h6>
                                        <p>hello@solarshift.com</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="bi bi-telephone-fill"></i>
                                    </div>
                                    <div>
                                        <h6>Phone</h6>
                                        <p>(555) 763-2748</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>
                                    <div>
                                        <h6>Address</h6>
                                        <p>890 Solar Way, Austin, TX 78701</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="bi bi-clock-fill"></i>
                                    </div>
                                    <div>
                                        <h6>Business Hours</h6>
                                        <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                                        <p>Sat: 9:00 AM - 3:00 PM</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110844.43861232198!2d-97.84193!3d30.26715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b592d8d2ac09%3A0x290d0a1b1f8f5ae6!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SolarShift Location"
                ></iframe>
            </div>
            
            <Footer />
        </>
    )
}

export default Contact