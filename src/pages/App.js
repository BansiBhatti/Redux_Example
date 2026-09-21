
import './App.css';
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
// import { useNavigate } from 'react-router';
import Navbar from './Navbar'
import Footer from './Footer'
  ;


export function App() {
  // const navigate = useNavigate();


  return (
    <>
      {/* <h1>ReactJS</h1>
      <p style={{ backgroundColor: "red" }}>lorem</p> 
      <button onClick={()=> navigate("/test")}>Go to Test</button> */}

      <Navbar />


      <div className='hero'>
        <div className='hero-inner'>

          <div className='leftHero'>
            <button className='top-btn'>GO Solar Today</button>

            <h1>Power Your Home
              <span className="gradient-text">
                Sustainably
              </span>
            </h1>

            <p>Harness the power of the sun to reduce your energy bills and protect the environment.
              SolarShift delivers professional installation, premium equipment, and savings you can count on
            </p>

            <div className="button-group">

              <button className="quote-btn">
                Get Free Quote
              </button>

              <button className="call-btn"> Call (555) 763-2748</button>

            </div>

            <p>Join 10,000+ homeowners who switched to solar</p>


            <div className="stats-section">
              <div className="stats-section-grid">
                <div className="stat-block">
                  <h2>25,000+</h2>
                  <p>Tree Saved</p>
                </div>
                <div className="stat-block">
                  <h2>8,500+</h2>
                  <p>Tons CO2 Offset</p>
                </div>
              </div>
            </div>

          </div>


          <div className="card">

            <h2>Estimate Your Savings</h2>

            <p>See how much you could save with solar</p>

            <label>Your State</label>
            <select>
              <option>Arizona</option>
              <option>California</option>
              <option>Texas</option>
            </select>

            <div className="slider-section">
              <div className="slider-header">
                <label>Monthly Electric Bill</label>
                <span className="slider-value">$150</span>
              </div>
              <input type="range" min="50" max="500" defaultValue="150" className="slider" />
              <div className="slider-range">
                <span>$50</span>
                <span>$500</span>
              </div>
            </div>

            <div className="stats">
              <div className="box box-green">
                <h3>$1,989</h3>
                <p>Annual Savings</p>
              </div>
              <div className="box box-green">
                <h3>11.3 tons</h3>
                <p>CO2 Offset/yr</p>
              </div>
              <div className="box box-brown">
                <h3>8.8 yrs</h3>
                <p>Payback Period</p>
              </div>
              <div className="box box-blue">
                <h3>$7,500</h3>
                <p>Federal Tax Credit</p>
              </div>
            </div>

            <button>Get Free Assessmenty</button>

          </div>

        </div>
      </div>

      <div className="counter-section">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path fill="#060a13" fill-opacity="1" d="M0,224L34.3,218.7C68.6,213,137,203,206,186.7C274.3,171,343,149,411,149.3C480,149,549,171,617,186.7C685.7,203,754,213,823,208C891.4,203,960,181,1029,186.7C1097.1,192,1166,224,1234,234.7C1302.9,245,1371,235,1406,229.3L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg>

        <div className="counter-grid">
          <div className="col-md-3">
            <h2>10K+</h2>
            <p>Installations</p>
          </div>
          <div className="col-md-3">
            <h2>$50M+</h2>
            <p>Saved for Customers</p>
          </div>
          <div className="col-md-3">
            <h2>98%</h2>
            <p>Customer Satisfaction</p>
          </div>
          <div className="col-md-3">
            <h2>50</h2>
            <p>States Served</p>
          </div>
        </div>

      </div>

      <section className="service-section">

        <div className="service-header">
          <span className="service-badge">Services</span>
          <h2>Complete Solar Solutions</h2>
          <p>From initial consultation to ongoing maintenance, we handle every aspect of your solar energy journey.</p>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
            </div>
            <h3>Residential Solar</h3>
            <p>Custom-designed rooftop solar systems for homeowners. Reduce your electricity bills by up to 90% with a system tailored to your home's energy needs.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
            </div>
            <h3>Commercial Solar</h3>
            <p>Large-scale solar installations for businesses and commercial properties. Lower operating costs and demonstrate your commitment to sustainability.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="11" rx="2" /><path d="M22 11h2v4h-2" /><path d="M0 11h2v4H0" /></svg>
            </div>
            <h3>Battery Storage</h3>
            <p>Store excess solar energy for use during peak hours or outages. Pair with solar panels for complete energy independence and peace of mind.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
            </div>
            <h3>Maintenance & Repair</h3>
            <p>Keep your solar system running at peak performance with our comprehensive maintenance plans and rapid repair services.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            </div>
            <h3>Energy Monitoring</h3>
            <p>Real-time monitoring of your solar system's performance. Track production, consumption, and savings through our intuitive dashboard.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            </div>
            <h3>Roof Assessment</h3>
            <p>Professional evaluation of your roof's solar potential. We analyze orientation, shading, and structural integrity before installation.</p>
          </div>

        </div>
      </section>

      <section className="product-section">

        <div className="service-header">
          <span className="service-badge">Products</span>
          <h2>premium Solar Equipment</h2>
          <p>We partner with industry-leading manufacturers to deliver the highest quality solar panels, inverters, and batteries.</p>
        </div>

        <div className='product-grid'>

          <div className='product-card'>
            <div><img src={p1} alt='SunPower Maxeon 6'></img></div>
            <h3>SunPower Maxeon 6</h3>
            <p>Industry-leading efficiency with an unmatched 40-year warranty. Ideal for homeowners who want the best performance per square foot.</p>

            <div className='product-stats'>
              <div className="product-stat"><strong>600W</strong><span>Wattage</span></div>
              <div className="product-stat"><strong>21.3%</strong><span>Efficiency</span></div>
              <div className="product-stat"><strong>25yr</strong><span>Warranty</span></div>
            </div>
          </div>

          <div className='product-card'>
            <div><img src={p3} alt='Canadian Solar HiKu7'></img></div>
            <h3>Canadian Solar HiKu7</h3>
            <p>High-wattage panels designed for commercial installations. Maximize power output with fewer panels and lower installation costs.</p>

            <div className='product-stats'>
              <div className="product-stat"><strong>600W</strong><span>Wattage</span></div>
              <div className="product-stat"><strong>21.3%</strong><span>Efficiency</span></div>
              <div className="product-stat"><strong>25yr</strong><span>Warranty</span></div>
            </div>
          </div>

          <div className='product-card'>
            <div><img src={p2} alt='LG NeON H+'></img></div>
            <h3>LG NeON H+</h3>
            <p>Excellent value with high efficiency and proven reliability. A top choice for residential installations across the country.</p>

            <div className='product-stats'>
              <div className="product-stat"><strong>600W</strong><span>Wattage</span></div>
              <div className="product-stat"><strong>21.3%</strong><span>Efficiency</span></div>
              <div className="product-stat"><strong>25yr</strong><span>Warranty</span></div>
            </div>
          </div>
        </div>

      </section>

      <section className="financing-section">

        <div className="service-header">
          <span className="service-badge">Financing</span>
          <h2>Flexible Payment Options</h2>
          <p>We make going solar affordable with multiple financing options to fit every budget.</p>
        </div>

        <div className="financing-grid">

          <div className="financing-card">
            <span className="financing-tag">Best Value</span>
            <h3>Cash Purchase</h3>
            <p>Pay upfront and maximize your return on investment with the lowest total cost of ownership.</p>
            <ul>
              <li>Highest long-term savings</li>
              <li>Full ownership from day one</li>
              <li>Eligible for all tax credits</li>
              <li>No monthly payments</li>
            </ul>
            <button className="financing-btn">Learn More</button>
          </div>

          <div className="financing-card">
            <span className="financing-tag">Most Popular</span>
            <h3>Solar Lease</h3>
            <p>Start saving immediately with no upfront cost. We own and maintain the system while you enjoy lower rates.</p>
            <ul>
              <li>$0 down payment</li>
              <li>Predictable monthly payments</li>
              <li>Maintenance included</li>
              <li>Immediate savings</li>
            </ul>
            <button className="financing-btn">Learn More</button>
          </div>

          <div className="financing-card">
            <span className="financing-tag">Zero Risk</span>
            <h3>Power Purchase Agreement</h3>
            <p>Buy the power, not the panels. Pay a fixed per-kWh rate that is lower than your current utility rate.</p>
            <ul>
              <li>No upfront investment</li>
              <li>Lower rate than utility</li>
              <li>Performance guaranteed</li>
              <li>Escalator protection</li>
            </ul>
            <button className="financing-btn">Learn More</button>
          </div>

        </div>
      </section>

      <section className="process-section">

        <div className="service-header">
          <span className="service-badge">Process</span>
          <h2>How It Works</h2>
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

      <section className="testimonial-section">

        <div className="service-header">
          <span className="service-badge">Testimonials</span>
          <h2>What Our Customers Say</h2>
          <p>Hear from homeowners and business owners who made the switch to solar.</p>
        </div>

        <input type="radio" name="slider" id="t1" defaultChecked />
        <input type="radio" name="slider" id="t2" />

        <div className="testimonial-slider">

          <div className="slides">

            <div className='slide'>

              <div className="testimonial-card">
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span></div>
                <p>“SolarShift made the whole process painless. From the energy
                  audit to final inspection, they were professional and transparent every step of the way.”
                </p>
                <h4>Michael Rodriguez</h4>
                <span>Homeowner in Austin</span>
              </div>

              <div className="testimonial-card">
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span></div>
                <p>
                  “SolarShift made the whole process painless. From the energy
                  audit to final inspection, they were professional and transparent every step of the way.”
                </p>
                <h4>Sarah Chen</h4>
                <span>Business Owner</span>
              </div>

              <div className="testimonial-card">
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span></div>
                <p>
                  “SolarShift made the whole process painless. From the energy audit to final inspection,
                  they were professional and transparent every step of the way.”
                </p>
                <h4>David Thompson</h4>
                <span>Homeowner in Dallas</span>
              </div>

            </div>

            <div className='slide'>

              <div className="testimonial-card">
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span></div>
                <p>“SolarShift made the whole process painless. From the energy
                  audit to final inspection, they were professional and transparent every step of the way.”
                </p>
                <h4>Michael Rodriguez</h4>
                <span>Homeowner in Austin</span>
              </div>

              <div className="testimonial-card">
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span></div>
                <p>
                  “SolarShift made the whole process painless. From the energy
                  audit to final inspection, they were professional and transparent every step of the way.”
                </p>
                <h4>Sarah Chen</h4>
                <span>Business Owner</span>
              </div>

              <div className="testimonial-card">
                <div className="stars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span></div>
                <p>
                  “SolarShift made the whole process painless. From the energy audit to final inspection,
                  they were professional and transparent every step of the way.”
                </p>
                <h4>David Thompson</h4>
                <span>Homeowner in Dallas</span>
              </div>

            </div>


          </div>

        </div>


        <div className="dots">
          <label htmlFor="t1"></label>
          <label htmlFor="t2"></label>
        </div>

      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Go Solar?</h2>
          <p>
            Get a free, no-obligation quote and find out how much you can save with solar
            energy. Our experts will design a custom system for your home or business.
          </p>

          <div className="cta-buttons">
            <button className="btn primary">Get Free Quote</button>
            <button className="btn outline">Call (555) 763-2748</button>
          </div>
        </div>
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

      <section className="contact-section">

        <div className="service-header">
          <span className="service-badge">Contact</span>
          <h2>Get Your Free Quote</h2>
          <p>
            Ready to start saving with solar? Fill out the form below and one of our solar consultants will be in touch within 24 hours.</p>
        </div>

        <div className="row g-4">

          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control contact-input" placeholder="John Doe" required />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control contact-input"
              placeholder="john@example.com"
            />
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
            <textarea
              className="form-control contact-input"
              rows="6"
              placeholder="Tell us about your property and energy goals..."
            ></textarea>
          </div>

          <div className="col-12">
            <button className="btn submit-btn">
              Submit Request <span>→</span>
            </button>
          </div>

        </div>

        <div className="office-hours-card">
          <h6 className="office-title">Office Hours</h6>

          <div className="hours-row">
            <span className="day">Monday - Friday</span>
            <span className="time">8:00 AM - 6:00 PM</span>
          </div>

          <div className="hours-row">
            <span className="day">Saturday</span>
            <span className="time">9:00 AM - 3:00 PM</span>
          </div>

          <div className="hours-row">
            <span className="day">Sunday</span>
            <span className="time fw-bold">Closed</span>
          </div>
        </div>
      </section>

      <Footer />
    </>

  );
}


