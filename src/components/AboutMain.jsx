import './AboutMain.css';
import { useState } from 'react';

const AboutMain = () => {
  const [activeImage] = useState(0);
  
  const images = [
    { src: "about-og.jpg", alt: "Manisha Balsara" }
  ];

  return (
    <div className="about-main-section">
      <div className="container-xxl py-5">
        <div className="container">
          {/* Part 1: Image Left, Content Right */}
          <div className="row g-5 align-items-center part-1">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="modern-image-container">
                <div className="main-image-wrapper">
                  <img 
                    className="img-fluid main-image" 
                    src={images[activeImage].src} 
                    alt={images[activeImage].alt} 
                  />
                  
                  <div className="image-decoration">
                    <div className="decoration-circle circle-1"></div>
                    <div className="decoration-circle circle-2"></div>
                    <div className="decoration-square"></div>
                  </div>
                  
                  <div className="image-overlay permanent-overlay">
                    <div className="overlay-content">
                      <i className="fas fa-spa overlay-icon"></i>
                      <h5>Energy Healing</h5>
                      <p>Reiki & Crystal Therapy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="h-100 position-relative">
                <div className="about-background-text about-bg-text">Healing</div>
                
                <div className="position-relative z-2">
                  <p className="text-primary text-uppercase mb-2 about-subtitle">My Spiritual Journey</p>
                  <div className="about-title-container">
                    <h1 className="display-6 mb-4 about-title">Manisha Balsara</h1>
                    <p className="text-muted mb-3 signature-text">Reiki & Crystal Healing Practitioner</p>
                  </div>
                  
                  <div className="about-text-content">
                    <p className="about-text">
                      I'm <strong>Manisha Balsara</strong>, a dedicated Reiki and Crystal Healing practitioner 
                      walking the path of energy healing and spiritual growth since <strong>1995</strong>.
                    </p>
                    
                    <p className="about-text">
                      My healing journey began at 22 under the guidance of <strong>Mrs. Rohini Desai</strong>, 
                      a respected Reiki Grand Master. Her teachings not only introduced me to Reiki but also 
                      to the enchanting world of Crystals. My first crystal, an <strong>Amethyst pencil pendant</strong> 
                      bought nearly 30 years ago, remains close to my heart.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Part 2: Content Left, Image Right */}
          <div className="row g-5 align-items-center part-2">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="h-100 position-relative">
                <div className="about-text-content mt-4 mt-lg-0">
                  <p className="about-text">
                    After personal losses and health challenges, I rediscovered healing through Taichi and Qigong 
                    in 2021. This rekindled my passion for energy healing, leading me back to Reiki under 
                    Grand Master Rohini Desai in <strong>2023</strong> after 26 years.
                  </p>
                  
                  <p className="about-text">
                    Crystals continued calling me, and in <strong>2024</strong>, I pursued professional 
                    Crystal Healing under <strong>Mr. Hasmukk Chajedd</strong>, deepening my understanding 
                    of their transformative potential as sacred healing companions.
                  </p>
                  
                  <p className="about-text">
                    Today, I blend <strong>Reiki and Crystal energies</strong> to bring balance, healing, 
                    and harmony. What began as personal healing has grown into a fulfilling journey of 
                    service, transformation, and continuous spiritual learning.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="modern-image-container image-right">
                <div className="image-stack">
                  <div className="stacked-image main-stack">
                    <img 
                      src="about-bg1.jpeg" 
                      alt="Healing Journey Since 1995" 
                    />
                    <div className="stack-overlay permanent-stack-overlay">
                      <div className="stack-content permanent-stack-content">
                        <i className="fas fa-spa"></i>
                        <h6>Energy Healing</h6>
                      </div>
                    </div>
                  </div>
                  
                  <div className="stack-border"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Journey Milestones Section */}
          <div className="row mt-5 pt-4">
            <div className="col-12">
              <div className="about-full-details">
                <div className="position-relative text-center mb-5">
                  <div className="about-background-text milestones-bg-text">Journey</div>
                  <h3 className="about-details-title position-relative z-2">
                    My Healing Journey Timeline
                  </h3>
                </div>
                
                <div className="about-details-block">
                  <div className="row journey-timeline">
                    <div className="col-md-4 col-sm-6 mb-4">
                      <div className="milestone-card">
                        <div className="milestone-year">1995</div>
                        <div className="milestone-icon">
                          <i className="fa fa-seedling"></i>
                        </div>
                        <h5 className="milestone-title">Journey Begins</h5>
                        <p className="milestone-desc">First Reiki experience under Mrs. Rohini Desai</p>
                      </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 mb-4">
                      <div className="milestone-card">
                        <div className="milestone-year">1995</div>
                        <div className="milestone-icon">
                          <i className="fa fa-gem"></i>
                        </div>
                        <h5 className="milestone-title">First Crystal</h5>
                        <p className="milestone-desc">Amethyst pencil pendant - my crystal companion</p>
                      </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 mb-4">
                      <div className="milestone-card">
                        <div className="milestone-year">2021</div>
                        <div className="milestone-icon">
                          <i className="fa fa-redo"></i>
                        </div>
                        <h5 className="milestone-title">Rediscovery</h5>
                        <p className="milestone-desc">Return to healing through Taichi & Qigong</p>
                      </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 mb-4">
                      <div className="milestone-card">
                        <div className="milestone-year">2023</div>
                        <div className="milestone-icon">
                          <i className="fa fa-hands-heart"></i>
                        </div>
                        <h5 className="milestone-title">Reiki Return</h5>
                        <p className="milestone-desc">Relearned Reiki after 26 years under Grand Master</p>
                      </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 mb-4">
                      <div className="milestone-card">
                        <div className="milestone-year">2024</div>
                        <div className="milestone-icon">
                          <i className="fa fa-graduation-cap"></i>
                        </div>
                        <h5 className="milestone-title">Crystal Certification</h5>
                        <p className="milestone-desc">Professional Crystal Healing course with Mr. Hasmukk Chajedd</p>
                      </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 mb-4">
                      <div className="milestone-card">
                        <div className="milestone-year">Present</div>
                        <div className="milestone-icon">
                          <i className="fa fa-hand-holding-heart"></i>
                        </div>
                        <h5 className="milestone-title">Healing Service</h5>
                        <p className="milestone-desc">Blending Reiki & Crystals for holistic healing</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Healing Philosophy Section */}
                <div className="about-details-block mt-5 pt-5">
                  <h4 className="about-section-subtitle text-center mb-4">
                    My Healing Philosophy
                  </h4>
                  
                  <div className="modern-process-container">
                    <div className="process-step-modern">
                      <div className="modern-step-header">
                        <div className="modern-step-number">1</div>
                        <div className="modern-step-title-content">
                          <h5 className="modern-step-title">Holistic Approach</h5>
                          <div className="modern-step-meta">
                            <span className="modern-step-duration">
                              <i className="fa fa-heart me-2"></i>
                              <strong>Mind-Body-Spirit</strong>
                            </span>
                            <span className="modern-step-tag">Balance</span>
                          </div>
                        </div>
                      </div>
                      <div className="modern-step-body">
                        <p className="modern-step-description">
                          Integrating Reiki's universal energy with Crystals' vibrational wisdom for complete 
                          mind-body-spirit alignment and deep energetic healing.
                        </p>
                      </div>
                    </div>
                    
                    <div className="process-step-modern">
                      <div className="modern-step-header">
                        <div className="modern-step-number">2</div>
                        <div className="modern-step-title-content">
                          <h5 className="modern-step-title">Personalized Healing</h5>
                          <div className="modern-step-meta">
                            <span className="modern-step-duration">
                              <i className="fa fa-user me-2"></i>
                              <strong>Tailored Sessions</strong>
                            </span>
                            <span className="modern-step-tag">Customized</span>
                          </div>
                        </div>
                      </div>
                      <div className="modern-step-body">
                        <p className="modern-step-description">
                          Each session is uniquely crafted to address individual energy needs, combining specific 
                          crystals with Reiki techniques for personalized transformation.
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

export default AboutMain;