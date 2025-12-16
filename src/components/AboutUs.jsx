import React, { useRef, useEffect } from 'react';
import './AboutUs.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

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

  return (
    <div className="container-xxl py-5 mt-3" ref={sectionRef}>
      <div className="container">
        <div className="row g-5">
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
                  src="about-bg2.jpeg" 
                  alt="Crystal Healing"
                />
              </div>
              <div className="col-6">
                <img 
                  ref={addToRefs}
                  className="img-fluid bg-white w-50 mb-3" 
                  src="about-bg3.jpeg" 
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
              
              <p className="fs-5 fw-medium text-primary">My Healing Journey</p>
              <h1 className="display-6">Manisha Balsara: 25+ Years of Energy Healing</h1>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-sm-4">
                <img 
                  ref={addToRefs}
                  className="img-fluid bg-white w-100" 
                  src="about-bg5.jpeg" 
                  alt="First Crystal"
                />
              </div>
              <div className="col-sm-8">
                <h5>Journey Began in 1995</h5>
                <p className="mb-0">Started with transformative Reiki under Grand Master Rohini Desai. Fell in love with crystals—my first Amethyst pendant remains cherished.</p>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-sm-8">
                <h5>Reiki & Crystal Practitioner</h5>
                <p className="mb-0">Reconnected with healing through Taichi & Qigong. Certified in Reiki (2023) and Crystal Healing (2024). Now blend both for holistic healing.</p>
              </div>
              <div className="col-sm-4">
                <img 
                  ref={addToRefs}
                  className="img-fluid bg-white w-100" 
                  src="about-bg6.jpeg" 
                  alt="Healing Practice"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Guru/Mentor Testimonial Section - EXACTLY LIKE REFERENCE CODE */}
        <div className="about-testimonial-area">
          <div className="container">
            <div className="about-testimonial-title-container position-relative">
              {/* Background faded text for testimonial */}
              <div className="testimonial-background-text">Testimonial</div>
              
              <p className="text-uppercase mb-2 about-testimonial-subtitle">Guru's Blessings</p>
              <div className="about-testimonial-title-wrapper">
                <h1 className="display-6 about-testimonial-main-title">Words from My Mentor</h1>
              </div>
            </div>
            
            <div className="about-testimonial-container">
              <div className="about-testimonial-carousel-wrapper">
                <div className="about-testimonial-swiper">
                  <div className="single-about-testimonial">
                    <div className="about-round-1 about-round"></div>
                    <div className="about-round-2 about-round"></div>
                    
                    <p className="about-testimonial-text">
                      I had the privilege of teaching Manisha Balsara Reiki and Crystal Healing over 26 years ago. From the very beginning, she demonstrated dedication, intuition, a genuine passion for energy healing. Over the years, she has grown into a skilled and compassionate Reiki and Crystal Healing practitioner, creating a nurturing and restorative space for her clients. Her warmth, sensitivity and gentle energy make every session transformative.
                      <br /><br />
                      I am proud to see her sharing her gifts and guiding others towards balance, peace and wellbeing.
                    </p>
                    
                    <div className="about-client-info">
                      <div className="about-client-details">
                        <h6 className="about-client-name">Rev. Dr. Rohini Desai</h6>
                        <span className="about-client-role">Grand Master & Mentor</span>
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

export default AboutUs;