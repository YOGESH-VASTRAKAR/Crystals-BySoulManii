import React, { useRef, useEffect, useState, useCallback } from "react";
import { Link, useLocation } from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Crystals.css";

gsap.registerPlugin(ScrollTrigger);

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

const Crystal = () => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const itemRefs = useRef([]);
  const scrollTriggersRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  // Check if mobile with debouncing
  useEffect(() => {
    let resizeTimer;
    
    const checkMobile = () => {
      const newWidth = window.innerWidth;
      const newIsMobile = newWidth <= 767;
      
      setWindowWidth(newWidth);
      
      // Only update isMobile state if it actually changed
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
      }
    };
    
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 250);
    };
    
    checkMobile();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [isMobile]);

  // Reset on route change
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      
      scrollTriggersRef.current.forEach(trigger => {
        if (trigger && trigger.kill) {
          trigger.kill();
        }
      });
      scrollTriggersRef.current = [];
      
      gsap.killTweensOf(marqueeRef.current);
    };
  }, [location.pathname]);

  // Calculate marquee speed based on screen width
  const getMarqueeDuration = useCallback(() => {
    if (windowWidth <= 480) return 35; // Very small mobile
    if (windowWidth <= 767) return 30; // Mobile
    return 40; // Desktop
  }, [windowWidth]);

  // Calculate marquee width
  const calculateMarqueeWidth = useCallback(() => {
    if (!marqueeRef.current) return 0;
    
    const items = marqueeRef.current.querySelectorAll('.crystals-list-item');
    if (items.length === 0) return 0;
    
    const itemWidth = items[0].offsetWidth;
    const gap = isMobile ? 15 : 30;
    const originalItemsCount = crystals.length;
    
    return (itemWidth + gap) * originalItemsCount;
  }, [isMobile]);

  // Marquee animation with stable speed
  useEffect(() => {
    // Cleanup previous animations first
    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current = null;
    }
    
    // Clear previous scroll triggers
    scrollTriggersRef.current.forEach(trigger => {
      if (trigger && trigger.kill) {
        trigger.kill();
      }
    });
    scrollTriggersRef.current = [];
    
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Wait for DOM to fully render
    const initAnimation = () => {
      const totalWidth = calculateMarqueeWidth();
      if (totalWidth <= 0) return;

      const duration = getMarqueeDuration();
      
      // Create fresh animation
      const animation = gsap.to(marquee, {
        x: -totalWidth,
        duration: duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => {
            const parsedX = parseFloat(x);
            // Handle edge case for very small values
            if (isNaN(parsedX) || !isFinite(parsedX)) return 0;
            return parsedX % totalWidth;
          })
        },
        onRepeat: () => {
          // Reset to prevent cumulative errors
          if (Math.abs(parseFloat(gsap.getProperty(marquee, 'x'))) > totalWidth * 2) {
            gsap.set(marquee, { x: 0 });
          }
        }
      });

      animationRef.current = animation;

      // Pause animation on hover/touch
      const handleMouseEnter = () => {
        if (animationRef.current) {
          animationRef.current.pause();
          marquee.classList.add('paused');
        }
      };

      const handleMouseLeave = () => {
        if (animationRef.current) {
          animationRef.current.play();
          marquee.classList.remove('paused');
        }
      };

      const handleTouchStart = () => {
        if (animationRef.current) {
          animationRef.current.pause();
          marquee.classList.add('paused');
        }
      };

      const handleTouchEnd = () => {
        if (animationRef.current) {
          // Shorter delay for mobile
          setTimeout(() => {
            if (animationRef.current) {
              animationRef.current.play();
              marquee.classList.remove('paused');
            }
          }, 300);
        }
      };

      marquee.addEventListener('mouseenter', handleMouseEnter);
      marquee.addEventListener('mouseleave', handleMouseLeave);
      marquee.addEventListener('touchstart', handleTouchStart);
      marquee.addEventListener('touchend', handleTouchEnd);

      // Add touch events to individual cards
      const cardElements = marquee.querySelectorAll('.mobile-crystal-card, .desktop-crystal-card');
      cardElements.forEach(card => {
        card.addEventListener('touchstart', handleTouchStart);
        card.addEventListener('touchend', handleTouchEnd);
      });

      // Create scroll-triggered item animations
      const itemsForAnimation = itemRefs.current.filter(Boolean);
      
      itemsForAnimation.forEach((item, index) => {
        if (!item) return;
        
        const scrollTrigger = ScrollTrigger.create({
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            gsap.fromTo(item,
              {
                opacity: 0,
                y: isMobile ? 20 : 50,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power2.out"
              }
            );
          }
        });
        
        scrollTriggersRef.current.push(scrollTrigger);
      });

      return {
        animation,
        marquee,
        handleMouseEnter,
        handleMouseLeave,
        handleTouchStart,
        handleTouchEnd
      };
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const cleanupHandlers = initAnimation();
      
      return () => {
        clearTimeout(timeoutId);
        
        if (animationRef.current) {
          animationRef.current.kill();
          animationRef.current = null;
        }
        
        scrollTriggersRef.current.forEach(trigger => {
          if (trigger && trigger.kill) {
            trigger.kill();
          }
        });
        scrollTriggersRef.current = [];
        
        if (cleanupHandlers && cleanupHandlers.marquee) {
          const { marquee, handleMouseEnter, handleMouseLeave, handleTouchStart, handleTouchEnd } = cleanupHandlers;
          
          marquee.removeEventListener('mouseenter', handleMouseEnter);
          marquee.removeEventListener('mouseleave', handleMouseLeave);
          marquee.removeEventListener('touchstart', handleTouchStart);
          marquee.removeEventListener('touchend', handleTouchEnd);
          
          // Remove card event listeners
          const cardElements = marquee.querySelectorAll('.mobile-crystal-card, .desktop-crystal-card');
          cardElements.forEach(card => {
            card.removeEventListener('touchstart', handleTouchStart);
            card.removeEventListener('touchend', handleTouchEnd);
          });
        }
        
        gsap.killTweensOf(marquee);
      };
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMobile, windowWidth, calculateMarqueeWidth, getMarqueeDuration]);

  // Handle window resize to update animation
  useEffect(() => {
    if (!animationRef.current) return;
    
    let resizeTimeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (animationRef.current) {
          // Restart animation with new settings
          animationRef.current.kill();
          
          const marquee = marqueeRef.current;
          if (!marquee) return;
          
          const totalWidth = calculateMarqueeWidth();
          const duration = getMarqueeDuration();
          
          if (totalWidth > 0) {
            animationRef.current = gsap.to(marquee, {
              x: -totalWidth,
              duration: duration,
              ease: "none",
              repeat: -1,
              modifiers: {
                x: gsap.utils.unitize(x => {
                  const parsedX = parseFloat(x);
                  return isNaN(parsedX) ? 0 : parsedX % totalWidth;
                })
              }
            });
          }
        }
      }, 300);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [calculateMarqueeWidth, getMarqueeDuration]);

  const addToRefs = (el, index) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current[index] = el;
    }
  };

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

  // Create duplicated array for seamless marquee
  const duplicatedCrystals = [...crystals, ...crystals, ...crystals];

  return (
    <section className="crystals-section">
      <div className="crystals-container-xxl py-5">
        <div className="container">
          <div className="crystals-section-title position-relative">
            <div className="crystals-background-text">Crystals</div>
            
            <p className="crystals-fs-5 crystals-fw-medium crystals-text-primary">Healing Crystals</p>
            <h1 className="crystals-display-6">24 Powerful Healing Crystals & Stones</h1>
          </div>
          
          <main className="crystals-main">
            <div className="crystals-marquee-container" ref={containerRef}>
              <ul className="crystals-infoGraphic" ref={marqueeRef}>
                {duplicatedCrystals.map((crystal, index) => {       
                  const possibleImageNames = getImageFileName(crystal.title);
                  
                  return (
                    <Link 
                      key={index}
                      to={`/product-details/${encodeURIComponent(crystal.title)}`}
                      className="crystals-link-wrapper"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      {isMobile ? (
                        <li 
                          ref={(el) => addToRefs(el, index)}
                          className="crystals-list-item mobile-crystal-card"
                          style={{ opacity: 0 }}
                          data-crystal={crystal.id}
                        >
                          <div className="mobile-card-top">
                            <div className="mobile-card-icon">
                              <img 
                                src={`/${possibleImageNames[0]}`} 
                                alt={crystal.title}
                                className="mobile-crystal-image"
                                onError={(e) => {
                                  let currentIndex = 0;
                                  const tryNextImage = () => {
                                    currentIndex++;
                                    if (currentIndex < possibleImageNames.length) {
                                      e.target.src = `/images/${possibleImageNames[currentIndex]}`;
                                    } else {
                                      e.target.style.display = 'none';
                                      const fallbackDiv = document.createElement('div');
                                      fallbackDiv.className = 'mobile-fallback-icon';
                                      fallbackDiv.textContent = '💎';
                                      e.target.parentElement.appendChild(fallbackDiv);
                                    }
                                  };
                                  setTimeout(tryNextImage, 100);
                                }}
                                onLoad={(e) => {
                                  const fallback = e.target.parentElement.querySelector('.mobile-fallback-icon');
                                  if (fallback) fallback.remove();
                                }}
                              />
                            </div>
                            
                            <div className="mobile-card-glow"></div>
                          </div>
                          
                          <div className="mobile-card-bottom">
                            <div className="mobile-card-content">
                              <p className="mobile-crystal-title">
                                {formatTitle(crystal.title)}
                              </p>
                            </div>
                          </div>
                        </li>
                      ) : (
                        <li 
                          ref={(el) => addToRefs(el, index)}
                          className="crystals-list-item desktop-crystal-card"
                          style={{ opacity: 0 }}
                          data-crystal={crystal.id}
                        >
                          <div className="crystals-numberWrap">
                            <div className="crystals-icon crystals-iconCodepen">
                              <img 
                                src={`/${possibleImageNames[0]}`} 
                                alt={crystal.title}
                                className="crystals-crystal-image"
                                onError={(e) => {
                                  let currentIndex = 0;
                                  const tryNextImage = () => {
                                    currentIndex++;
                                    if (currentIndex < possibleImageNames.length) {
                                      e.target.src = `/images/${possibleImageNames[currentIndex]}`;
                                    } else {
                                      e.target.style.display = 'none';
                                      const fallbackDiv = document.createElement('div');
                                      fallbackDiv.className = 'crystals-fallback-icon';
                                      fallbackDiv.textContent = '💎';
                                      e.target.parentElement.appendChild(fallbackDiv);
                                    }
                                  };
                                  setTimeout(tryNextImage, 100);
                                }}
                                onLoad={(e) => {
                                  const fallback = e.target.parentElement.querySelector('.crystals-fallback-icon');
                                  if (fallback) fallback.remove();
                                }}
                              />
                            </div>
                            <div className="crystals-coverWrap">
                              <div className="crystals-numberCover"></div>
                            </div>
                          </div>
                          <div className="crystals-content">
                            <p className="crystals-paragraph">{formatTitle(crystal.title)}</p>
                          </div>
                        </li>
                      )}
                    </Link>
                  );
                })}  
              </ul>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Crystal;