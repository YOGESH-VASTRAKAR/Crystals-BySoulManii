import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const Home = () => (
  <div>
    <HeroSection/>
    <AboutUs/>
    <Crystal/>
    <Service/>
    <Testimonial/>
    <ContactForm/>    
  </div>
);

const AboutMe = () => (
  <div >
    <Banner/>
    <AboutUs/>
  </div>
);

const Crystals = () => (
  <div >
    <Banner/>
    <Crystal/>
  </div>
);

const Services = () => (
  <div >
    <Banner/>
    <Service/>
  </div>
);

const Testimonials = () => (
  <div >
    <Banner/>
    <Testimonial/>
  </div>
);

const ContactUs = () => (
  <div >
    <Banner/>
    <ContactForm/>
  </div>
);

// For 404 page
const NotFound = () => (
  <div className="container mt-5 pt-5">
    <h1 style={{fontFamily: 'var(--font-title)'}}>404 - Page Not Found</h1>
    <p style={{fontFamily: 'var(--font-body)'}}>The page you're looking for doesn't exist.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/crystals" element={<Crystals />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact-us" element={<ContactUs />} />
            
           
            {/* 404 catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;