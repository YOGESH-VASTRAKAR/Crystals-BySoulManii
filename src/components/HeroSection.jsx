import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, Navigation } from 'swiper/modules'; // Removed Pagination
import 'swiper/css';
// Removed 'swiper/css/pagination' import
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';

const HeroSection = () => {
  const swiperRef = useRef(null);

  const slidesData = [
    {
      id: 1,
      bgImage: '/hero1.jpeg',
      overlayClass: 'overlay-dark',
      subtitle: '© Holistic Wellness Center',
      title: ['Crystal Healing', 'Therapy'],
      link: '/services/crystal-healing',
      hasVideo: false,
      description: 'Experience the transformative power of crystals for physical and emotional healing'
    },
    {
      id: 2,
      bgImage: '/hero2.jpeg',
      overlayClass: 'overlay-dark',
      subtitle: '© Energy Healing Masters',
      title: ['Reiki Healing', 'Energy Balance'],
      link: '/services/reiki-healing',
      hasVideo: false,
      description: 'Channel universal life force energy for deep relaxation and healing'
    },
    {
      id: 3,
      bgImage: '/hero3.jpeg',
      overlayClass: 'overlay-dark',
      subtitle: '© Certified Practitioners',
      title: ['Chakra Balancing', 'With Crystals'],
      link: '/services/chakra-balancing',
      hasVideo: false,
      description: 'Align your seven energy centers using specific healing crystals'
    },
    {
      id: 4,
      bgImage: '/hero4.jpeg',
      overlayClass: 'overlay-dark',
      subtitle: '© Meditation & Wellness',
      title: ['Crystal Grid', 'Manifestation'],
      link: '/services/crystal-grids',
      hasVideo: false,
      description: 'Amplify your intentions with sacred geometric crystal arrangements'
    },
    {
      id: 5,
      bgImage: '/hero5.jpeg',
      overlayClass: 'overlay-dark',
      subtitle: '© Professional Healing',
      title: ['Distance Reiki', 'Sessions'],
      link: '/services/distance-reiki',
      hasVideo: false,
      description: 'Receive healing energy from anywhere in the world'
    },
    {
      id: 6,
      bgImage: '/hero6.jpeg',
      overlayClass: 'overlay-dark',
      subtitle: '© Holistic Approach',
      title: ['Crystal & Reiki', 'Combination Therapy'],
      link: '/services/combination-therapy',
      hasVideo: false,
      description: 'The powerful synergy of crystal energy with Reiki healing'
    },
    {
      id: 7,
      bgImage: '/hero6.jpeg',
      overlayClass: 'overlay-dark',
      subtitle: '© Transformative Healing',
      title: ['Healing Journey', 'Begins Here'],
      link: '/book-now',
      hasVideo: true,
      videoSrc: '/v1.mp4',
      description: 'Start your journey to holistic wellness and inner peace'
    }
  ];

  useEffect(() => {
    const updateParallax = () => {
      if (swiperRef.current) {
        const swiper = swiperRef.current.swiper;
        const slides = swiper.slides;
        
        slides.forEach((slide) => {
          const slideBg = slide.querySelector('.slide-bg');
          if (slideBg) {
            slideBg.setAttribute('data-swiper-parallax', 0.75 * swiper.width);
          }
        });
      }
    };

    updateParallax();
    window.addEventListener('resize', updateParallax);
    
    return () => {
      window.removeEventListener('resize', updateParallax);
    };
  }, []);

  // REMOVED renderBullet function completely

  return (
    <section className="creative-showcase--slider">
      <div className="banner-horizental">
        <Swiper
          ref={swiperRef}
          speed={1500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          parallax={true}
          loop={true}
          // REMOVED pagination configuration completely
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          modules={[Autoplay, Parallax, Navigation]} // Removed Pagination from modules
          className="swiper-container-h"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div 
                className={`slide-bg ${slide.overlayClass}`}
                style={{ backgroundImage: `url(${slide.bgImage})` }}
                data-swiper-parallax="1152"
              >
                <div className="slide-container">
                  <div className="slide-row">
                    <div className="slider-content">
                      <h6 
                        className="slide-subtitle"
                        data-swiper-parallax="-1000"
                      >
                        {slide.subtitle}
                      </h6>
                      <h1 className="slide-heading">
                        <a href={slide.link}>
                          {slide.title.map((line, index) => (
                            <span 
                              key={index}
                              data-swiper-parallax={index === 0 ? "-2000" : "-3000"}
                            >
                              {line}
                              {index < slide.title.length - 1 && <br />}
                            </span>
                          ))}
                        </a>
                      </h1>
                      <p 
                        className="slide-description"
                        data-swiper-parallax="-1500"
                      >
                        {slide.description}
                      </p>
                      <div 
                        className="slide-cta"
                        data-swiper-parallax="-1800"
                      >
                        <a href={slide.link} className="cta-button">
                          Explore Service <i className="fas fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {slide.hasVideo && (
                  <div className="video-container">
                    <video autoPlay loop muted playsInline>
                      <source src={slide.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-wrapper creative-button--wrapper">
            <div className="swiper-button-prev-custom" tabIndex="0" role="button" aria-label="Previous slide">
              <div><i className="fas fa-chevron-left"></i></div>
              <div>
                <span>Previous Healing</span>
              </div>
            </div>
            <div className="swiper-button-next-custom" tabIndex="0" role="button" aria-label="Next slide">
              <div>
                <span>Next Healing</span>
              </div>
              <div><i className="fas fa-chevron-right"></i></div>
            </div>
          </div>

          {/* REMOVED swiper-pagination div completely */}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;