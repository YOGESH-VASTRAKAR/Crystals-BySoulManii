// App.js - FIXED AND WORKING
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import './index.css';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Crystal from './components/Crystal';
import Service from './components/Services';
import Testimonial from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Banner from './components/Banner';
import CrystalCare from './components/CrystalCare';
import AboutTestimonial from './components/AboutTestimonial';
import ServiceDetails from './components/ServiceDetails';
import ProductDetails from './components/ProductDetails';
import SplashScreen from './components/SplashScreen';
import ContactDetails from './components/ContactDetails';
import AboutMain from './components/AboutMain';
import ProductShowcase from './components/ProductShowcase';
import CrystalShowcase from './components/CrystalShowcase';
import ProductGallery from './components/ProductGallery';

// Page Components
const Home = () => (
  <div>
    <HeroSection/>
    <AboutUs/>
    <Crystal/>
    <Service/>
    <Testimonial/>  
  </div>
);

const AboutMe = () => (
  <div>
    <Banner/>
    <AboutMain/>
    <AboutTestimonial/>
  </div>
);

const Crystals = () => (
  <div>
    <Banner/>
    <CrystalShowcase/>
    <CrystalCare/>
    <ProductGallery/>
  </div>
);

const Services = () => (
  <div>
    <Banner/>
    <ServiceDetails/>
  </div>
);

const Testimonials = () => (
  <div>
    <Banner/>
    <Testimonial/>
  </div>
);

const ContactUs = () => (
  <div>
    <Banner/>
    <ContactForm/>
    <ContactDetails/>
  </div>
);

const ProductDetailsWithBanner = () => (
  <div>
    <Banner title="Crystal Details"/>
    <ProductDetails />
  </div>
);

const NotFound = () => (
  <div className="container mt-5 pt-5">
    <h1 style={{fontFamily: 'var(--font-title)'}}>404 - Page Not Found</h1>
    <p style={{fontFamily: 'var(--font-body)'}}>The page you're looking for doesn't exist.</p>
  </div>
);

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);
  const [splashConfig, setSplashConfig] = useState({
    splashType: 'initial',
    splashText: '',
    showLogo: false,
    showSignature: false
  });
  
  const isInitialLoad = useRef(true);
  const previousPath = useRef(location.pathname);
  const isBackNavigation = useRef(false);
  const wasPageRefreshed = useRef(false);

  // Get page display name
  const getPageDisplayName = (pathname) => {
    if (pathname === '/') return 'Home';
    if (pathname === '/about-me') return 'About Me';
    if (pathname === '/crystals') return 'Crystals';
    if (pathname === '/services') return 'Services';
    if (pathname === '/testimonials') return 'Testimonials';
    if (pathname === '/contact-us') return 'Contact Us';
    if (pathname.startsWith('/product-details')) return 'Crystal Details';
    return 'Home';
  };

  // Handle splash complete
  const handleSplashComplete = () => {
    setShowSplash(false);
    isBackNavigation.current = false;
  };

  // Detect page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('pageWasRefreshed', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    const wasRefreshed = localStorage.getItem('pageWasRefreshed') === 'true';
    if (wasRefreshed) {
      wasPageRefreshed.current = true;
      localStorage.removeItem('pageWasRefreshed');
    }
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Detect back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      isBackNavigation.current = true;
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Main navigation logic
  useEffect(() => {
    const currentPath = location.pathname;
    const displayName = getPageDisplayName(currentPath);
    const pathChanged = currentPath !== previousPath.current;

    console.log('=== Navigation Debug ===');
    console.log('Current Path:', currentPath);
    console.log('Previous Path:', previousPath.current);
    console.log('Initial Load:', isInitialLoad.current);
    console.log('Back Navigation:', isBackNavigation.current);
    console.log('Page Refreshed:', wasPageRefreshed.current);
    console.log('Path Changed:', pathChanged);
    console.log('========================');

    // SCENARIO 1: FIRST LOAD (Homepage only)
    if (isInitialLoad.current && currentPath === '/') {
      console.log('🚀 Scenario 1: First Load (Homepage)');
      setSplashConfig({
        splashType: 'initial',
        splashText: 'Welcome to Crystal Healing',
        showLogo: true,
        showSignature: true
      });
      setShowSplash(true);
      isInitialLoad.current = false;
      previousPath.current = currentPath;
      return;
    }

    // SCENARIO 2: DIRECT URL ACCESS (First load but not homepage)
    if (isInitialLoad.current && currentPath !== '/') {
      console.log('🔗 Scenario 2: Direct URL Access');
      setSplashConfig({
        splashType: 'refresh',
        splashText: displayName,
        showLogo: true,
        showSignature: false
      });
      setShowSplash(true);
      isInitialLoad.current = false;
      previousPath.current = currentPath;
      return;
    }

    // SCENARIO 3: PAGE REFRESH
    if (wasPageRefreshed.current) {
      console.log('🔄 Scenario 3: Page Refresh');
      setSplashConfig({
        splashType: 'refresh',
        splashText: displayName,
        showLogo: true,
        showSignature: false
      });
      setShowSplash(true);
      wasPageRefreshed.current = false;
      previousPath.current = currentPath;
      return;
    }

    // SCENARIO 4: BACK NAVIGATION
    if (isBackNavigation.current && pathChanged) {
      console.log('🔙 Scenario 4: Back Navigation');
      setSplashConfig({
        splashType: 'back',
        splashText: `Back to ${displayName}`,
        showLogo: false,
        showSignature: false
      });
      setShowSplash(true);
      previousPath.current = currentPath;
      return;
    }

    // SCENARIO 5: REGULAR NAVIGATION (Link click)
    if (pathChanged && !isBackNavigation.current) {
      console.log('👉 Scenario 5: Regular Navigation');
      setSplashConfig({
        splashType: 'navigate',
        splashText: displayName,
        showLogo: false,
        showSignature: false
      });
      setShowSplash(true);
      previousPath.current = currentPath;
    }
  }, [location]);

  return (
    <div className="App">
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen 
          splashType={splashConfig.splashType}
          splashText={splashConfig.splashText}
          showLogo={splashConfig.showLogo}
          showSignature={splashConfig.showSignature}
          onComplete={handleSplashComplete}
        />
      )}
      
      {/* Main Website */}
      {!showSplash && (
        <>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/crystals" element={<Crystals />} />
              <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/product-details/:crystalName" element={<ProductDetailsWithBanner />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer/>
        </>
      )}
    </div>
  );
}

// App Wrapper
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;