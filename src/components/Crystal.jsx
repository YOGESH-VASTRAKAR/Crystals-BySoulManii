import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Crystals.css";

gsap.registerPlugin(ScrollTrigger);

const crystals = [
  { title: "MOSS AGATE" },
  { title: "AMAZONITE" },
  { title: "HEMATITE" },
  { title: "GREEN AVENTURINE" },
  { title: "CARNELIAN" },
  { title: "BLACK TOURMALINE" },
  { title: "LAPIS LAZULI" },
  { title: "SELENITE" },
  { title: "RHODONITE" },
  { title: "LABRADORITE" },
  { title: "HOWLITE" },
  { title: "RAINFOREST JASPER" },
  { title: "MALACHITE" },
  { title: "RED JASPER" },
  { title: "LEPIDOLITE" },
  { title: "SULEIMANI HAKIK" },
  { title: "PYRITE" },
  { title: "CLEAR QUARTZ" },
  { title: "GOLDEN QUARTZ" },
  { title: "SMOKY QUARTZ" },
  { title: "ROSE QUARTZ" },
  { title: "FLUORITE" },
  { title: "CITRINE" },
  { title: "AMETHYST" }
];

const Crystal = () => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const itemRefs = useRef([]);

  // Marquee animation effect
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Calculate total width needed for seamless loop
    const items = marquee.querySelectorAll('.crystals-list-item');
    const totalItems = items.length;
    const originalItemsCount = crystals.length;
    
    // Calculate total width of one set
    let totalWidth = 0;
    if (items.length > 0) {
      const itemWidth = items[0].offsetWidth;
      const gap = 30; // Same as your CSS gap
      totalWidth = (itemWidth + gap) * originalItemsCount;
    }

    // Create the marquee animation
    const animation = gsap.to(marquee, {
      x: -totalWidth, // Move left by total width of one set
      duration: 40, // Adjust speed here (higher = slower)
      ease: "none",
      repeat: -1, // Infinite loop
      // Reset position for seamless loop
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });

    animationRef.current = animation;

    // Pause animation on hover for better UX
    marquee.addEventListener('mouseenter', () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    });

    marquee.addEventListener('mouseleave', () => {
      if (animationRef.current) {
        animationRef.current.play();
      }
    });

    // Original scroll-triggered animations for individual items
    const itemsForAnimation = itemRefs.current.filter(Boolean);
    
    itemsForAnimation.forEach((item, index) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Remove event listeners
      if (marquee) {
        marquee.removeEventListener('mouseenter', () => {});
        marquee.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);

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
            {/* Background faded text for Crystals section */}
            <div className="crystals-background-text">Crystals</div>
            
            <p className="crystals-fs-5 crystals-fw-medium crystals-text-primary">Healing Crystals</p>
            <h1 className="crystals-display-6">24 Powerful Healing Crystals & Stones</h1>
          </div>
          
          <main className="crystals-main">
            {/* Marquee Container */}
            <div className="crystals-marquee-container" ref={containerRef}>
              <ul className="crystals-infoGraphic" ref={marqueeRef}>
                {duplicatedCrystals.map((crystal, index) => {       
                  const possibleImageNames = getImageFileName(crystal.title);
                  
                  return (
                    <li 
                      key={index}
                      ref={(el) => addToRefs(el, index)}
                      className="crystals-list-item"
                      style={{ opacity: 0 }}
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