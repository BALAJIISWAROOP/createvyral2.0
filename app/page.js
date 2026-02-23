export default function Home() {
    return (
        <>
            <header className="navbar">
                <div className="container nav-container">
                    <div className="logo-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <a href="#" className="logo"><img src="assets/logo.jpeg" alt="Create Vyral Logo" className="logo-img" /></a>
                    </div>
                    <nav className="nav-links">
                        <a href="#problem">Why Us</a>
                        <a href="#services">Services</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#community">Community</a>
                        <a href="#academy" style={{ color: '#9d4edd', fontWeight: '600' }}>Academy</a>
                    </nav>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYi066imcFPe6NXdG9qme4-vcKGuEnrqQsfvy5e7bllug_Lw/viewform"
                        target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">Join Now</a>
                    <button className="menu-toggle" aria-label="Toggle menu">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </header>
            <div className="mobile-menu">
                <button className="close-menu"><i className="fa-solid fa-xmark"></i></button>
                <a href="#problem">Why Us</a>
                <a href="#services">Services</a>
                <a href="#pricing">Pricing</a>
                <a href="#community">Community</a>
                <a href="#academy" style={{ color: '#9d4edd', fontWeight: '600' }}>Academy</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYi066imcFPe6NXdG9qme4-vcKGuEnrqQsfvy5e7bllug_Lw/viewform"
                    target="_blank" rel="noopener noreferrer" className="btn btn-primary">Join Now</a>
            </div>
            <section id="hero" className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <div className="hero-ecosystem-tag">India's Largest Creator Ecosystem</div>
                        <h1 className="hero-title">
                            Creators focus on content.<br />
                            <span className="text-highlight">We handle everything else.</span>
                        </h1>
                        <p className="hero-subtitle">
                            Editing. Shoots. Content Ideas. Scheduling.<br />
                            All under one affordable monthly plan.
                        </p>
                        <div className="hero-buttons">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYi066imcFPe6NXdG9qme4-vcKGuEnrqQsfvy5e7bllug_Lw/viewform"
                                target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">🚀 Join Create Vyral</a>
                            <a href="#contact" className="btn btn-outline btn-lg">📩 Apply as a Creator</a>
                        </div>
                    </div>
                    <div className="hero-visuals">
                        <div className="floating-card card-1">
                            <i className="fa-solid fa-wand-magic-sparkles"></i>
                            <span>Ideas Generated</span>
                        </div>
                        <div className="floating-card card-2">
                            <i className="fa-solid fa-arrow-trend-up"></i>
                            <span>10x Growth</span>
                        </div>
                        <div className="hero-graphic">
                            <div className="graphic-content">
                                <i className="fa-solid fa-bolt text-neon" style={{ fontSize: '4rem', marginBottom: '20px' }}></i>
                                <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>Vyral System</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="problem" className="problem-section">
                <div className="container">
                    <h2 className="section-title text-center">Why most creators quit before going vyral</h2>
                    <div className="problem-grid">
                        <div className="problem-card">
                            <div className="icon-box"><i className="fa-regular fa-clock"></i></div>
                            <h3>Time Consuming</h3>
                            <p>Editing takes too much time. You spend hours on cuts instead of creating.</p>
                        </div>
                        <div className="problem-card">
                            <div className="icon-box"><i className="fa-solid fa-money-bill-wave"></i></div>
                            <h3>Expensive Shoots</h3>
                            <p>Professional shoots are expensive & inconsistent for students.</p>
                        </div>
                        <div className="problem-card">
                            <div className="icon-box"><i className="fa-regular fa-lightbulb"></i></div>
                            <h3>No Ideas</h3>
                            <p>Running out of content ideas after just 10–15 posts.</p>
                        </div>
                        <div className="problem-card">
                            <div className="icon-box"><i className="fa-solid fa-people-group"></i></div>
                            <h3>No Support</h3>
                            <p>Doing it all alone leads to burnout & inconsistency.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="solution" className="solution-section">
                <div className="container solution-container">
                    <div className="solution-text">
                        <h2 className="section-title">Create Vyral is your content team — <span className="text-neon">without hiring one.</span></h2>
                        <p className="section-desc">
                            We provide creators everything they need to grow: editing, shooting, ideas, and planning — at a price students can afford.
                        </p>
                        <div className="stats-row">
                            <div className="stat-item">
                                <span className="stat-number">30+</span>
                                <span className="stat-label">Videos/mo</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="pricing" className="pricing-section">
                <div className="container">
                    <h2 className="section-title text-center">Simple. Affordable. Creator-first.</h2>
                    <div className="pricing-card-wrapper">
                        <div className="pricing-card featured">
                            <div className="card-badge">MOST POPULAR</div>
                            <h3 className="plan-name">Starter Creator Plan</h3>
                            <div className="price">
                                <span className="currency">₹</span>1,500<span className="period">/ month</span>
                            </div>
                            <ul className="features-list">
                                <li><i className="fa-solid fa-check"></i> 30 edited short-form videos</li>
                                <li><i className="fa-solid fa-check"></i> 10 professional shoot slots</li>
                                <li><i className="fa-solid fa-check"></i> 30-day content calendar</li>
                                <li><i className="fa-solid fa-check"></i> Content ideas & hooks</li>
                                <li><i className="fa-solid fa-check"></i> Creator support team</li>
                            </ul>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYi066imcFPe6NXdG9qme4-vcKGuEnrqQsfvy5e7bllug_Lw/viewform"
                                target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">👉 Get Started for ₹1,500</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="services-section">
                <div className="container">
                    <h2 className="section-title text-center">Everything a creator needs to grow</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <i className="fa-solid fa-film"></i>
                            <h3>Video Editing</h3>
                            <p>Reels, Shorts, YouTube</p>
                        </div>
                        <div className="service-card">
                            <i className="fa-solid fa-camera"></i>
                            <h3>Professional Shoots</h3>
                            <p>High quality production</p>
                        </div>
                        <div className="service-card">
                            <i className="fa-regular fa-lightbulb"></i>
                            <h3>Content Ideas</h3>
                            <p>Scripts & Hooks</p>
                        </div>
                        <div className="service-card">
                            <i className="fa-solid fa-microphone"></i>
                            <h3>Dubbing</h3>
                            <p>Voiceovers & Audio</p>
                        </div>
                        <div className="service-card">
                            <i className="fa-regular fa-calendar"></i>
                            <h3>Planning</h3>
                            <p>Scheduling & Strategy</p>
                        </div>
                        <div className="service-card">
                            <i className="fa-solid fa-arrow-trend-up"></i>
                            <h3>Growth</h3>
                            <p>Creator Support</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="audience" className="audience-section">
                <div className="container">
                    <h2 className="section-title text-center">Built for creators like you</h2>
                    <div className="audience-marquee">
                        <div className="marquee-content">
                            <span className="tag">College Creators</span>
                            <span className="tag">Aspiring Influencers</span>
                            <span className="tag">Meme Page Admins</span>
                            <span className="tag">Podcasters</span>
                            <span className="tag">Personal Brands</span>
                            <span className="tag">Small Businesses</span>
                            <span className="tag">College Creators</span>
                            <span className="tag">Aspiring Influencers</span>
                        </div>
                    </div>
                </div>
            </section>
            <section id="community" className="community-section">
                <div className="container">
                    <h2 className="section-title">More than a service.<br />A creator movement.</h2>
                    <p className="community-text">
                        Create Vyral is building India’s first <strong>creator backbone</strong>, starting from colleges and growing into a national creator ecosystem.
                    </p>
                </div>
            </section>
            <section id="students" className="student-section">
                <div className="container">
                    <div className="student-box">
                        <h2>Made for students. Built from a university.</h2>
                        <div className="student-features">
                            <div className="feat">
                                <i className="fa-solid fa-graduation-cap"></i>
                                <span>Started from Mohan Babu University</span>
                            </div>
                            <div className="feat">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <span>Affordable for students</span>
                            </div>
                            <div className="feat">
                                <i className="fa-solid fa-laptop-code"></i>
                                <span>Skill-based opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cta" className="cta-section text-center">
                <div className="container">
                    <h2 className="cta-title">Ready to grow without stress?</h2>
                    <div className="cta-buttons" style={{ marginTop: '40px', marginBottom: '40px' }}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYi066imcFPe6NXdG9qme4-vcKGuEnrqQsfvy5e7bllug_Lw/viewform"
                            target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ marginRight: '20px' }}>🚀 Join as a Creator</a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYi066imcFPe6NXdG9qme4-vcKGuEnrqQsfvy5e7bllug_Lw/viewform"
                            target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">🎬 Join as an Editor / Shooter</a>
                    </div>
                </div>
            </section>
            <section id="academy" className="academy-section">
                <div className="container">
                    <div className="academy-hero text-center">
                        <div className="academy-badge">New Platform</div>
                        <h2 className="academy-title">Master Content. Build Influence. <br /><span className="academy-highlight">Get Placed.</span></h2>
                        <p className="academy-subtitle">India’s first Creator & Editing Mastery Platform that trains, scales, and places talent inside a real creator ecosystem.</p>
                        <div className="academy-hero-buttons">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYi066imcFPe6NXdG9qme4-vcKGuEnrqQsfvy5e7bllug_Lw/viewform"
                                target="_blank" rel="noopener noreferrer" className="btn btn-academy-primary btn-lg">Enroll Now</a>
                            <a href="#academy-courses" className="btn btn-academy-outline btn-lg">Explore Courses</a>
                        </div>
                        <div className="academy-hero-visual">
                            <div className="visual-dashboard">
                                <i className="fa-solid fa-chart-line"></i> Analytics Tracker
                            </div>
                            <div className="visual-timeline">
                                <i className="fa-solid fa-scissors"></i> Editing Timeline Active
                            </div>
                        </div>
                    </div>
                    <div className="academy-info text-center">
                        <h3>What is CreateVyral Academy?</h3>
                        <p>CreateVyral Academy is a structured LMS platform built to train the next generation of content creators and professional editors.</p>
                        <div className="academy-skills-grid">
                            <span><i className="fa-solid fa-circle-check"></i> Video editing mastery</span>
                            <span><i className="fa-solid fa-circle-check"></i> Brand pitching & negotiation</span>
                            <span><i className="fa-solid fa-circle-check"></i> Audience targeting</span>
                            <span><i className="fa-solid fa-circle-check"></i> AI tools for creators</span>
                            <span><i className="fa-solid fa-circle-check"></i> Content psychology</span>
                            <span><i className="fa-solid fa-circle-check"></i> Monetization systems</span>
                        </div>
                    </div>
                    <div id="academy-courses" className="academy-courses-wrapper">
                        <h3 className="text-center" style={{ marginBottom: '40px', fontSize: '2rem' }}>Explore Curriculum</h3>
                        <div className="academy-course-grid">
                            <div className="academy-course-card">
                                <div className="course-icon"><i className="fa-solid fa-clapperboard"></i></div>
                                <h4>Editing Mastery Program</h4>
                                <ul>
                                    <li><i className="fa-solid fa-check"></i> Premiere Pro & AE</li>
                                    <li><i className="fa-solid fa-check"></i> Reel optimization</li>
                                    <li><i className="fa-solid fa-check"></i> Vyral editing frameworks</li>
                                </ul>
                            </div>
                            <div className="academy-course-card">
                                <div className="course-icon"><i className="fa-solid fa-rocket"></i></div>
                                <h4>Creator Growth Blueprint</h4>
                                <ul>
                                    <li><i className="fa-solid fa-check"></i> Niche selection</li>
                                    <li><i className="fa-solid fa-check"></i> Target audience analysis</li>
                                    <li><i className="fa-solid fa-check"></i> Brand positioning</li>
                                    <li><i className="fa-solid fa-check"></i> Content strategy</li>
                                </ul>
                            </div>
                            <div className="academy-course-card">
                                <div className="course-icon"><i className="fa-solid fa-handshake-angle"></i></div>
                                <h4>Monetization Mastery</h4>
                                <ul>
                                    <li><i className="fa-solid fa-check"></i> Brand outreach</li>
                                    <li><i className="fa-solid fa-check"></i> Pricing strategies</li>
                                    <li><i className="fa-solid fa-check"></i> Negotiation techniques</li>
                                    <li><i className="fa-solid fa-check"></i> Contract basics</li>
                                </ul>
                            </div>
                            <div className="academy-course-card">
                                <div className="course-icon"><i className="fa-solid fa-microchip"></i></div>
                                <h4>AI Content & Automation</h4>
                                <ul>
                                    <li><i className="fa-solid fa-check"></i> AI avatars</li>
                                    <li><i className="fa-solid fa-check"></i> AI video generation</li>
                                    <li><i className="fa-solid fa-check"></i> Automation posting</li>
                                    <li><i className="fa-solid fa-check"></i> Content scaling</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="academy-placement">
                        <div className="placement-content">
                            <h3>Learn. Perform. <span>Get Placed.</span></h3>
                            <p>Top-performing editors will be recruited directly into CreateVyral’s in-house team.</p>
                            <div className="placement-perks">
                                <span><i className="fa-solid fa-briefcase"></i> Paid Assignments</span>
                                <span><i className="fa-solid fa-hand-holding-dollar"></i> Rev Share</span>
                                <span><i className="fa-solid fa-star"></i> Brand Deals</span>
                            </div>
                            <div className="placement-badge">Performance-Based Placement Model</div>
                        </div>
                    </div>
                    <div className="academy-steps text-center">
                        <h3>How It Works</h3>
                        <div className="steps-container">
                            <div className="step-item">
                                <div className="step-num">01</div>
                                <h4>Enroll</h4>
                                <p>Join the Academy</p>
                            </div>
                            <div className="step-line"></div>
                            <div className="step-item">
                                <div className="step-num">02</div>
                                <h4>Train</h4>
                                <p>Complete Training + Real Assignments</p>
                            </div>
                            <div className="step-line"></div>
                            <div className="step-item">
                                <div className="step-num">03</div>
                                <h4>Qualify</h4>
                                <p>Get Placed or Brand Access</p>
                            </div>
                        </div>
                    </div>
                    <div id="academy-pricing" className="academy-pricing-section">
                        <h3 className="text-center" style={{ marginBottom: '40px', fontSize: '2rem' }}>Membership</h3>
                        <div className="academy-pricing-grid">
                            <div className="academy-pricing-card">
                                <h4>Editing Mastery</h4>
                                <div className="price"><span>₹</span>4,999</div>
                                <ul>
                                    <li><i className="fa-solid fa-check"></i> Recorded modules</li>
                                    <li><i className="fa-solid fa-check"></i> Basic assignments</li>
                                </ul>
                            </div>
                            <div className="academy-pricing-card featured-academy">
                                <div className="academy-card-badge">RECOMMENDED</div>
                                <h4>All Access Pass</h4>
                                <div className="price"><span>₹</span>9,999</div>
                                <ul>
                                    <li><i className="fa-solid fa-check"></i> All Mastery Courses</li>
                                    <li><i className="fa-solid fa-check"></i> Live workshops</li>
                                    <li><i className="fa-solid fa-check"></i> Placement eligibility</li>
                                    <li><i className="fa-solid fa-check"></i> Internship chance</li>
                                </ul>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYi066imcFPe6NXdG9qme4-vcKGuEnrqQsfvy5e7bllug_Lw/viewform"
                                    target="_blank" rel="noopener noreferrer" className="btn btn-academy-primary btn-block">Enroll Now</a>
                            </div>
                            <div className="academy-pricing-card">
                                <h4>Creator Mastery</h4>
                                <div className="price"><span>₹</span>5,999</div>
                                <ul>
                                    <li><i className="fa-solid fa-check"></i> Creator blueprint</li>
                                    <li><i className="fa-solid fa-check"></i> Community access</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="academy-cta text-center">
                        <h2 style={{ fontSize: '3rem', marginBottom: '30px', fontWeight: '800' }}>Don’t Just Learn Content.<br /><span style={{ color: '#9d4edd' }}>Become The System Behind It.</span></h2>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYi066imcFPe6NXdG9qme4-vcKGuEnrqQsfvy5e7bllug_Lw/viewform"
                            target="_blank" rel="noopener noreferrer" className="btn btn-academy-primary btn-lg">Start Your Journey</a>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container footer-container">
                    <div className="footer-brand">
                        <h3>Create Vyral.</h3>
                        <p>Your backstage team for vyral content.</p>
                    </div>
                    <div className="footer-contact">
                        <a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a>
                        <a href="#"><i className="fa-solid fa-phone"></i> Contact Us</a>
                    </div>
                    <div className="footer-copyright">
                        <p>&copy; 2024 Create Vyral – All rights reserved</p>
                    </div>
                </div>
            </footer>
            <div className="sticky-cta-mobile">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYi066imcFPe6NXdG9qme4-vcKGuEnrqQsfvy5e7bllug_Lw/viewform"
                    target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">Getting Started - ₹1,500</a>
            </div>
        </>
    );
}
