// ServiceDetails.jsx - Clean Modern Layout
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const navigate = useNavigate();
  
  const handleBookSessionClick = () => {
    window.scrollTo(0, 0);
    navigate('/contact-us');
  };

  return (
    <div className="service-details-section">
      {/* Crystal Healing Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="row g-3 img-twice position-relative h-100">
                <div className="col-6">
                  <img 
                    className="img-fluid bg-light p-3 service-fade-in" 
                    src="about-bg1.jpeg" 
                    alt="Crystal Healing" 
                  />
                </div>
                <div className="col-6 align-self-end">
                  <img 
                    className="img-fluid bg-light p-3 service-fade-in" 
                    src="about-bg2.jpeg" 
                    alt="Crystal Therapy" 
                  />
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="h-100 position-relative">
                <div className="service-background-text">Crystals</div>
                
                <div className="position-relative z-2">
                  <p className="text-primary text-uppercase mb-2 service-subtitle">Healing Services</p>
                  <div className="service-title-container">
                    <h1 className="display-6 mb-4 service-title">Crystal Healing</h1>
                  </div>
                  
                  <div className="service-text-content">
                    <p className="service-text">
                      <strong>Crystal Healing</strong> is a holistic therapy using natural crystals to balance energy, 
                      clear negativity, and enhance well-being. Each crystal's unique vibrations interact with your 
                      energy field for physical, emotional, and spiritual healing.
                    </p>
                    <p className="service-text">
                      During sessions, crystals are placed on energy centers (chakras) to restore natural flow. 
                      Our approach blends ancient wisdom with modern techniques, offering personalized remedies 
                      including custom bracelets, healing grids, and meditation stones.
                    </p>
                    <p className="service-text">
                      Ideal for emotional release, mental clarity, or spiritual growth, crystal therapy provides 
                      a gentle pathway to inner harmony and radiant living.
                    </p>
                  </div>
                  
                  {/* BOOK MY SESSION BUTTON - Added here */}
                  <div className="service-btn-container">
                    <button 
                      className="btn btn-primary py-3 px-5 service-btn service-fade-in" 
                      onClick={handleBookSessionClick}
                    >
                      Book My Session
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Full Details Section - CLEAN MODERN LAYOUT */}
          <div className="row mt-5 pt-4">
            <div className="col-12">
              <div className="service-full-details">
                <div className="position-relative text-center mb-5">
                  <div className="service-background-text benefits-bg-text">Benefits</div>
                  <h3 className="service-details-title position-relative z-2">
                    Crystal Healing Benefits & Process
                  </h3>
                </div>
                
                {/* Benefits Section - MODERN GRID */}
                <div className="service-details-block">
                  <h4 className="section-subtitle text-center mb-4">
                    Benefits Include
                  </h4>
                  
                  <div className="row benefits-grid">
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-gem"></i>
                        </div>
                        <h5 className="benefit-title">Aura Cleansing</h5>
                        <p className="benefit-desc">Purify energy field, remove negativity</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-heart"></i>
                        </div>
                        <h5 className="benefit-title">Stress Relief</h5>
                        <p className="benefit-desc">Calm mind, reduce anxiety & tension</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-brain"></i>
                        </div>
                        <h5 className="benefit-title">Mental Clarity</h5>
                        <p className="benefit-desc">Enhance focus, improve decisions</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-bolt"></i>
                        </div>
                        <h5 className="benefit-title">Chakra Balance</h5>
                        <p className="benefit-desc">Align energy centers, optimize flow</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-chart-line"></i>
                        </div>
                        <h5 className="benefit-title">Personal Growth</h5>
                        <p className="benefit-desc">Boost positivity, spiritual awareness</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-money-bill-wave"></i>
                        </div>
                        <h5 className="benefit-title">Success & Finance</h5>
                        <p className="benefit-desc">Attract opportunities, abundance</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-hand-holding-heart"></i>
                        </div>
                        <h5 className="benefit-title">Love & Harmony</h5>
                        <p className="benefit-desc">Peaceful relationships, emotional balance</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-lightbulb"></i>
                        </div>
                        <h5 className="benefit-title">Intuition Power</h5>
                        <p className="benefit-desc">Sharpen instincts, enhance memory</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* How It Works Section - MODERN SIDE BY SIDE */}
                <div className="service-details-block mt-5 pt-5">
                  <h4 className="section-subtitle text-center mb-4">
                    How It Works
                  </h4>
                  
                  <div className="modern-process-container">
                    <div className="process-step-modern">
                      <div className="modern-step-header">
                        <div className="modern-step-number">1</div>
                        <div className="modern-step-title-content">
                          <h5 className="modern-step-title">Personalized Crystal Remedy</h5>
                          <div className="modern-step-meta">
                            <span className="modern-step-duration">
                              <i className="fa fa-clock me-2"></i>
                              <strong>60-90 min</strong>
                            </span>
                            <span className="modern-step-tag">Customized</span>
                          </div>
                        </div>
                      </div>
                      <div className="modern-step-body">
                        <p className="modern-step-description">
                          Tailored crystal remedies—bracelets, jewellery, stones—crafted for your specific energy needs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="process-step-modern">
                      <div className="modern-step-header">
                        <div className="modern-step-number">2</div>
                        <div className="modern-step-title-content">
                          <h5 className="modern-step-title">Crystal Reiki Healing</h5>
                          <div className="modern-step-meta">
                            <span className="modern-step-duration">
                              <i className="fa fa-clock me-2"></i>
                              <strong>50-60 min</strong>
                            </span>
                            <span className="modern-step-tag">Synergy</span>
                          </div>
                        </div>
                      </div>
                      <div className="modern-step-body">
                        <p className="modern-step-description">
                          Strategic crystal placement with Reiki energy to activate chakras and accelerate healing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reiki Healing Section */}
      <div className="container-xxl py-5 service-reversed-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="h-100 position-relative">
                <div className="service-background-text reiki-bg-text">Reiki</div>
                
                <div className="position-relative z-2">
                  <p className="text-primary text-uppercase mb-2 service-subtitle">Healing Services</p>
                  <div className="service-title-container">
                    <h1 className="display-6 mb-4 service-title">Reiki Energy Healing</h1>
                  </div>
                  
                  <div className="service-text-content">
                    <p className="service-text">
                      <strong>Reiki Healing</strong> is a gentle energy therapy promoting deep relaxation, 
                      emotional balance, and natural healing. By channeling universal life energy, it clears 
                      blockages, reduces stress, and restores mind-body-spirit harmony.
                    </p>
                    <p className="service-text">
                      Each session is personalized to your needs, supporting physical well-being and mental clarity. 
                      Our certified practitioners create sacred spaces for healing energy to address root imbalances 
                      and promote holistic wellness.
                    </p>
                    <p className="service-text">
                      Suitable for all ages, Reiki complements medical treatments with its gentle yet powerful 
                      approach to complete well-being.
                    </p>
                  </div>
                  
                  {/* BOOK MY SESSION BUTTON - Added here */}
                  <div className="service-btn-container">
                    <button 
                      className="btn btn-primary py-3 px-5 service-btn service-fade-in" 
                      onClick={handleBookSessionClick}
                    >
                      Book My Session
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="row g-3 img-twice position-relative h-100">
                <div className="col-6">
                  <img 
                    className="img-fluid bg-light p-3 service-fade-in" 
                    src="about-bg3.jpeg" 
                    alt="Reiki Session" 
                  />
                </div>
                <div className="col-6 align-self-end">
                  <img 
                    className="img-fluid bg-light p-3 service-fade-in" 
                    src="about-bg4.jpeg" 
                    alt="Energy Work" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Full Details Section - CLEAN MODERN LAYOUT */}
          <div className="row mt-5 pt-4">
            <div className="col-12">
              <div className="service-full-details">
                <div className="position-relative text-center mb-5">
                  <div className="service-background-text benefits-bg-text">Benefits</div>
                  <h3 className="service-details-title position-relative z-2">
                    Reiki Healing Benefits & Process
                  </h3>
                </div>
                
                {/* Benefits Section - MODERN GRID */}
                <div className="service-details-block">
                  <h4 className="section-subtitle text-center mb-4">
                    Benefits Include
                  </h4>
                  
                  <div className="row benefits-grid">
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-brain"></i>
                        </div>
                        <h5 className="benefit-title">Stress Relief</h5>
                        <p className="benefit-desc">Reduce anxiety, release tension</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-heartbeat"></i>
                        </div>
                        <h5 className="benefit-title">Emotional Healing</h5>
                        <p className="benefit-desc">Balance emotions, release trauma</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-bed"></i>
                        </div>
                        <h5 className="benefit-title">Better Sleep</h5>
                        <p className="benefit-desc">Improve sleep quality, patterns</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-shield-alt"></i>
                        </div>
                        <h5 className="benefit-title">Enhanced Immunity</h5>
                        <p className="benefit-desc">Strengthen natural defenses</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-heart"></i>
                        </div>
                        <h5 className="benefit-title">Physical Healing</h5>
                        <p className="benefit-desc">Accelerate recovery, pain relief</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-bolt"></i>
                        </div>
                        <h5 className="benefit-title">Energy Boost</h5>
                        <p className="benefit-desc">Increase vitality, stamina</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-balance-scale"></i>
                        </div>
                        <h5 className="benefit-title">Balance & Harmony</h5>
                        <p className="benefit-desc">Restore mind-body equilibrium</p>
                      </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <i className="fa fa-spa"></i>
                        </div>
                        <h5 className="benefit-title">Holistic Wellness</h5>
                        <p className="benefit-desc">Promote overall well-being</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* How It Works Section - MODERN SIDE BY SIDE */}
                <div className="service-details-block mt-5 pt-5">
                  <h4 className="section-subtitle text-center mb-4">
                    How It Works
                  </h4>
                  
                  <div className="modern-process-container">
                    <div className="process-step-modern">
                      <div className="modern-step-header">
                        <div className="modern-step-number">1</div>
                        <div className="modern-step-title-content">
                          <h5 className="modern-step-title">Reiki Healing Session</h5>
                          <div className="modern-step-meta">
                            <span className="modern-step-duration">
                              <i className="fa fa-clock me-2"></i>
                              <strong>60-90 min</strong>
                            </span>
                            <span className="modern-step-tag">Deep Healing</span>
                          </div>
                        </div>
                      </div>
                      <div className="modern-step-body">
                        <p className="modern-step-description">
                          Universal energy channeled to clear blockages, promoting deep relaxation and restoration.
                        </p>
                      </div>
                    </div>
                    
                    <div className="process-step-modern">
                      <div className="modern-step-header">
                        <div className="modern-step-number">2</div>
                        <div className="modern-step-title-content">
                          <h5 className="modern-step-title">Crystal Reiki Synergy</h5>
                          <div className="modern-step-meta">
                            <span className="modern-step-duration">
                              <i className="fa fa-clock me-2"></i>
                              <strong>70-80 min</strong>
                            </span>
                            <span className="modern-step-tag">Integrated</span>
                          </div>
                        </div>
                      </div>
                      <div className="modern-step-body">
                        <p className="modern-step-description">
                          Combined crystal vibrations with Reiki energy for accelerated healing and transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;