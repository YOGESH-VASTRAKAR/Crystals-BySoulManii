import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "./CrystalShowcase.css";

const crystals = [
  { title: "MOSS AGATE", id: "moss_agate" },
  { title: "AMAZONITE", id: "amazonite" },
  { title: "HEMATITE", id: "hematite" },
  { title: "GREEN AVENTURINE", id: "green_aventurine" },
  { title: "CARNELIAN", id: "carnelian" },
  { title: "BLACK TOURMALINE", id: "black_tourmaline" },
  { title: "LAPIS LAZULI", id: "lapis_lazuli" },
  { title: "SELENITE", id: "selenite" },
  { title: "RHODONITE", id: "rhodonite" },
  { title: "LABRADORITE", id: "labradorite" },
  { title: "HOWLITE", id: "howlite" },
  { title: "RAINFOREST JASPER", id: "rainforest_jasper" },
  { title: "MALACHITE", id: "malachite" },
  { title: "RED JASPER", id: "red_jasper" },
  { title: "LEPIDOLITE", id: "lepidolite" },
  { title: "SULEIMANI HAKIK", id: "suleimani_hakik" },
  { title: "PYRITE", id: "pyrite" },
  { title: "CLEAR QUARTZ", id: "clear_quartz" },
  { title: "GOLDEN QUARTZ", id: "golden_quartz" },
  { title: "SMOKY QUARTZ", id: "smoky_quartz" },
  { title: "ROSE QUARTZ", id: "rose_quartz" },
  { title: "FLUORITE", id: "fluorite" },
  { title: "CITRINE", id: "citrine" },
  { title: "AMETHYST", id: "amethyst" }
];

const CrystalShowcase = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [totalSlides, setTotalSlides] = useState(0);
  const containerRef = useRef(null);
  const swiperRef = useRef(null);
  const autoSlideRef = useRef(null);
  
  const AUTO_SLIDE_INTERVAL = 3000; // 3 seconds

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Calculate total slides based on screen size
  useEffect(() => {
    const calculateTotalSlides = () => {
      if (window.innerWidth <= 480) {
        setTotalSlides(crystals.length - 1); // Show 2 cards at a time
      } else if (window.innerWidth <= 767) {
        setTotalSlides(crystals.length - 1);
      } else if (window.innerWidth <= 1024) {
        setTotalSlides(crystals.length - 2); // Show 3 cards at a time
      } else {
        setTotalSlides(crystals.length - 5); // Show 6 cards at a time
      }
    };
    
    calculateTotalSlides();
    window.addEventListener('resize', calculateTotalSlides);
    
    return () => {
      window.removeEventListener('resize', calculateTotalSlides);
    };
  }, []);

  // Auto slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentSlide(prevSlide => {
            const nextSlide = prevSlide + 1;
            return nextSlide > totalSlides ? 0 : nextSlide;
          });
        }
      }, AUTO_SLIDE_INTERVAL);
    };

    if (totalSlides > 0) {
      startAutoSlide();
    }

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isPaused, totalSlides]);

  const getImageFileName = (title) => {
    let cleanTitle = title.replace(/\(.*?\)/g, '').trim();
    cleanTitle = cleanTitle.replace(/\s+/g, ' ');
    
    const format1 = cleanTitle.toUpperCase() + '.png';
    const format2 = cleanTitle + '.png';
    const format3 = cleanTitle.toLowerCase().replace(/\s+/g, '-') + '.png';
    const format4 = cleanTitle.toLowerCase().replace(/\s+/g, '_') + '.png';
    
    return [format1, format2, format3, format4];
  };

  const formatTitle = (title) => {
    return title.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  };

  const handleImageLoad = (crystalId) => {
    setLoadedImages(prev => ({
      ...prev,
      [crystalId]: true
    }));
  };

  const handleImageError = (e, possibleImageNames) => {
    let currentIndex = 0;
    const tryNextImage = () => {
      currentIndex++;
      if (currentIndex < possibleImageNames.length) {
        e.target.src = `/images/${possibleImageNames[currentIndex]}`;
      } else {
        e.target.style.display = 'none';
        const fallbackDiv = document.createElement('div');
        fallbackDiv.className = 'crystal-showcase-fallback-icon';
        fallbackDiv.textContent = '💎';
        e.target.parentElement.appendChild(fallbackDiv);
      }
    };
    setTimeout(tryNextImage, 100);
  };

  // Handle hover events
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Touch events for mobile
  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsPaused(false);
    }, 300);
  };

  // Calculate transform value for swiper
  const getTransformValue = () => {
    if (!swiperRef.current) return 'translateX(0px)';
    
    // Get card width including gap
    const cardElement = swiperRef.current.querySelector('.crystal-showcase-card');
    if (!cardElement) return 'translateX(0px)';
    
    const cardWidth = cardElement.offsetWidth;
    const gap = 30; // Same as CSS gap
    
    const translateX = -currentSlide * (cardWidth + gap);
    return `translateX(${translateX}px)`;
  };

  return (
    <section className="crystal-showcase-section">
      <div 
        className="crystal-showcase-container-xxl py-5"
        ref={containerRef}
      >
        <div className="container">
          <div className="crystal-showcase-section-title position-relative">
            <div className="crystal-showcase-background-text">Crystals</div>
            
            <p className="crystal-showcase-fs-5 crystal-showcase-fw-medium crystal-showcase-text-primary">
              Healing Crystals
            </p>
            <h1 className="crystal-showcase-display-6">
              24 Powerful Healing Crystals & Stones
            </h1>
          </div>
          
          <main 
            className="crystal-showcase-main"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="crystal-showcase-swiper-container">
              <div 
                className="crystal-showcase-swiper"
                ref={swiperRef}
                style={{
                  transform: getTransformValue(),
                  transition: isPaused ? 'transform 0.3s ease' : 'transform 0.5s ease'
                }}
              >
                <div className="crystal-showcase-grid">
                  {crystals.map((crystal, index) => {       
                    const possibleImageNames = getImageFileName(crystal.title);
                    
                    return (
                      <Link 
                        key={crystal.id}
                        to={`/product-details/${encodeURIComponent(crystal.title)}`}
                        className="crystal-showcase-link-wrapper"
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <div 
                          className="crystal-showcase-card"
                          data-crystal={crystal.id}
                        >
                          <div className="crystal-showcase-card-top">
                            <div className="crystal-showcase-card-icon">
                              <img 
                                src={`/${possibleImageNames[0]}`} 
                                alt={crystal.title}
                                className="crystal-showcase-image"
                                onError={(e) => handleImageError(e, possibleImageNames)}
                                onLoad={() => handleImageLoad(crystal.id)}
                                style={{ 
                                  opacity: loadedImages[crystal.id] ? 1 : 0,
                                  transition: 'opacity 0.3s ease'
                                }}
                              />
                            </div>
                            
                            <div className="crystal-showcase-card-glow"></div>
                          </div>
                          
                          <div className="crystal-showcase-card-bottom">
                            <div className="crystal-showcase-card-content">
                              <p className="crystal-showcase-title">
                                {formatTitle(crystal.title)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default CrystalShowcase;