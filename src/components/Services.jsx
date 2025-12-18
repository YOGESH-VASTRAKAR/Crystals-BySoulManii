import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Services.css';

const Services = () => {
  const navigate = useNavigate(); 
  const handleReadMoreClick = () => {
    window.scrollTo(0, 0);
    navigate('/services');
  };

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
                {/* Background faded text for Crystal Healing */}
                <div className="services-background-text">Crystals</div>
                
                <div className="position-relative z-2">
                  <p className="text-primary text-uppercase mb-2 services-subtitle">Healing Services</p>
                  <div className="services-title-container">
                    <h1 className="display-6 mb-4 services-title">Crystal Healing</h1>
                  </div>
                  
                  <p className="services-text">
                    <strong>Crystal Healing</strong> is a holistic therapy that uses natural crystals to balance 
                    energy, clear negativity, and enhance wellbeing. Each crystal carries unique vibrational 
                    properties that interact with your energy field to promote healing on physical, emotional, 
                    and spiritual levels.
                  </p>
                  
                  {/* Features in ROW format for ALL screen sizes - Text in one line */}
                  <div className="row g-1 mb-4 services-features">
                    <div className="col-6 fade-in">
                      <i className="fa fa-check text-primary me-2 services-check-icon"></i>
                      <span className="services-feature-text">Chakra Balancing</span>
                    </div>
                    <div className="col-6 fade-in">
                      <i className="fa fa-check text-primary me-2 services-check-icon"></i>
                      <span className="services-feature-text">Energy Cleansing</span>
                    </div>
                    <div className="col-6 fade-in">
                      <i className="fa fa-check text-primary me-2 services-check-icon"></i>
                      <span className="services-feature-text">Emotional Healing</span>
                    </div>
                    <div className="col-6 fade-in">
                      <i className="fa fa-check text-primary me-2 services-check-icon"></i>
                      <span className="services-feature-text">Stress Relief</span>
                    </div>
                  </div>
                  
                  {/* Read More button - Now redirects to /services page */}
                  <button 
                    className="btn btn-primary py-3 px-5 services-btn fade-in" 
                    onClick={handleReadMoreClick}
                  >
                    Read More
                  </button>
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
                {/* Background faded text for Reiki Healing */}
                <div className="services-background-text reiki-bg-text">Reiki</div>
                
                <div className="position-relative z-2">
                  <p className="text-primary text-uppercase mb-2 services-subtitle">Healing Services</p>
                  <div className="services-title-container">
                    <h1 className="display-6 mb-4 services-title">Reiki Energy Healing</h1>
                  </div>
                  
                  <p className="services-text">
                    <strong>Reiki Healing</strong> is a gentle, non-invasive Japanese energy therapy that promotes 
                    deep relaxation, emotional balance, and natural healing. Through channeling universal life energy, 
                    Reiki helps clear blockages, reduce stress, and restore harmony to mind, body, and spirit.
                  </p>
                  
                  {/* Features in ROW format for ALL screen sizes - Text in one line */}
                  <div className="row g-1 mb-4 services-features">
                    <div className="col-6 fade-in">
                      <i className="fa fa-check text-primary me-2 services-check-icon"></i>
                      <span className="services-feature-text">Anxiety Relief</span>
                    </div>
                    <div className="col-6 fade-in">
                      <i className="fa fa-check text-primary me-2 services-check-icon"></i>
                      <span className="services-feature-text">Physical Healing</span>
                    </div>
                    <div className="col-6 fade-in">
                      <i className="fa fa-check text-primary me-2 services-check-icon"></i>
                      <span className="services-feature-text">Better Sleep</span>
                    </div>
                    <div className="col-6 fade-in">
                      <i className="fa fa-check text-primary me-2 services-check-icon"></i>
                      <span className="services-feature-text">Enhanced Immunity</span>
                    </div>
                  </div>
                  
                  {/* Read More button - Now redirects to /services page */}
                  <button 
                    className="btn btn-primary py-3 px-5 services-btn fade-in" 
                    onClick={handleReadMoreClick}
                  >
                    Read More
                  </button>
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