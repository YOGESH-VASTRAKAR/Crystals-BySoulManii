import React, { useRef, useEffect, useState } from 'react';
import './ContactForm.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ContactForm = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    healingService: '',
    sessionType: '',
    appointmentDate: '',
    timeSlot: '',
    specificConcerns: '',
    hearAboutUs: '',
    paymentMethod: '',
    consent: false
  });

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

    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your booking request! We will contact you shortly.');
    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      healingService: '',
      sessionType: '',
      appointmentDate: '',
      timeSlot: '',
      specificConcerns: '',
      hearAboutUs: '',
      paymentMethod: '',
      consent: false
    });
  };

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM'
  ];

  const healingServices = [
    'Crystal Consultation',
    'Crystal Reiki Session',
    'Reiki Session'
  ];

  return (
    <div className="contact-form-section container-xxl py-5 mt-3" ref={sectionRef}>
      <div className="container">
        <div className="section-title position-relative text-center mb-5">
          {/* Background faded text */}
          <div className="contact-background-text">Healing</div>
          
          <p className="fs-5 fw-medium text-primary">Book Your Session</p>
          <h1 className="display-6">Healing Session Booking Form</h1>
          <p className="mt-3 mb-0 contact-form-subtitle">
            Fill out the form below to book your healing session. We'll contact you to confirm your appointment.
          </p>
        </div>
        
        <div className="contact-form-wrapper" ref={formRef}>
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="healing-booking-form">
              <div className="row g-4">
                {/* Full Name */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="form-control"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="mobile" className="form-label">
                      Mobile Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      className="form-control"
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Healing Service */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="healingService" className="form-label">
                      Select Healing Service <span className="required">*</span>
                    </label>
                    <select
                      id="healingService"
                      name="healingService"
                      className="form-select"
                      value={formData.healingService}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {healingServices.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Session Type - Only show if Crystal Consultation is selected */}
                {formData.healingService === 'Crystal Consultation' && (
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="sessionType" className="form-label">
                        Preferred Session Type <span className="required">*</span>
                      </label>
                      <select
                        id="sessionType"
                        name="sessionType"
                        className="form-select"
                        value={formData.sessionType}
                        onChange={handleChange}
                        required={formData.healingService === 'Crystal Consultation'}
                      >
                        <option value="">Select session type</option>
                        <option value="In-Person">In-Person</option>
                        <option value="Online">Online</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Appointment Date */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="appointmentDate" className="form-label">
                      Preferred Appointment Date <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      id="appointmentDate"
                      name="appointmentDate"
                      className="form-control"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Time Slot */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="timeSlot" className="form-label">
                      Preferred Time Slot <span className="required">*</span>
                    </label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      className="form-select"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="paymentMethod" className="form-label">
                      Payment Method <span className="required">*</span>
                    </label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      className="form-select"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select payment method</option>
                      <option value="Cash">Cash</option>
                      <option value="UPI">UPI</option>
                    </select>
                  </div>
                </div>

                {/* How did you hear about us? */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="hearAboutUs" className="form-label">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      className="form-select"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="Google">Google Search</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Friend/Referral">Friend/Referral</option>
                      <option value="Previous Client">Previous Client</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Specific Concerns */}
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="specificConcerns" className="form-label">
                      Any Specific Concerns or Intention (Optional)
                    </label>
                    <textarea
                      id="specificConcerns"
                      name="specificConcerns"
                      className="form-control"
                      placeholder="Please share any specific concerns, intentions, or goals for your healing session..."
                      rows="4"
                      value={formData.specificConcerns}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="col-12">
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        className="form-check-input"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="consent" className="form-check-label consent-label">
                        I agree to be contacted regarding my booking and understand that healing results may vary. 
                        <span className="disclaimer-text">
                          Disclaimer: Alternative healthcare is not a substitute for modern medical treatments.
                        </span>
                        <span className="required">*</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-12 text-center mt-4">
                  <button type="submit" className="btn btn-primary btn-lg book-btn">
                    Book My Session
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;