// Services.jsx
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-section">
      {/* Crystal Healing Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="row g-3 img-twice position-relative h-100">
                <div className="col-6">
                  <img 
                    className="img-fluid bg-light p-3 fade-in" 
                    src="about-bg1.jpeg" 
                    alt="Crystal Healing" 
                  />
                </div>
                <div className="col-6 align-self-end">
                  <img 
                    className="img-fluid bg-light p-3 fade-in" 
                    src="about-bg2.jpeg" 
                    alt="Crystal Therapy" 
                  />
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="h-100 position-relative">
                {/* Background faded text for Crystal Healing - NEW ADDITION */}
                <div className="services-background-text">Crystals</div>
                
                <div className="position-relative z-2">
                  <p className="text-primary text-uppercase mb-2 services-subtitle">Healing Services</p>
                  <div className="services-title-container">
                    <h1 className="display-6 mb-4 services-title">Crystal Healing</h1>
                  </div>
                  
                  <p className="services-text">
                    Holistic therapy using natural crystals to balance energy, clear negativity, 
                    and enhance wellbeing. Personalized remedies including bracelets and stones.
                  </p>
                  
                  <div className="row g-2 mb-4 services-features">
                    <div className="col-sm-6 fade-in">
                      <i className="fa fa-check text-primary me-3 services-check-icon"></i>
                      <span className="services-feature-text">Chakra Balancing</span>
                    </div>
                    <div className="col-sm-6 fade-in">
                      <i className="fa fa-check text-primary me-3 services-check-icon"></i>
                      <span className="services-feature-text">Stress Relief</span>
                    </div>
                    <div className="col-sm-6 fade-in">
                      <i className="fa fa-check text-primary me-3 services-check-icon"></i>
                      <span className="services-feature-text">Emotional Clarity</span>
                    </div>
                    <div className="col-sm-6 fade-in">
                      <i className="fa fa-check text-primary me-3 services-check-icon"></i>
                      <span className="services-feature-text">Aura Cleansing</span>
                    </div>
                  </div>
                  
                  <p className="services-text mb-4">
                    <strong>Duration:</strong> 60-90 minutes
                  </p>
                  
                  <a className="btn btn-primary py-3 px-5 services-btn fade-in" href="">
                    Book Session
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reiki Healing Section */}
      <div className="container-xxl py-5 reversed-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="h-100 position-relative">
                {/* Background faded text for Reiki Healing - NEW ADDITION */}
                <div className="services-background-text reiki-bg-text">Reiki</div>
                
                <div className="position-relative z-2">
                  <p className="text-primary text-uppercase mb-2 services-subtitle">Healing Services</p>
                  <div className="services-title-container">
                    <h1 className="display-6 mb-4 services-title">Reiki Energy Healing</h1>
                  </div>
                  
                  <p className="services-text">
                    Gentle energy therapy promoting deep relaxation and natural healing. 
                    Clears energy blockages and restores harmony to mind, body, and spirit.
                  </p>
                  
                  <div className="row g-2 mb-4 services-features">
                    <div className="col-sm-6 fade-in">
                      <i className="fa fa-check text-primary me-3 services-check-icon"></i>
                      <span className="services-feature-text">Anxiety Relief</span>
                    </div>
                    <div className="col-sm-6 fade-in">
                      <i className="fa fa-check text-primary me-3 services-check-icon"></i>
                      <span className="services-feature-text">Physical Healing</span>
                    </div>
                    <div className="col-sm-6 fade-in">
                      <i className="fa fa-check text-primary me-3 services-check-icon"></i>
                      <span className="services-feature-text">Better Sleep</span>
                    </div>
                    <div className="col-sm-6 fade-in">
                      <i className="fa fa-check text-primary me-3 services-check-icon"></i>
                      <span className="services-feature-text">Enhanced Immunity</span>
                    </div>
                  </div>
                  
                  <p className="services-text mb-4">
                    <strong>Duration:</strong> 60-90 minutes<br/>
                    <small>Crystal Reiki also available</small>
                  </p>
                  
                  <a className="btn btn-primary py-3 px-5 services-btn fade-in" href="">
                    Book Session
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="row g-3 img-twice position-relative h-100">
                <div className="col-6">
                  <img 
                    className="img-fluid bg-light p-3 fade-in" 
                    src="about-bg3.jpeg" 
                    alt="Reiki Session" 
                  />
                </div>
                <div className="col-6 align-self-end">
                  <img 
                    className="img-fluid bg-light p-3 fade-in" 
                    src="about-bg4.jpeg" 
                    alt="Energy Work" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;