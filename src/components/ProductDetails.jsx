import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { crystalName } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('metaphysical');
  const [currentCrystal, setCurrentCrystal] = useState(null);
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

  // COMPLETE CRYSTAL DATA - All 24 Crystals
  const crystalData = {
    "MOSS AGATE": {
      title: "Moss Agate",
      subtitle: "The Stone of Nurturing Growth and New Beginnings",
      description: "A captivating form of Chalcedony with dendritic inclusions resembling moss. Known as the 'Gardener's Stone' for its connection to Earth and nurturing energy.",
      metaphysical: [
        "Emotional balance and tranquillity",
        "Connection to nature and earth energy",
        "Attracts abundance and prosperity",
        "Boosts self-esteem and optimism",
        "Enhances communication skills"
      ],
      physical: [
        "Immune and anti-inflammatory support",
        "Circulatory and digestive health",
        "Support during childbirth",
        "Helps in addiction recovery",
        "Improves air quality and lung health"
      ],
      chakra: "Heart Chakra (Anahata)",
      element: "Earth",
      zodiac: "Virgo, Taurus",
      color: "#4CAF50"
    },
    "AMAZONITE": {
      title: "Amazonite",
      subtitle: "Stone of Courage and Truth",
      description: "Beautiful blue-green variety of microcline feldspar. Known as the 'Stone of Courage' for its soothing, harmonizing energy.",
      metaphysical: [
        "Soothing and calming energy",
        "Enhances truth and communication",
        "Balances masculine and feminine energies",
        "Protection against negativity",
        "Manifestation and willpower"
      ],
      physical: [
        "Nervous system support",
        "Thyroid and throat health",
        "Bone and teeth support",
        "Cellular regeneration"
      ],
      chakra: "Heart & Throat Chakra",
      element: "Water",
      zodiac: "Virgo",
      color: "#2196F3"
    },
    "HEMATITE": {
      title: "Hematite",
      subtitle: "Stone of Grounding and Protection",
      description: "Iron oxide mineral renowned for its metallic lustre. Called the 'stone for the mind' for its grounding abilities.",
      metaphysical: [
        "Grounding and stability",
        "Protection from negative energy",
        "Mental clarity and focus",
        "Emotional balance and willpower",
        "Balances Yin-Yang energies"
      ],
      physical: [
        "Circulatory system support",
        "Boosts vitality and strength",
        "Aids detoxification",
        "Pain relief for muscles and joints"
      ],
      chakra: "Root Chakra",
      element: "Earth",
      zodiac: "Aries, Aquarius",
      color: "#757575"
    },
    "GREEN AVENTURINE": {
      title: "Green Aventurine",
      subtitle: "The Stone of Opportunity",
      description: "A beloved variety of quartz with soothing green color and shimmering effect. Known as the 'Gambler's Stone' for attracting luck and prosperity.",
      metaphysical: [
        "Attracts luck and opportunity",
        "Promotes growth and abundance",
        "Enhances confidence and leadership",
        "Fosters optimism and positivity",
        "Heart chakra activation"
      ],
      physical: [
        "Supports heart health",
        "Boosts vitality and energy",
        "Soothes skin and allergies",
        "Protects from environmental stress"
      ],
      chakra: "Heart Chakra",
      element: "Earth",
      zodiac: "Aries",
      color: "#4CAF50"
    },
    "CARNELIAN": {
      title: "Carnelian",
      subtitle: "The Artist's Stone",
      description: "Dynamic and vivacious crystal with warm, fiery hues. Known as 'The Artist's Stone' for stimulating creativity and passion.",
      metaphysical: [
        "Ignites passion and creativity",
        "Boosts motivation and courage",
        "Dispels apathy and fear",
        "Enhances personal power",
        "Emotional balance"
      ],
      physical: [
        "Energizes the body",
        "Restores life force",
        "Detoxification support",
        "Improves fertility"
      ],
      chakra: "Sacral & Root Chakra",
      element: "Fire",
      zodiac: "Leo, Aries",
      color: "#FF5722"
    },
    "BLACK TOURMALINE": {
      title: "Black Tourmaline",
      subtitle: "The Ultimate Protector Stone",
      description: "A potent grounding crystal known as an energetic bodyguard and master grounding stone. Acts as a psychic shield against negative energies.",
      metaphysical: [
        "Energetic shield against negativity",
        "Transmutes negative energies",
        "EMF protection from devices",
        "Deep grounding and stability",
        "Reduces stress and anxiety"
      ],
      physical: [
        "Detoxification support",
        "Pain relief for muscles",
        "Increases vitality and stamina",
        "Immune system support"
      ],
      chakra: "Root Chakra",
      element: "Earth",
      zodiac: "Capricorn, Libra",
      color: "#212121"
    },
    "LAPIS LAZULI": {
      title: "Lapis Lazuli",
      subtitle: "Stone of Wisdom and Truth",
      description: "Vibrant blue crystal stone that enhances communication between mind, throat, and heart. Known for giving calmness and intuitive abilities.",
      metaphysical: [
        "Enhances wisdom and understanding",
        "Improves memory and concentration",
        "Stimulates intellectual abilities",
        "Encourages creativity and honesty",
        "Enhances communication skills"
      ],
      physical: [
        "Reduces stress and headaches",
        "Boosts immune system",
        "Improves blood circulation",
        "Good for respiratory system"
      ],
      chakra: "Third Eye & Throat Chakra",
      element: "Water",
      zodiac: "Sagittarius, Taurus",
      color: "#3F51B5"
    },
    "SELENITE": {
      title: "Selenite",
      subtitle: "Mother of all Crystals",
      description: "Known as the Mother of all Crystals, promotes clarity and consciousness. Excellent auric cleanser and healer.",
      metaphysical: [
        "Excellent auric cleanser",
        "Cleanses other crystals",
        "Emotional stabilizer",
        "Promotes mental clarity and insight",
        "Helps access intuition"
      ],
      physical: [
        "Supports skeletal system",
        "Helps muscles and nerves",
        "Promotes peaceful sleep",
        "Clears energy blockages"
      ],
      chakra: "Crown Chakra",
      element: "Air",
      zodiac: "Taurus",
      color: "#CFD8DC"
    },
    "RHODONITE": {
      title: "Rhodonite",
      subtitle: "Stone of Self-Realization",
      description: "Often called the 'Stone of Self-Realization' and the 'Rescue Stone'. Promotes self-love, forgiveness, and emotional healing.",
      metaphysical: [
        "Emotional balance and healing",
        "Encourages forgiveness and compassion",
        "Heart chakra activation",
        "Nurturing energy and self-worth",
        "Helps manifesting healthy love"
      ],
      physical: [
        "Heals central nervous system",
        "Assists in wound healing",
        "Reduces scarring and allergies",
        "Supports liver and detoxification"
      ],
      chakra: "Heart Chakra",
      element: "Earth",
      zodiac: "Libra, Taurus",
      color: "#E91E63"
    },
    "LABRADORITE": {
      title: "Labradorite",
      subtitle: "Stone of Transformation and Magic",
      description: "Unique feldspar mineral with dazzling iridescent colors. Believed to be a magic and mystery stone connecting to spiritual realms.",
      metaphysical: [
        "Spiritual awakening and transformation",
        "Enhances intuition and psychic abilities",
        "Aura protection and cleansing",
        "Stimulates creativity and imagination",
        "Promotes emotional healing"
      ],
      physical: [
        "Relieves stress and anxiety",
        "Treats colds and sinusitis",
        "Balances hormones",
        "Lowers blood pressure"
      ],
      chakra: "Crown & Third Eye Chakra",
      element: "Water",
      zodiac: "Scorpio, Sagittarius",
      color: "#9C27B0"
    },
    "HOWLITE": {
      title: "Howlite",
      subtitle: "Stone of Calm and Patience",
      description: "Known for its calming properties, aiding in reducing stress, anxiety, and tension. Enhances self-awareness and patience.",
      metaphysical: [
        "Calming influence on emotions",
        "Enhances self-awareness and patience",
        "Communication enhancement",
        "Balances energy levels",
        "Assists in spiritual growth"
      ],
      physical: [
        "Promotes healthy bones and teeth",
        "Aids in absorbing calcium",
        "Helps achieve restful sleep",
        "Reduces tension and anxiety"
      ],
      chakra: "All Chakras",
      element: "Earth",
      zodiac: "Gemini, Virgo",
      color: "#FFFFFF"
    },
    "RAINFOREST JASPER": {
      title: "Rainforest Jasper",
      subtitle: "Stone of Happiness and Stability",
      description: "Green form of Rhyolite with energy for happiness that flows outward. Brings stability and helps achieve targets and financial goals.",
      metaphysical: [
        "Brings stability and happiness",
        "Removes procrastination",
        "Enhances creativity and communication",
        "Strengthens relationships",
        "Boosts self-confidence"
      ],
      physical: [
        "Regulates blood sugar",
        "Bolsters immune system",
        "Strengthens blood vessels",
        "Aids in detoxification",
        "Promotes healthy skin"
      ],
      chakra: "Heart Chakra",
      element: "Earth",
      zodiac: "Virgo, Taurus",
      color: "#4CAF50"
    },
    "MALACHITE": {
      title: "Malachite",
      subtitle: "Stone of Transformation",
      description: "One of the most powerful transformational crystals. Helps pinpoint areas of life ripe for transformation and guides positive change.",
      metaphysical: [
        "Brings awareness to transformation",
        "Helps release old patterns",
        "Protects against negative energies",
        "Enhances intuition and insight",
        "Promotes emotional growth"
      ],
      physical: [
        "Treats digestive infections",
        "Strengthens respiratory system",
        "Helps bone and muscle healing",
        "Corrects thyroid imbalances",
        "Promotes tissue regeneration"
      ],
      chakra: "Heart & Solar Plexus Chakra",
      element: "Earth",
      zodiac: "Scorpio, Capricorn",
      color: "#009688"
    },
    "RED JASPER": {
      title: "Red Jasper",
      subtitle: "Stone of Endurance and Vitality",
      description: "Captivating crystal renowned for its vibrant red hue and powerful grounding energy. Ideal for stability and endurance.",
      metaphysical: [
        "Grounding and stabilizing energy",
        "Enhances vitality and stamina",
        "Stimulates creativity and passion",
        "Promotes emotional stability",
        "Protects from lower energies"
      ],
      physical: [
        "Supports circulatory system",
        "Promotes detoxification",
        "Improves blood circulation",
        "Good for digestive system",
        "Helps with respiratory issues"
      ],
      chakra: "Root & Sacral Chakra",
      element: "Fire",
      zodiac: "Aries, Scorpio",
      color: "#F44336"
    },
    "LEPIDOLITE": {
      title: "Lepidolite",
      subtitle: "Stone of Peace and Transition",
      description: "Fosters tranquil, peaceful and calming energies for mind, body and spirit. Contains lithium, often used in anti-anxiety medication.",
      metaphysical: [
        "Fights depression and overthinking",
        "Releases emotional baggage",
        "Eases feelings of overwhelm",
        "Cultivates hope and renewal",
        "Promotes inner harmony"
      ],
      physical: [
        "Aids in restful sleep",
        "Reduces anxiety and stress",
        "Helps with emotional balance",
        "Supports nervous system"
      ],
      chakra: "Heart, Third Eye & Crown Chakra",
      element: "Water",
      zodiac: "Libra, Virgo",
      color: "#9C27B0"
    },
    "SULEIMANI HAKIK": {
      title: "Suleimani Hakik",
      subtitle: "Stone of Protection and Prosperity",
      description: "A semiprecious stone (Agate) revered throughout history for protection against evil spirits and attracting wealth.",
      metaphysical: [
        "Protection against negative energies",
        "Attracts wealth and abundance",
        "Enhances intuition and meditation",
        "Promotes inner strength and clarity",
        "Strengthens relationships"
      ],
      physical: [
        "Improves blood circulation",
        "Strengthens immune system",
        "Calms mind and relieves tension",
        "Promotes restful sleep"
      ],
      chakra: "Root Chakra",
      element: "Earth",
      zodiac: "Capricorn, Taurus",
      color: "#795548"
    },
    "PYRITE": {
      title: "Pyrite",
      subtitle: "Fool's Gold - Stone of Wealth",
      description: "Often called 'Fool's Gold' because it looks like gold. Known as a magnet for wealth, prosperity and good fortune.",
      metaphysical: [
        "Attracts wealth and prosperity",
        "Boosts confidence and energy",
        "Protects against negative energies",
        "Enhances mental clarity",
        "Connection to nature and Earth"
      ],
      physical: [
        "Promotes good physical health",
        "Energizes the body",
        "Improves vitality and stamina",
        "Supports overall well-being"
      ],
      chakra: "Solar Plexus Chakra",
      element: "Fire",
      zodiac: "Leo, Aries",
      color: "#FFC107"
    },
    "CLEAR QUARTZ": {
      title: "Clear Quartz",
      subtitle: "The Master Healer",
      description: "Highly valued as the 'Master Healer'. Promotes clarity, focus, and balance. Enhances spiritual growth and intuition.",
      metaphysical: [
        "Amplifies energy and intentions",
        "Enhances mental clarity and focus",
        "Promotes emotional healing",
        "Spiritual growth and connection",
        "Opens and aligns all chakras"
      ],
      physical: [
        "Stimulates immune system",
        "Aids in detoxification",
        "Boosts metabolism",
        "Helps with pain relief",
        "Improves digestion"
      ],
      chakra: "Crown Chakra",
      element: "All Elements",
      zodiac: "All Zodiac Signs",
      color: "#E0E0E0"
    },
    "GOLDEN QUARTZ": {
      title: "Golden Quartz",
      subtitle: "Stone of Inner Strength",
      description: "Golden variant combining Hematite and Quartz. Connects you with inner calm and stabilizes mind and emotions.",
      metaphysical: [
        "Aligns all chakras",
        "Activates inner strength",
        "Removes energy blockages",
        "Enhances prosperity and abundance",
        "Connects to higher self"
      ],
      physical: [
        "Promotes overall wellbeing",
        "Helps leave addictions",
        "Eliminates toxins and impurities",
        "Supports chakra balancing"
      ],
      chakra: "Solar Plexus, Crown & Root Chakra",
      element: "Earth & Fire",
      zodiac: "Leo, Sagittarius",
      color: "#FF9800"
    },
    "SMOKY QUARTZ": {
      title: "Smoky Quartz",
      subtitle: "The Grounding Stone",
      description: "Known as 'The Grounding Stone' for opening and adjusting the root chakra. Transmutes negative energy back to earth.",
      metaphysical: [
        "Grounding and stabilizing",
        "Transmutes negative energy",
        "Protects from harmful energies",
        "Alleviates fear and stress",
        "Uplifts depression and fatigue"
      ],
      physical: [
        "Regulates body fluids",
        "Reduces chronic pain",
        "Dissolves cramps and spasms",
        "Strengthens back and nerves",
        "Benefits reproductive system"
      ],
      chakra: "Root Chakra",
      element: "Earth",
      zodiac: "Capricorn, Scorpio",
      color: "#795548"
    },
    "ROSE QUARTZ": {
      title: "Rose Quartz",
      subtitle: "Stone of Unconditional Love",
      description: "Found in various shades of pink, associated with love, compassion, and emotional healing. Enhances relationships and self-love.",
      metaphysical: [
        "Emotional healing and comfort",
        "Enhances all relationships",
        "Promotes self-love and acceptance",
        "Attracts unconditional love",
        "Calming and reassuring energy"
      ],
      physical: [
        "Improves skin health",
        "Supports heart function",
        "Improves kidney function",
        "May increase fertility",
        "Promotes restful sleep"
      ],
      chakra: "Heart Chakra",
      element: "Water",
      zodiac: "Taurus, Libra",
      color: "#F48FB1"
    },
    "FLUORITE": {
      title: "Fluorite",
      subtitle: "The Genius Stone",
      description: "Available in various colors, represents highest state of mental achievement. Helps boost aptitude and discernment.",
      metaphysical: [
        "Enhances mental achievement",
        "Boosts aptitude and discernment",
        "Expands consciousness",
        "Protects from negative energies",
        "Balances all chakras"
      ],
      physical: [
        "Supports brain function",
        "Improves focus and concentration",
        "Aids in learning new information",
        "Helps with difficult situations"
      ],
      chakra: "Third Eye & Crown Chakra",
      element: "Air",
      zodiac: "Capricorn, Pisces",
      color: "#4CAF50"
    },
    "CITRINE": {
      title: "Citrine",
      subtitle: "The Merchant's Stone",
      description: "Called 'The Merchant's Stone' for attracting money and maintaining it. Radiates joy and happiness with solar energy.",
      metaphysical: [
        "Attracts wealth and abundance",
        "Radiates joy and happiness",
        "Enhances creativity and confidence",
        "Removes self-destructive thoughts",
        "Promotes success and manifestation"
      ],
      physical: [
        "Supports endocrine system",
        "Increases metabolism and stamina",
        "Keeps nails and hair healthy",
        "Supports digestive system",
        "Helps with hormonal imbalances"
      ],
      chakra: "Solar Plexus Chakra",
      element: "Fire",
      zodiac: "Gemini, Leo",
      color: "#FFC107"
    },
    "AMETHYST": {
      title: "Amethyst",
      subtitle: "All Purpose Stone",
      description: "Purple variety of quartz known as the 'All Purpose Stone'. Relieves anxiety, improves memory, and enhances intuition.",
      metaphysical: [
        "Calmness, peace and clarity",
        "Sweeps away negativity and protects",
        "Enhances intuition and decision making",
        "Connects to crown chakra",
        "Opens third eye"
      ],
      physical: [
        "Relieves anxiety and headaches",
        "Improves memory and cell regeneration",
        "Boosts immune system",
        "Aids sleep and rest",
        "Stabilizes high blood pressure"
      ],
      chakra: "Crown & Third Eye Chakra",
      element: "Water",
      zodiac: "Pisces, Virgo",
      color: "#9C27B0"
    }
  };

  const tabs = [
    { id: 'metaphysical', label: 'Metaphysical Benefits', icon: 'fas fa-brain' },
    { id: 'physical', label: 'Physical Benefits', icon: 'fas fa-heartbeat' },
    { id: 'properties', label: 'Properties', icon: 'fas fa-gem' }
  ];

  // Get current active tab object
  const activeTabObj = tabs.find(tab => tab.id === activeTab);

  useEffect(() => {
    if (crystalName) {
      const decodedCrystalName = decodeURIComponent(crystalName);
      const foundCrystal = crystalData[decodedCrystalName];
      
      if (foundCrystal) {
        setCurrentCrystal(foundCrystal);
      } else {
        // If crystal not found, redirect to crystals page
        navigate('/crystals');
      }
    }
  }, [crystalName, navigate]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setIsDropdownOpen(false);
  };

  if (!currentCrystal) {
    return (
      <div className="product-details-loading">
        <div className="spinner"></div>
        <p>Loading crystal details...</p>
      </div>
    );
  }

  return (
    <section className="product-details-section">
      <div className="container-xxl py-5">
        <div className="container">
          {/* Back Button */}
          <button 
            className="pd-back-button"
            onClick={() => navigate(-1)}
          >
            <i className="fas fa-arrow-left me-2"></i>
            Back to Crystals
          </button>
          
          {/* Header Section */}
          <div className="row">
            <div className="col-12">
              <div className="h-100 pd-position-relative-z2 text-center mb-5">
                <div className="pd-background-text">{currentCrystal.title}</div>
                
                <div className="position-relative z-2">
                  <p className="text-primary text-uppercase mb-2 pd-subtitle">Crystal Details</p>
                  <div className="pd-title-container">
                    <h1 className="display-6 mb-4 pd-title">{currentCrystal.title}</h1>
                  </div>
                  
                  <div className="col-lg-10 mx-auto">
                    <p className="pd-text">
                      {currentCrystal.subtitle}
                    </p>
                    <p className="pd-text">
                      {currentCrystal.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content Section */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="pd-full-details">
                <div className="position-relative text-center mb-5">
                  <div className="pd-guide-bg-text">Details</div>
                  <h3 className="pd-details-title pd-position-relative-z2">
                    {currentCrystal.title} Properties
                  </h3>
                </div>
                
                {/* Crystal Info Card */}
                <div className="pd-crystal-info-card" style={{ borderLeft: `5px solid ${currentCrystal.color}` }}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="pd-info-item">
                        <i className="fas fa-chakra pd-info-icon"></i>
                        <div>
                          <h6>Primary Chakra</h6>
                          <p>{currentCrystal.chakra}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="pd-info-item">
                        <i className="fas fa-leaf pd-info-icon"></i>
                        <div>
                          <h6>Element</h6>
                          <p>{currentCrystal.element}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="pd-info-item">
                        <i className="fas fa-star pd-info-icon"></i>
                        <div>
                          <h6>Zodiac Signs</h6>
                          <p>{currentCrystal.zodiac}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tabs Navigation - Desktop & Mobile */}
                <div className="pd-tabs-navigation">
                  {/* Desktop View - Horizontal Tabs */}
                  {!isMobile ? (
                    <div className="row justify-content-center pd-tabs-desktop">
                      {tabs.map((tab) => (
                        <div className="col-auto" key={tab.id}>
                          <button
                            className={`pd-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
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
                    <div className="pd-tabs-mobile">
                      <div 
                        className="pd-dropdown-header"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <div className="pd-dropdown-selected">
                          <i className={`${activeTabObj.icon} me-2`}></i>
                          {activeTabObj.label}
                          <i className={`fas fa-chevron-${isDropdownOpen ? 'up' : 'down'} ms-2`}></i>
                        </div>
                      </div>
                      
                      {isDropdownOpen && (
                        <div className="pd-dropdown-options">
                          {tabs.map((tab) => (
                            <div 
                              className={`pd-dropdown-option ${activeTab === tab.id ? 'active' : ''}`}
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
                
                {/* Tab Content */}
                <div className="pd-tab-content">
                  {activeTab === 'metaphysical' && (
                    <div className="pd-benefits-grid">
                      <div className="row">
                        {currentCrystal.metaphysical.map((benefit, index) => (
                          <div className="col-md-6 mb-3" key={index}>
                            <div className="pd-benefit-item">
                              <i className="fas fa-check-circle pd-benefit-icon"></i>
                              <span className="pd-benefit-text">{benefit}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'physical' && (
                    <div className="pd-benefits-grid">
                      <div className="row">
                        {currentCrystal.physical.map((benefit, index) => (
                          <div className="col-md-6 mb-3" key={index}>
                            <div className="pd-benefit-item">
                              <i className="fas fa-heart pd-benefit-icon"></i>
                              <span className="pd-benefit-text">{benefit}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'properties' && (
                    <div className="pd-usage-tips">
                      <h5 className="pd-section-subtitle mb-4">
                        <i className="fas fa-lightbulb me-2"></i>
                        How to Use {currentCrystal.title}
                      </h5>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="pd-tip-item">
                            <i className="fas fa-meditation"></i>
                            <span>Hold during meditation for enhanced connection</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="pd-tip-item">
                            <i className="fas fa-bed"></i>
                            <span>Place under pillow for restful sleep</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="pd-tip-item">
                            <i className="fas fa-briefcase"></i>
                            <span>Keep on work desk for focus and clarity</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="pd-tip-item">
                            <i className="fas fa-hand-holding"></i>
                            <span>Carry in pocket for continuous energy flow</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Care Instructions */}
                <div className="pd-care-instructions ">
                  <h4 className="pd-section-subtitle text-center ">
                    <i className="fas fa-heart fa-lg me-2"></i>
                    Crystal Care Instructions
                  </h4>
                  
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <div className="pd-care-card">
                        <div className="pd-care-icon">
                          <i className="fas fa-water"></i>
                        </div>
                        <h5 className="pd-care-title">Cleanse Regularly</h5>
                        <p className="pd-care-desc">Every 15 days with water or moonlight</p>
                      </div>
                    </div>
                    
                    <div className="col-md-4 mb-4">
                      <div className="pd-care-card">
                        <div className="pd-care-icon">
                          <i className="fas fa-bullseye"></i>
                        </div>
                        <h5 className="pd-care-title">Set Intention</h5>
                        <p className="pd-care-desc">Program with clear purpose</p>
                      </div>
                    </div>
                    
                    <div className="col-md-4 mb-4">
                      <div className="pd-care-card">
                        <div className="pd-care-icon">
                          <i className="fas fa-hand-holding-heart"></i>
                        </div>
                        <h5 className="pd-care-title">Handle With Love</h5>
                        <p className="pd-care-desc">Respect crystal energy</p>
                      </div>
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

export default ProductDetails;