import React, { useState, useEffect } from 'react';
import './CrystalCare.css';

const CrystalCare = () => {
  const [activeTab, setActiveTab] = useState('cleanse');
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Check screen size for mobile view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const tabs = [
    { id: 'cleanse', label: 'Cleansing', icon: 'fas fa-water' },
    { id: 'program', label: 'Programming', icon: 'fas fa-bullseye' },
    { id: 'use', label: 'Usage', icon: 'fas fa-hand-holding' },
    { id: 'damaged', label: 'Damaged Crystals', icon: 'fas fa-exclamation-triangle' },
    { id: 'timeline', label: 'Timeframe', icon: 'fas fa-clock' }
  ];

  // Get current active tab object
  const activeTabObj = tabs.find(tab => tab.id === activeTab);

  const tabContent = {
    cleanse: {
      title: 'Crystal Cleansing',
      subtitle: 'Purify from Negative Energies',
      content: (
        <>
          <div className="cc-details-block">
            <p className="cc-text text-center mb-4">
              Crystals absorb negative energies and imbalances, acting as healing agents. 
              Regular cleansing is essential for them to function optimally - just like you feel 
              refreshed after a bath!
            </p>
            
            <h4 className="cc-section-subtitle text-center mb-4">
              <i className="fas fa-water fa-lg me-2"></i>
              Step 1 : Water Cleansing Method
            </h4>
            
            <div className="cc-process-container">
              <div className="cc-process-step">
                <div className="cc-step-header">
                  <div className="cc-step-number">1</div>
                  <div className="cc-step-title-content">
                    <h5 className="cc-step-title">Wash Under Water</h5>
                    <div className="cc-step-meta">
                      <span className="cc-step-tag">Essential</span>
                    </div>
                  </div>
                </div>
                <div className="cc-step-body">
                  <p className="cc-step-description">
                    Wash crystals under running tap water at room temperature. 
                    Avoid warm or hot water. No soaking needed.
                  </p>
                </div>
              </div>
              
              <div className="cc-process-step">
                <div className="cc-step-header">
                  <div className="cc-step-number">2</div>
                  <div className="cc-step-title-content">
                    <h5 className="cc-step-title">Dry & Charge</h5>
                    <div className="cc-step-meta">
                      <span className="cc-step-duration">
                        <i className="fas fa-clock me-2"></i>
                        <strong>2-3 hours</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cc-step-body">
                  <p className="cc-step-description">
                    Dry gently, then place in moonlight/sunlight for few hours. 
                    Crystals love water and shine after bathing with water and moonlight.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="cc-section-subtitle text-center mb-4">
                <i className="fas fa-list-alt fa-lg me-2"></i>
                Alternative Cleansing Methods
              </h4>
              
              <div className="row cc-benefits-grid">
                <div className="col-md-4 col-sm-6 mb-4">
                  <div className="cc-benefit-card">
                    <div className="cc-benefit-icon">
                      <i className="fas fa-moon"></i>
                    </div>
                    <h5 className="cc-benefit-title">Moonlight/Sunlight</h5>
                    <p className="cc-benefit-desc">Natural energy charging</p>
                  </div>
                </div>
                
                <div className="col-md-4 col-sm-6 mb-4">
                  <div className="cc-benefit-card">
                    <div className="cc-benefit-icon">
                      <i className="fas fa-leaf"></i>
                    </div>
                    <h5 className="cc-benefit-title">Sage/Incense</h5>
                    <p className="cc-benefit-desc">Smoke purification</p>
                  </div>
                </div>
                
                <div className="col-md-4 col-sm-6 mb-4">
                  <div className="cc-benefit-card">
                    <div className="cc-benefit-icon">
                      <i className="fas fa-gem"></i>
                    </div>
                    <h5 className="cc-benefit-title">Selenite</h5>
                    <p className="cc-benefit-desc">Trays/bowls for cleansing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cc-info-box mt-4">
              <i className="fas fa-info-circle fa-lg me-2"></i>
              <p><strong>Frequency:</strong> Cleanse every 15 days, or more often if needed</p>
            </div>
          </div>
        </>
      )
    },
    program: {
      title: 'Programming Crystals',
      subtitle: 'Set Clear Intentions',
      content: (
        <>
          <div className="cc-details-block">
            <p className="cc-text text-center mb-4">
              Programming gives direction to your crystals' energy. Be clear about what 
              you want them to help you achieve.
            </p>
            
            <h4 className="cc-section-subtitle text-center mb-4">
              <i className="fas fa-bullseye fa-lg me-2"></i>
              Step 2 : How to Program
            </h4>
            
            <div className="cc-process-container">
              <div className="cc-process-step">
                <div className="cc-step-header">
                  <div className="cc-step-number">01</div>
                  <div className="cc-step-title-content">
                    <h5 className="cc-step-title">Hold Crystal</h5>
                    <div className="cc-step-meta">
                      <span className="cc-step-tag">Left Hand</span>
                    </div>
                  </div>
                </div>
                <div className="cc-step-body">
                  <p className="cc-step-description">
                    Hold crystal in left hand, cover with right hand. For larger crystals, 
                    hold with both hands wherever placed.
                  </p>
                </div>
              </div>
              
              <div className="cc-process-step">
                <div className="cc-step-header">
                  <div className="cc-step-number">02</div>
                  <div className="cc-step-title-content">
                    <h5 className="cc-step-title">Set Intention</h5>
                    <div className="cc-step-meta">
                      <span className="cc-step-tag">Clear & Specific</span>
                    </div>
                  </div>
                </div>
                <div className="cc-step-body">
                  <p className="cc-step-description">
                    Clearly intend what you want the crystal to help you with. 
                    Intention should be for you if personal, for space if for a location.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="cc-section-subtitle text-center mb-4">
                <i className="fas fa-lightbulb fa-lg me-2"></i>
                Example Intentions
              </h4>
              
              <div className="row cc-benefits-grid">
                <div className="col-md-4 col-sm-6 mb-4">
                  <div className="cc-benefit-card">
                    <div className="cc-benefit-icon">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <h5 className="cc-benefit-title">Career Progress</h5>
                    <p className="cc-benefit-desc">"Help me progress in my career"</p>
                  </div>
                </div>
                
                <div className="col-md-4 col-sm-6 mb-4">
                  <div className="cc-benefit-card">
                    <div className="cc-benefit-icon">
                      <i className="fas fa-heart"></i>
                    </div>
                    <h5 className="cc-benefit-title">Love & Harmony</h5>
                    <p className="cc-benefit-desc">"Bring love into relationships"</p>
                  </div>
                </div>
                
                <div className="col-md-4 col-sm-6 mb-4">
                  <div className="cc-benefit-card">
                    <div className="cc-benefit-icon">
                      <i className="fas fa-brain"></i>
                    </div>
                    <h5 className="cc-benefit-title">Mental Clarity</h5>
                    <p className="cc-benefit-desc">"Enhance focus and decisions"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    },
    use: {
      title: 'Using Your Crystals',
      subtitle: 'Proper Placement & Usage',
      content: (
        <>
          <div className="cc-details-block">
            <p className="cc-text text-center mb-4">
              How you use your crystals depends on their form - tumbles, rough stones, 
              or jewelry. Each has optimal ways to maximize their benefits.
            </p>
            
            <h4 className="cc-section-subtitle text-center mb-4">
              <i className="fas fa-hand-holding fa-lg me-2"></i>
              Step 3 : Tumbles & Small Stones
            </h4>
            
            <div className="row cc-benefits-grid">
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="cc-benefit-card">
                  <div className="cc-benefit-icon">
                    <i className="fas fa-parking"></i>
                  </div>
                  <h5 className="cc-benefit-title">Carry in Pocket</h5>
                  <p className="cc-benefit-desc">Keep with you throughout day</p>
                </div>
              </div>
              
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="cc-benefit-card">
                  <div className="cc-benefit-icon">
                    <i className="fas fa-meditation"></i>
                  </div>
                  <h5 className="cc-benefit-title">During Meditation</h5>
                    <p className="cc-benefit-desc">Hold in hand while meditating</p>
                </div>
              </div>
              
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="cc-benefit-card">
                  <div className="cc-benefit-icon">
                    <i className="fas fa-bed"></i>
                  </div>
                  <h5 className="cc-benefit-title">Under Pillow</h5>
                  <p className="cc-benefit-desc">For restful sleep and dreams</p>
                </div>
              </div>
              
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="cc-benefit-card">
                  <div className="cc-benefit-icon">
                    <i className="fas fa-desktop"></i>
                  </div>
                  <h5 className="cc-benefit-title">Work Table</h5>
                  <p className="cc-benefit-desc">Place on work/bedside table</p>
                </div>
              </div>
              
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="cc-benefit-card">
                  <div className="cc-benefit-icon">
                    <i className="fas fa-hands"></i>
                  </div>
                  <h5 className="cc-benefit-title">Worry Stone</h5>
                  <p className="cc-benefit-desc">Hold while relaxing, watching TV</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cc-details-block mt-5">
            <h4 className="cc-section-subtitle text-center mb-4">
              <i className="fas fa-gem fa-lg me-2"></i>
              Crystal Jewelry Guidelines
            </h4>
            
            <div className="cc-process-container">
              <div className="cc-process-step">
                <div className="cc-step-header">
                  <div className="cc-step-number">1</div>
                  <div className="cc-step-title-content">
                    <h5 className="cc-step-title">Cleanse & Program</h5>
                    <div className="cc-step-meta">
                      <span className="cc-step-tag">Essential</span>
                    </div>
                  </div>
                </div>
                <div className="cc-step-body">
                  <p className="cc-step-description">
                    Wash and cleanse jewelry like tumbles. Program with specific intention.
                  </p>
                </div>
              </div>
              
              <div className="cc-process-step">
                <div className="cc-step-header">
                  <div className="cc-step-number">2</div>
                  <div className="cc-step-title-content">
                    <h5 className="cc-step-title">Wear Duration</h5>
                    <div className="cc-step-meta">
                      <span className="cc-step-duration">
                        <i className="fas fa-clock me-2"></i>
                        <strong>4-6 hours</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cc-step-body">
                  <p className="cc-step-description">
                    Wear for at least 4-6 hours daily. Can remove at night.
                  </p>
                </div>
              </div>
              
              <div className="cc-process-step">
                <div className="cc-step-header">
                  <div className="cc-step-number">3</div>
                  <div className="cc-step-title-content">
                    <h5 className="cc-step-title">Bracelet Position</h5>
                    <div className="cc-step-meta">
                      <span className="cc-step-tag">Left Wrist</span>
                    </div>
                  </div>
                </div>
                <div className="cc-step-body">
                  <p className="cc-step-description">
                    Wear bracelets on left wrist (receiving hand) for optimal energy flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    },
    damaged: {
      title: 'Damaged Crystals',
      subtitle: 'Respectful Disposal',
      content: (
        <>
          <div className="cc-details-block">
            <div className="cc-warning-banner">
              <i className="fas fa-exclamation-triangle fa-2x"></i>
              <div>
                <h4>Respect Crystal Energy</h4>
                <p>If crystals get damaged or broken, they have completed their work and should be retired respectfully.</p>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="cc-section-subtitle text-center mb-4">
                <i className="fas fa-recycle fa-lg me-2"></i>
                Proper Disposal Methods
              </h4>
              
              <div className="cc-process-container">
                <div className="cc-process-step">
                  <div className="cc-step-header">
                    <div className="cc-step-number">1</div>
                    <div className="cc-step-title-content">
                      <h5 className="cc-step-title">Bury in Earth</h5>
                      <div className="cc-step-meta">
                        <span className="cc-step-tag">Return to Nature</span>
                      </div>
                    </div>
                  </div>
                  <div className="cc-step-body">
                    <p className="cc-step-description">
                      Return the crystal to nature by burying it in soil, allowing its energy 
                      to return to the earth.
                    </p>
                  </div>
                </div>
                
                <div className="cc-process-step">
                  <div className="cc-step-header">
                    <div className="cc-step-number">2</div>
                    <div className="cc-step-title-content">
                      <h5 className="cc-step-title">Return to Water</h5>
                      <div className="cc-step-meta">
                        <span className="cc-step-tag">Flowing Water</span>
                      </div>
                    </div>
                  </div>
                  <div className="cc-step-body">
                    <p className="cc-step-description">
                      Immerse in natural body of water like river, lake, or ocean 
                      (ensure environmentally safe).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cc-info-box important mt-4">
              <i className="fas fa-exclamation-circle fa-lg me-2"></i>
              <div>
                <p><strong>Important:</strong> Never throw crystals in regular trash. They carry energy and deserve respectful disposal.</p>
              </div>
            </div>
          </div>
        </>
      )
    },
    timeline: {
      title: 'Results Timeframe',
      subtitle: 'When to Expect Changes',
      content: (
        <>
          <div className="cc-details-block">
            <h4 className="cc-section-subtitle text-center mb-4">
              <i className="fas fa-chart-line fa-lg me-2"></i>
              Understanding Crystal Timing
            </h4>
            
            <div className="cc-observation-tips mb-5">
              <p className="cc-text text-center">
                You'll notice subtle changes in how you react to situations that previously 
                triggered anger, frustration, or depression. The timeframe varies person to person.
              </p>
            </div>

            <div className="mt-5">
              <h4 className="cc-section-subtitle text-center mb-4">
                <i className="fas fa-clock fa-lg me-2"></i>
                Expected Timeframes
              </h4>
              
              <div className="cc-process-container">
                <div className="cc-process-step">
                  <div className="cc-step-header">
                    <div className="cc-step-number">1</div>
                    <div className="cc-step-title-content">
                      <h5 className="cc-step-title">Immediate Effects</h5>
                      <div className="cc-step-meta">
                        <span className="cc-step-tag">Sometimes</span>
                      </div>
                    </div>
                  </div>
                  <div className="cc-step-body">
                    <p className="cc-step-description">
                      Some people feel energy shifts immediately upon using crystals.
                    </p>
                  </div>
                </div>
                
                <div className="cc-process-step">
                  <div className="cc-step-header">
                    <div className="cc-step-number">2</div>
                    <div className="cc-step-title-content">
                      <h5 className="cc-step-title">General Timeline</h5>
                    <div className="cc-step-meta">
                        <span className="cc-step-duration">
                          <i className="fas fa-clock me-2"></i>
                          <strong>21-48 days</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="cc-step-body">
                    <p className="cc-step-description">
                      Typically takes 21 to 48 days for changes to settle in and become established.
                    </p>
                  </div>
                </div>
                
                <div className="cc-process-step">
                  <div className="cc-step-header">
                    <div className="cc-step-number">3</div>
                    <div className="cc-step-title-content">
                      <h5 className="cc-step-title">Consistency Matters</h5>
                      <div className="cc-step-meta">
                        <span className="cc-step-tag">Key Factor</span>
                      </div>
                    </div>
                  </div>
                  <div className="cc-step-body">
                    <p className="cc-step-description">
                      Regular use and proper care accelerate the healing process and results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cc-observation-tips mt-5">
              <h5 className="cc-section-subtitle text-center">
                <i className="fas fa-eye fa-lg me-2"></i>
                What to Observe
              </h5>
              <p className="cc-text text-center">
                Pay attention to your emotional responses and reactions to previously triggering situations.
              </p>
            </div>
          </div>
        </>
      )
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setIsDropdownOpen(false);
  };

  return (
    <section className="crystal-care-section">
      <div className="container-xxl py-5">
        <div className="container">
          {/* Simple Header Section */}
          <div className="row">
            <div className="col-12">
              <div className="h-100 cc-position-relative-z2 text-center mb-5">
                <div className="cc-background-text">Crystal Care</div>
                
                <div className="position-relative z-2">
                  <p className="text-primary text-uppercase mb-2 cc-subtitle">Essential Guide</p>
                  <div className="cc-title-container">
                    <h1 className="display-6 mb-4 cc-title">Caring for Your Crystals</h1>
                  </div>
                  
                  <div className="col-lg-10 mx-auto">
                    <p className="cc-text">
                      The world of crystals is fascinating. Once connected to crystal magic, 
                      there's no going back. Crystals heal by absorbing negative energies, 
                      but they need regular cleansing to function optimally - just like you 
                      feel better after a refreshing bath!
                    </p>
                    <p className="cc-text">
                      This comprehensive guide covers everything from cleansing and programming 
                      to proper usage and respectful disposal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs Section */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="cc-full-details">
                <div className="position-relative text-center mb-5">
                  <div className="cc-guide-bg-text">Guide</div>
                  <h3 className="cc-details-title cc-position-relative-z2">
                    Complete Crystal Care Guide
                  </h3>
                </div>
                
                {/* Tabs Navigation - Desktop & Mobile */}
                <div className="cc-tabs-navigation mb-5">
                  {/* Desktop View - Horizontal Tabs */}
                  {!isMobile ? (
                    <div className="row justify-content-center cc-tabs-desktop">
                      {tabs.map((tab) => (
                        <div className="col-auto" key={tab.id}>
                          <button
                            className={`cc-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                          >
                            <i className={`${tab.icon} me-2`}></i>
                            {tab.label}
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Mobile View - Dropdown */
                    <div className="cc-tabs-mobile">
                      <div 
                        className="cc-dropdown-header"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <div className="cc-dropdown-selected">
                          <i className={`${activeTabObj.icon} me-2`}></i>
                          {activeTabObj.label}
                          <i className={`fas fa-chevron-${isDropdownOpen ? 'up' : 'down'} ms-2`}></i>
                        </div>
                      </div>
                      
                      {isDropdownOpen && (
                        <div className="cc-dropdown-options">
                          {tabs.map((tab) => (
                            <div 
                              className={`cc-dropdown-option ${activeTab === tab.id ? 'active' : ''}`}
                              key={tab.id}
                              onClick={() => handleTabChange(tab.id)}
                            >
                              <i className={`${tab.icon} me-2`}></i>
                              {tab.label}
                              {activeTab === tab.id && (
                                <i className="fas fa-check ms-2"></i>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Active Tab Content */}
                <div className="cc-details-block">
                  <div className="cc-tab-header text-center mb-5">
                    <h4 className="cc-section-subtitle mb-2">{tabContent[activeTab].title}</h4>
                    <p className="cc-text">{tabContent[activeTab].subtitle}</p>
                  </div>
                  
                  {tabContent[activeTab].content}
                </div>
                
                {/* Care Tips Footer */}
                <div className="row mt-5 pt-4">
                  <div className="col-md-4 mb-4">
                    <div className="cc-care-tip-card">
                      <div className="cc-care-tip-icon">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <h5 className="cc-care-tip-title">Cleanse Every</h5>
                      <p className="cc-care-tip-desc">15 Days</p>
                    </div>
                  </div>
                  
                  <div className="col-md-4 mb-4">
                    <div className="cc-care-tip-card">
                      <div className="cc-care-tip-icon">
                        <i className="fas fa-sync-alt"></i>
                      </div>
                      <h5 className="cc-care-tip-title">Re-program</h5>
                      <p className="cc-care-tip-desc">After Cleansing</p>
                    </div>
                  </div>
                  
                  <div className="col-md-4 mb-4">
                    <div className="cc-care-tip-card">
                      <div className="cc-care-tip-icon">
                        <i className="fas fa-exclamation-triangle"></i>
                      </div>
                      <h5 className="cc-care-tip-title">Handle With Care</h5>
                      <p className="cc-care-tip-desc">Avoid Dropping</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrystalCare;