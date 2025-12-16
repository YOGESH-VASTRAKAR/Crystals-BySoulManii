import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show back to top button when scrolled 300px
      if (scrollPosition > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer position-relative bg-dark text-white-50 py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            {/* Left Column - Brand Info */}
            <div className="col-lg-6 pe-lg-5">
              <Link to="/" className="navbar-brand">
                <img 
                  src="/crystalbysoulmanii-logo-final-light.png" 
                  alt="Crystal by Soulmanii" 
                  className="footer-logo"
                />
              </Link>
              <p className="footer-description">
                Experience the transformative power of crystal healing and energy therapy. 
                We provide personalized holistic healing sessions to balance your mind, body, and spirit.
              </p>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-2"></i>
                <span className="footer-contact-text">Delhi NCR, India</span>
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-2"></i>
                <span className="footer-contact-text">+91 98765 43210</span>
              </p>
              <p className="mb-4">
                <i className="fa fa-envelope me-2"></i>
                <span className="footer-contact-text">info@crystalbysoulmanii.com</span>
              </p>
              <div className="d-flex footer-social-links mt-4">
                <a className="btn btn-sm-square btn-primary" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-sm-square btn-primary" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-sm-square btn-primary" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-sm-square btn-primary" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Right Column - Links & Newsletter */}
            <div className="col-lg-6 ps-lg-5">
              <div className="row g-4">
                {/* Links Container - Always Side by Side */}
                <div className="col-12 d-flex links-container">
                  {/* Quick Links */}
                  <div className="col-sm-6 pe-3">
                    <h5 className="text-primary mb-4 footer-heading">Quick Links</h5>
                    <Link className="btn btn-link footer-link" to="/">Home</Link>
                    <Link className="btn btn-link footer-link" to="/about-me">About Me</Link>
                    <Link className="btn btn-link footer-link" to="/services">Services</Link>
                    <Link className="btn btn-link footer-link" to="/crystals">Crystals</Link>
                  </div>

                  {/* Healing Services */}
                  <div className="col-sm-6 ps-3">
                    <h5 className="text-primary mb-4 footer-heading">Healing Services</h5>
                    <Link className="btn btn-link footer-link" to="/services#crystal-healing">Crystal Healing</Link>
                    <Link className="btn btn-link footer-link" to="/services#reiki">Reiki Energy</Link>
                    <Link className="btn btn-link footer-link" to="/services#consultation">Crystal Consultation</Link>
                    <Link className="btn btn-link footer-link" to="/contact-us">Book Session</Link>
                  </div>
                </div>

                {/* Newsletter - Full width below links */}
                <div className="col-12 mt-4">
                  <h5 className="text-primary mb-4 footer-heading">Stay Connected</h5>
                  <div className="position-relative w-100 mb-2">
                    <input 
                      className="form-control bg-secondary border-0 w-100 ps-4 pe-5 footer-input" 
                      type="email"
                      placeholder="Enter Your Email" 
                      style={{height: '60px'}}
                    />
                    <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-2 me-2">
                      <i className="fa fa-paper-plane text-primary fs-4"></i>
                    </button>
                  </div>
                  <p className="mb-0 footer-newsletter-text">
                    Subscribe for healing tips, crystal insights, and special offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid bg-dark text-white border-top border-secondary py-4 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              &copy; {new Date().getFullYear()}{' '}
              <Link className="border-bottom footer-copyright-link" to="/">
                <span className="copyright-crystal">Crystal</span>{' '}
                <span className="copyright-soulmanii">by Soul Manii</span>
              </Link>
              , All Right Reserved.
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}

      {/* Back to Top Button - Conditionally rendered */}
      {showBackToTop && (
        <button 
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
          onClick={scrollToTop}
          aria-label="Back to Top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default Footer;