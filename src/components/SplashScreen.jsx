// components/SplashScreen.jsx - FIXED with null checks
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './SplashScreen.css';

const SplashScreen = ({ 
  splashType, 
  splashText, 
  showLogo, 
  showSignature, 
  onComplete 
}) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    // Clean up previous animation
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }

    // Check if elements exist
    const logoElement = logoRef.current;
    const textElement = textRef.current;
    
    if (!textElement) {
      console.error('Text element not found!');
      onComplete();
      return;
    }

    if (showLogo && !logoElement) {
      console.error('Logo element not found but showLogo is true!');
    }

    const ctx = gsap.context(() => {
      timelineRef.current = gsap.timeline({
        onComplete: onComplete,
        defaults: { ease: "power2.inOut" }
      });

      // Reset initial states
      if (showLogo && logoElement) {
        gsap.set(logoElement, { opacity: 0, y: 0 });
      }
      gsap.set(textElement, { opacity: 0, y: 0 });

      if (showLogo && logoElement) {
        // Logo animation sequence
        timelineRef.current
          .to(logoElement, {
            opacity: 1,
            duration: 0.5
          })
          .to(logoElement, {
            y: -100,
            opacity: 0,
            duration: 0.8
          }, "+=1") // Wait 1 second
          .to(textElement, {
            opacity: 1,
            duration: 0.5
          }, "-=0.3") // Start text animation 0.3s before logo finishes
          .to(textElement, {
            y: -50,
            opacity: 0,
            duration: 0.8
          }, "+=1.5"); // Text stays for 1.5 seconds
      } else {
        // Only text animation
        timelineRef.current
          .to(textElement, {
            opacity: 1,
            duration: 0.5
          })
          .to(textElement, {
            y: -50,
            opacity: 0,
            duration: 0.8
          }, "+=1.5"); // Text stays for 1.5 seconds
      }

    }, containerRef);

    return () => {
      ctx.revert();
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [onComplete, showLogo]);

  // Format text based on splash type
  const formatText = () => {
    if (splashType === 'initial') {
      return (
        <>
          Welcome to <span className="highlight-text"> Crystals </span>
          {showSignature && (
            <span className="signature-text">by Soul Manii</span>
          )}
        </>
      );
    } else if (splashType === 'back') {
      return (
        <>
          <span style={{color: '#333', fontWeight: 400, fontFamily: "'Vendya', serif"}}>
            Back to{' '}
          </span>
          <span className="main-text">
            {splashText.replace('Back to ', '')}
          </span>
        </>
      );
    } else {
      // For refresh and navigate
      return (
        <span className="main-text">{splashText}</span>
      );
    }
  };

  return (
    <div className={`splash-container ${splashType}-splash`} ref={containerRef}>
      {/* Logo - only if showLogo is true */}
      {showLogo && (
        <div className="logo-section" ref={logoRef}>
          <img 
            src="/crystalbysoulmanii-logo-final-dark.png" 
            alt="Crystals by Soulmanii" 
            className="logo-image"
            onError={(e) => {
              console.error('Logo failed to load:', e);
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Text Section - ALWAYS render this */}
      <div className="text-section" ref={textRef}>
        <h1 className="splash-text">
          {formatText()}
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;