// components/AboutTestimonial.jsx
import React, { useRef, useEffect } from 'react';
import './AboutTestimonial.css'; // अलग CSS file
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutTestimonial = () => {
  const testimonialRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Testimonial section animation
    gsap.fromTo(testimonialRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="about-testimonial-area" ref={testimonialRef}>
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
  );
};

export default AboutTestimonial;