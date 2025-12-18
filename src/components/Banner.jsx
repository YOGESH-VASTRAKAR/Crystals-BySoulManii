// Banner.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Banner.css';

const Banner = ({ title }) => {
  const location = useLocation();
  
  // Current page name based on path
  const getPageName = () => {
    const path = location.pathname;
    if (path.includes('about-me') || path.includes('about')) return 'About Me';
    if (path.includes('services')) return 'Services';
    if (path.includes('crystals')) return 'Crystals';
    if (path.includes('testimonial')) return 'Testimonial';
    if (path.includes('contact-us') || path.includes('contact')) return 'Contact Us';
    return 'Home';
  };

  return (
    <div className="simple-banner">
      {/* Background Image */}
      <img 
        src="/footer-bg.jpg" 
        alt="Page Banner" 
        className="banner-background"
      />
      
      {/* Banner Content */}
      <div className="banner-content">
        <h1 className="page-title">
          {title || getPageName()}
        </h1>
        
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-home">
            Home
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">
            {title || getPageName()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;