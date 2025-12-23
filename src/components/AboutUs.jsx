// AboutUs.jsx (updated)
import React, { useRef, useEffect } from 'react';
import './AboutUs.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate, useLocation } from 'react-router-dom';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);
  const navigate = useNavigate();
  const location = useLocation(); // Current location check karne ke liye

  // Check if we're on the /about-me page
  const isAboutMePage = location.pathname === '/about-me';

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  const handleReadMore = () => {
    navigate('/about-me');
  };

  return (
    <div className="about-us-section container-xxl py-5 mt-3" ref={sectionRef}>
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img 
                  ref={addToRefs}
                  className="img-fluid bg-white w-100 mb-3" 
                  src="about-bg1.jpeg" 
                  alt="Reiki Healing"
                />
                <img 
                  ref={addToRefs}
                  className="img-fluid bg-white w-50" 
                  src="about3.jpg" 
                  alt="Crystal Healing"
                />
              </div>
              <div className="col-6">
                <img 
                  ref={addToRefs}
                  className="img-fluid bg-white w-50 mb-3" 
                  src="about4.jpg" 
                  alt="Energy Work"
                />
                <img 
                  ref={addToRefs}
                  className="img-fluid bg-white w-100" 
                  src="about-og.jpg" 
                  alt="Healing Tools"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title position-relative">
              {/* Background faded text */}
              <div className="about-background-text">About</div>
              
              <p className="fw-medium text-primary">My Healing Journey</p>
              <h1 className="display-6">Manisha Balsara: 25+ Years of Energy Healing</h1>
            </div>
            
            <div className="about-content">
              <p className="about-text">
                My healing journey began at 22 under Grand Master Rohini Desai, who introduced me to both Reiki and crystals. My first Amethyst pendant, bought 30 years ago, remains cherished.
              </p>
              
              <p className="about-text">
                After personal challenges in 2021, I returned to energy healing through Taichi and Qigong, rediscovering my passion for holistic wellness.
              </p>
              
              <p className="about-text">
                In 2023, I relearned Reiki under Grand Master Rohini Desai, and in 2024 completed professional Crystal Healing training under expert mentor Hasmukk Chajedd.
              </p>
              
              <p className="about-text">
                Today, I blend Reiki and Crystal Healing to bring balance, healing, and harmony. What began as personal healing has grown into a journey of service and transformation.
              </p>
              
              {/* Read More Button - Only show if NOT on /about-me page */}
              {!isAboutMePage && (
                <div className="about-btn-container">
                  <button 
                    className="btn btn-primary py-3 px-5 about-read-more-btn" 
                    onClick={handleReadMore}
                  >
                    Read More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;