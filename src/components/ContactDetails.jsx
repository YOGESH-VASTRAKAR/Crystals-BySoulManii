import React from 'react';
import './ContactDetails.css';

const ContactDetails = () => {
  // Contact information
  const contactInfo = {
    businessName: "Crystals by Soul Manii",
    tagline: "CRYSTAL AND REIKI HEALING",
    phone: "(91) 93210-43100",
    email: "manishabalsara@gmail.com",
    instagram: "soul_manii",
    address: "A/503, Radha Madhav, Radha Residency, Siddharth Nagar, Borivali (East), Mumbai - 400066."
  };

  // Google Maps embed URL (Borivali, Mumbai)
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.3585591399365!2d72.860355!3d19.227680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzM5LjYiTiA3MsKwNTEnMzcuMyJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin";

  return (
    <section className="contact-details-section vertical">
      <div className="container-xxl py-4">
        <div className="container">
          {/* Header Section */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="cd-position-relative-z2 text-center">
                <div className="cd-background-text">Contact</div>
                
                <div className="position-relative z-2">
                  <p className="text-primary text-uppercase mb-1 cd-subtitle">Get In Touch</p>
                  <div className="cd-title-container">
                    <h1 className="display-6 mb-2 cd-title">Crystals by Soul Manii</h1>
                  </div>
                  
                  <div className="col-lg-10 mx-auto">
                    <p className="cd-text">
                      Your destination for authentic crystal healing and Reiki energy work. 
                      Connect with us for personalized healing sessions and spiritual guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Cards Section */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="cd-section-title text-center mb-3">
                <h3>Contact Details</h3>
                <p className="cd-text-sm">Reach out to us through any of these channels</p>
              </div>
              
              <div className="row g-3 cd-contact-cards">
                {/* Phone Card */}
                <div className="col-md-6 col-lg-3">
                  <div className="cd-contact-card-item">
                    <div className="cd-card-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <h5 className="cd-card-title">Phone</h5>
                    <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="cd-card-value">
                      {contactInfo.phone}
                    </a>
                    <div className="cd-card-meta">
                      <i className="fas fa-clock me-1"></i>
                      <span>Mon-Sat: 10 AM - 7 PM</span>
                    </div>
                  </div>
                </div>
                
                {/* Email Card */}
                <div className="col-md-6 col-lg-3">
                  <div className="cd-contact-card-item">
                    <div className="cd-card-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <h5 className="cd-card-title">Email</h5>
                    <a href={`mailto:${contactInfo.email}`} className="cd-card-value">
                      {contactInfo.email}
                    </a>
                    <div className="cd-card-meta">
                      <i className="fas fa-reply me-1"></i>
                      <span>Response within 24 hours</span>
                    </div>
                  </div>
                </div>
                
                {/* Instagram Card */}
                <div className="col-md-6 col-lg-3">
                  <div className="cd-contact-card-item">
                    <div className="cd-card-icon">
                      <i className="fab fa-instagram"></i>
                    </div>
                    <h5 className="cd-card-title">Instagram</h5>
                    <a href={`https://instagram.com/${contactInfo.instagram}`} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="cd-card-value">
                      @{contactInfo.instagram}
                    </a>
                    <div className="cd-card-meta">
                      <i className="fas fa-images me-1"></i>
                      <span>Daily updates & tips</span>
                    </div>
                  </div>
                </div>
                
                {/* Address Card */}
                <div className="col-md-6 col-lg-3">
                  <div className="cd-contact-card-item">
                    <div className="cd-card-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h5 className="cd-card-title">Address</h5>
                    <p className="cd-card-value cd-address-value">
                      Borivali (East), Mumbai
                    </p>
                    <div className="cd-card-meta">
                      <i className="fas fa-home me-1"></i>
                      <span>Visit our healing space</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action Buttons */}
              <div className="cd-action-buttons text-center mt-4">
                <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="cd-action-btn cd-action-primary">
                  <i className="fas fa-phone-alt me-2"></i>
                  Call Now
                </a>
                <a href={`https://wa.me/${contactInfo.phone.replace(/\D/g, '')}`} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="cd-action-btn cd-action-secondary">
                  <i className="fab fa-whatsapp me-2"></i>
                  WhatsApp
                </a>
                <a href={`mailto:${contactInfo.email}`} 
                   className="cd-action-btn cd-action-tertiary">
                  <i className="fas fa-envelope me-2"></i>
                  Send Email
                </a>
              </div>
            </div>
          </div>
          
          {/* Map Section - Full Width */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="cd-map-section">
                <div className="cd-map-header text-center mb-3">
                  <h3 className="cd-map-title">
                    <i className="fas fa-map-marked-alt me-2"></i>
                    Our Location
                  </h3>
                  <p className="cd-map-subtitle">
                    Find us at our healing space in Borivali, Mumbai
                  </p>
                </div>
                
                <div className="cd-map-container">
                  {/* Google Maps Embed */}
                  <div className="cd-map-iframe-wrapper">
                    <iframe 
                      title="Crystals by Soul Manii Location"
                      src={googleMapsEmbedUrl}
                      className="cd-google-map"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  
                  {/* Address Details Below Map */}
                  <div className="cd-map-address-details mt-3">
                    <div className="cd-address-full">
                      <h5 className="cd-address-title">
                        <i className="fas fa-home me-2"></i>
                        Complete Address
                      </h5>
                      <p className="cd-address-text">
                        {contactInfo.address}
                      </p>
                    </div>
                    
                    <div className="cd-location-features mt-3">
                      <div className="row g-2">
                        <div className="col-md-3 col-6">
                          <div className="cd-feature-item">
                            <i className="fas fa-clock cd-feature-icon"></i>
                            <span>10 AM - 7 PM</span>
                          </div>
                        </div>
                        <div className="col-md-3 col-6">
                          <div className="cd-feature-item">
                            <i className="fas fa-parking cd-feature-icon"></i>
                            <span>Parking Available</span>
                          </div>
                        </div>
                        <div className="col-md-3 col-6">
                          <div className="cd-feature-item">
                            <i className="fas fa-subway cd-feature-icon"></i>
                            <span>Near Borivali Station</span>
                          </div>
                        </div>
                        <div className="col-md-3 col-6">
                          <div className="cd-feature-item">
                            <i className="fas fa-wheelchair cd-feature-icon"></i>
                            <span>Wheelchair Access</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Directions Button */}
                    <div className="text-center mt-3">
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=19.227680,72.860355" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cd-directions-btn"
                      >
                        <i className="fas fa-directions me-2"></i>
                        Get Directions on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="row">
            <div className="col-12">
              <div className="cd-additional-info">
                <div className="cd-info-box">
                  <i className="fas fa-info-circle me-2"></i>
                  <div>
                    <p className="mb-1"><strong>Important Note:</strong></p>
                    <p className="mb-0">
                      Please call ahead to schedule appointments. Walk-ins are welcome based on availability. 
                      We recommend booking in advance for personalized healing sessions.
                    </p>
                  </div>
                </div>
                
                {/* Our Commitment Section - Replaced Quick Tips */}
                <div className="cd-tips-section mt-4">
                  <h3 className="cd-tips-title text-center mb-4">
                    <i className="fas fa-heart me-2"></i>
                    Our Commitment
                  </h3>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="cd-tip-item">
                        <i className="fas fa-hands-helping cd-tip-icon"></i>
                        <div>
                          <h6>Personalized Healing</h6>
                          <p>Tailored crystal and Reiki sessions for individual needs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cd-tip-item">
                        <i className="fas fa-leaf cd-tip-icon"></i>
                        <div>
                          <h6>Authentic Crystals</h6>
                          <p>Genuine, high-quality crystals for healing and meditation</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cd-tip-item">
                        <i className="fas fa-user-friends cd-tip-icon"></i>
                        <div>
                          <h6>Spiritual Guidance</h6>
                          <p>Supporting your journey to balance and inner peace</p>
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
    </section>
  );
};

export default ContactDetails;