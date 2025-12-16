import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { useState, useEffect } from 'react';
import gsap from 'gsap';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll event listener for background change
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Full page menu animation
    const tl = gsap.timeline({paused: true});
    
    tl.set('.fullpage-menu', {
      display: "block"
    });
    
    tl.from('.menu-bg span', {
      duration: 1,
      x: "100%",
      stagger: 0.1,
      ease: "expo.inOut"
    });
    
    tl.from('.main-menu li a', {
      duration: 1.5,
      y: "100%",
      stagger: 0.2,
      ease: "expo.inOut"
    }, "-=0.5");
    
    tl.from('.social-links li', {
      duration: 1,
      y: "-100%",
      opacity: 0,
      stagger: 0.1,
      ease: "expo.inOut"
    }, "-=0.5");
    
    tl.reversed(true);

    return () => {
      tl.kill();
    };
  }, []);

  const handleToggle = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    setHamburgerActive(newExpanded);
    
    if (newExpanded) {
      // Open menu
      gsap.set('.fullpage-menu', { display: 'block' });
      
      // Animate menu background and links
      gsap.fromTo('.menu-bg span',
        { x: "100%" },
        {
          duration: 1,
          x: "0%",
          stagger: 0.1,
          ease: "expo.inOut"
        }
      );
      
      gsap.fromTo('.main-menu li a',
        { y: "100%" },
        {
          duration: 1.5,
          y: "0%",
          stagger: 0.2,
          ease: "expo.inOut"
        }
      );
      
      gsap.fromTo('.social-links li',
        { y: "-100%", opacity: 0 },
        {
          duration: 1,
          y: "0%",
          opacity: 1,
          stagger: 0.1,
          ease: "expo.inOut"
        }
      );
    } else {
      // Close menu
      gsap.to('.menu-bg span', {
        duration: 0.8,
        x: "100%",
        stagger: 0.1,
        ease: "expo.inOut",
        onComplete: () => {
          gsap.set('.fullpage-menu', { display: 'none' });
        }
      });
      
      gsap.to('.main-menu li a', {
        duration: 0.8,
        y: "100%",
        stagger: 0.1,
        ease: "expo.inOut"
      });
      
      gsap.to('.social-links li', {
        duration: 0.8,
        y: "-100%",
        opacity: 0,
        stagger: 0.1,
        ease: "expo.inOut"
      });
    }
  };

  const handleNavClick = () => {
    // Close menu when clicking a link
    if (expanded) {
      setExpanded(false);
      setHamburgerActive(false);
      
      // Close animations
      gsap.to('.menu-bg span', {
        duration: 0.8,
        x: "100%",
        stagger: 0.1,
        ease: "expo.inOut",
        onComplete: () => {
          gsap.set('.fullpage-menu', { display: 'none' });
        }
      });
      
      gsap.to('.main-menu li a', {
        duration: 0.8,
        y: "100%",
        stagger: 0.1,
        ease: "expo.inOut"
      });
      
      gsap.to('.social-links li', {
        duration: 0.8,
        y: "-100%",
        opacity: 0,
        stagger: 0.1,
        ease: "expo.inOut"
      });
    }
  };

  // Logo paths based on scroll state
  const desktopLogo = isScrolled 
    ? "/crystalbysoulmanii-logo-final-dark.png" 
    : "/crystalbysoulmanii-logo-final-light.png";

  const mobileLogo = isScrolled 
    ? "/crystalbysoulmanii-logo-final-dark.png" 
    : "/crystalbysoulmanii-logo-final-light.png";

  return (
    <>
      {/* Original Header for Desktop */}
      <div className={`container-fluid sticky-top p-0 d-none d-lg-block ${isScrolled ? 'header-scrolled' : ''}`}>
        <Navbar 
          expand="lg" 
          className="navbar-light p-0"
        >
          <Link to="/" className="navbar-brand py-1 px-3 me-0 d-flex align-items-center">
            <img 
              src={desktopLogo} 
              alt="Crystal by Soulmanii" 
              className="brand-logo me-3"
            />
          </Link>
          
          <Navbar.Collapse id="navbarCollapse" className="p-3">
            <div className="navbar-nav mx-auto">
              <Nav.Link as={Link} to="/" className="nav-item nav-link">Home</Nav.Link>
              <Nav.Link as={Link} to="/about-me" className="nav-item nav-link">About Me</Nav.Link>
              <Nav.Link as={Link} to="/crystals" className="nav-item nav-link">Crystals</Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-item nav-link">Services</Nav.Link>
              <Nav.Link as={Link} to="/testimonials" className="nav-item nav-link">Testimonials</Nav.Link>
              <Nav.Link as={Link} to="/contact-us" className="nav-item nav-link">Contact Us</Nav.Link>
            </div>
            
            <div className="d-flex social-icons-container">
              <a className="btn btn-primary btn-sm-square me-3" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-primary btn-sm-square me-3" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-primary btn-sm-square" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>

      {/* Mobile Header with New Design - FIXED */}
      <header className={`mobile-header d-lg-none ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-row">
          <div className="brand-logo">
            <Link to="/" onClick={handleNavClick}>
              <img 
                src={mobileLogo} 
                alt="Crystal by Soulmanii"
                className="mobile-logo"
              />
            </Link>
          </div>
          {/* UPDATED HAMBURGER ICON */}
          <button 
            className={`menu-toggle hamburger-new ${hamburgerActive ? 'active' : ''}`} 
            onClick={handleToggle}
            aria-label="Toggle menu"
          >
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </button>
        </div>
      </header>

      {/* Full Page Mobile Menu */}
      <div className="fullpage-menu d-lg-none">
        <div className="fullpage-menu-inner">
          <div className="menu-bg">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav>
            <ul className="main-menu">
              <li><Link to="/" onClick={handleNavClick}>Home</Link></li>
              <li><Link to="/about-me" onClick={handleNavClick}>About Me</Link></li>
              <li><Link to="/crystals" onClick={handleNavClick}>Crystals</Link></li>
              <li><Link to="/services" onClick={handleNavClick}>Services</Link></li>
              <li><Link to="/testimonials" onClick={handleNavClick}>Testimonials</Link></li>
              <li><Link to="/contact-us" onClick={handleNavClick}>Contact Us</Link></li>
            </ul>
          </nav>

          <div className="header-nav-footer">
            <ul className="social-links">
              <li><a href="#"><i className="fab fa-facebook-f me-2"></i>Facebook</a></li>
              <li><a href="#"><i className="fab fa-instagram me-2"></i>Instagram</a></li>
              <li><a href="#"><i className="fab fa-linkedin-in me-2"></i>LinkedIn</a></li>
              <li>&copy;{new Date().getFullYear()}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;