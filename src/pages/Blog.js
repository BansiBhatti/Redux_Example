import Navbar from './Navbar'
import Footer from './Footer'
import './Product.css'
import './Blog.css'
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'


const Blog = () => {
    return (
        <>
            <Navbar />

            <div className="products-hero">
                <h1>Solar Energy Insights</h1>
                <p>
                    Stay up to date with the latest solar technology, savings tips, and industry news.
                </p>
                <div className="breadcrumb">
                    <span>Home</span>
                    <span> / </span>
                    <span className="active">Blog</span>
                </div>
            </div>

            <div className="blog-search-section">

                <div className="blog-search-box">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Search articles..." />
                </div>

                <div className="blog-filters">
                    <button className="filter-btn active">All</button>
                    <button className="filter-btn">Savings</button>
                    <button className="filter-btn">Education</button>
                    <button className="filter-btn">Incentives</button>
                    <button className="filter-btn">Technology</button>
                    <button className="filter-btn">Maintenance</button>
                    <button className="filter-btn">Environment</button>
                    <button className="filter-btn">Sustainability</button>
                    <button className="filter-btn">Getting Started</button>
                </div>
            </div>

            <section className="blog-section">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={p1} alt="blog1" />
                                </div>
                                <div className="blog-body">
                                    <div className="blog-meta">
                                        <span className="blog-badge">Savings</span>
                                        <span className="blog-date">Feb 20, 2026</span>
                                    </div>
                                    <h4 className="blog-title">How Solar Panels Save You Money: A Complete Breakdown</h4>
                                    <p className="blog-desc">Discover the real numbers behind solar savings, from reduced electricity bills to increased home value...</p>
                                    <div className="blog-author">
                                        <img src="https://i.pravatar.cc/40?img=1" alt="author" className="author-avatar" />
                                        <div>
                                            <p className="author-name">James Rivera</p>
                                            <p className="author-time">7 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={p2} alt="blog2" />
                                </div>
                                <div className="blog-body">
                                    <div className="blog-meta">
                                        <span className="blog-badge">Education</span>
                                        <span className="blog-date">Feb 20, 2026</span>
                                    </div>
                                    <h4 className="blog-title">How Solar Energy Works: A Complete Guide</h4>
                                    <p className="blog-desc">Understand the science behind solar panels and how they convert sunlight into electricity for your home...</p>
                                    <div className="blog-author">
                                        <img src="https://i.pravatar.cc/40?img=2" alt="author" className="author-avatar" />
                                        <div>
                                            <p className="author-name">Dr. Sarah Mitchell</p>
                                            <p className="author-time">8 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={p3} alt="blog3" />
                                </div>
                                <div className="blog-body">
                                    <div className="blog-meta">
                                        <span className="blog-badge">Incentives</span>
                                        <span className="blog-date">Feb 15, 2026</span>
                                    </div>
                                    <h4 className="blog-title">The Federal Solar Tax Credit: Everything You Need to Know</h4>
                                    <p className="blog-desc">A comprehensive guide to the Investment Tax Credit and how it can save you thousands on installation...</p>
                                    <div className="blog-author">
                                        <img src="https://i.pravatar.cc/40?img=3" alt="author" className="author-avatar" />
                                        <div>
                                            <p className="author-name">Mark Thompson</p>
                                            <p className="author-time">6 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={p1} alt="blog4" />
                                </div>
                                <div className="blog-body">
                                    <div className="blog-meta">
                                        <span className="blog-badge">Technology</span>
                                        <span className="blog-date">Feb 10, 2026</span>
                                    </div>
                                    <h4 className="blog-title">Battery Storage in 2026: Is It Worth the Investment?</h4>
                                    <p className="blog-desc">An in-depth look at the latest home battery systems and whether adding storage makes financial sense...</p>
                                    <div className="blog-author">
                                        <img src="https://i.pravatar.cc/40?img=4" alt="author" className="author-avatar" />
                                        <div>
                                            <p className="author-name">Lisa Chen</p>
                                            <p className="author-time">9 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={p2} alt="blog5" />
                                </div>
                                <div className="blog-body">
                                    <div className="blog-meta">
                                        <span className="blog-badge">Maintenance</span>
                                        <span className="blog-date">Feb 5, 2026</span>
                                    </div>
                                    <h4 className="blog-title">How to Keep Your Solar Panels Running at Peak Performance</h4>
                                    <p className="blog-desc">Simple maintenance tips that can extend the life of your solar system and maximize energy output...</p>
                                    <div className="blog-author">
                                        <img src="https://i.pravatar.cc/40?img=5" alt="author" className="author-avatar" />
                                        <div>
                                            <p className="author-name">James Rivera</p>
                                            <p className="author-time">5 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={p3} alt="blog6" />
                                </div>
                                <div className="blog-body">
                                    <div className="blog-meta">
                                        <span className="blog-badge">Environment</span>
                                        <span className="blog-date">Jan 28, 2026</span>
                                    </div>
                                    <h4 className="blog-title">The Environmental Impact of Going Solar</h4>
                                    <p className="blog-desc">How switching to solar energy reduces your carbon footprint and contributes to a cleaner planet...</p>
                                    <div className="blog-author">
                                        <img src="https://i.pravatar.cc/40?img=6" alt="author" className="author-avatar" />
                                        <div>
                                            <p className="author-name">Dr. Sarah Mitchell</p>
                                            <p className="author-time">7 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            {/* Newsletter */}
            <section className="newsletter-section">
                <div className="newsletter-card">
                    <span className="service-badge">Newsletter</span>
                    <h2>Stay in the Loop</h2>
                    <p>Subscribe to our newsletter for the latest solar energy articles, savings tips, and industry updates.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" className="newsletter-input" />
                        <button className="newsletter-btn">Subscribe</button>
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    )
}

export default Blog