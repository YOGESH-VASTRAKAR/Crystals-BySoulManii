import React, { useEffect, useRef } from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      
      // Custom dots functionality
      const updatePagination = () => {
        const bullets = document.querySelectorAll('.testimonial-dot');
        bullets.forEach((bullet, index) => {
          bullet.classList.remove('active');
          if (index === swiper.realIndex) {
            bullet.classList.add('active');
          }
        });
      };

      swiper.on('slideChange', updatePagination);
      updatePagination(); // Initial update
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "The crystal healing session was truly transformative. I felt an immediate sense of peace and balance that lasted for days. Highly recommend!",
      name: "Sophia Martinez",
      role: "Wellness Coach"
    },
    {
      id: 2,
      text: "As a skeptic, I was amazed by the Reiki session. The energy work helped alleviate my chronic back pain and improved my sleep quality significantly.",
      name: "James Wilson",
      role: "Software Engineer"
    },
    {
      id: 3,
      text: "The combination of crystal therapy and energy healing has been life-changing. My anxiety levels have dropped, and I feel more centered than ever before.",
      name: "Priya Sharma",
      role: "Marketing Director"
    },
    {
      id: 4,
      text: "Beautiful healing space with authentic practitioners. The chakra balancing session brought clarity to my life decisions and emotional stability.",
      name: "Michael Chen",
      role: "Yoga Instructor"
    },
    {
      id: 5,
      text: "I've tried many healing modalities, but the personalized crystal remedies here are exceptional. The amethyst bracelet has become my daily essential.",
      name: "Olivia Brown",
      role: "Art Therapist"
    }
  ];

  return (
    <section className="testimonial-area">
      <div className="container">
        {/* Added faded background text like AboutUs component */}
        <div className="testimonial-title-container mb-5 position-relative">
          {/* Background faded text - NEW ADDITION */}
          <div className="testimonials-background-text">Testimonials</div>
          
          <p className="text-uppercase mb-2 testimonial-subtitle">Client Experiences</p>
          <div className="testimonial-title-wrapper">
            <h1 className="display-6 testimonial-main-title">What Our Clients Say</h1>
          </div>
        </div>
        
        <div className="testimonial-carousel-container">
          <div className="testimonial-carousel-wrapper">
            <Swiper
              ref={swiperRef}
              slidesPerView={2}
              spaceBetween={50}
              loop={true}
              centeredSlides={false}
              pagination={{
                el: '.testimonial-custom-pagination',
                clickable: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              speed={800}
              modules={[Pagination, Autoplay]}
              className="testimonial-swiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="single-testimonial">
                    <div className="round-1 round"></div>
                    <div className="round-2 round"></div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="client-info">
                      <div className="client-details">
                        <h6 className="client-name">{testimonial.name}</h6>
                        <span className="client-role">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom pagination dots */}
            <div className="testimonial-custom-pagination">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`testimonial-dot ${index === 0 ? 'active' : ''}`}
                  onClick={() => {
                    if (swiperRef.current && swiperRef.current.swiper) {
                      swiperRef.current.swiper.slideToLoop(index);
                    }
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;