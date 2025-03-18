
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarLogo from './NavbarLogo';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

interface NavbarProps {
  isHomePage?: boolean;
}

const Navbar = ({ isHomePage: propIsHomePage }: NavbarProps = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = propIsHomePage !== undefined ? propIsHomePage : location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll to section
      navigate(`/#${sectionId}`);
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        mobileMenuOpen ? 'py-4 bg-white' : isScrolled 
          ? 'py-2 bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'py-4 bg-transparent'
      }`}
      aria-label="Site header"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavbarLogo />
        
        <NavbarDesktop isHomePage={isHomePage} scrollToSection={scrollToSection} />
        
        <NavbarMobile
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen}
          isHomePage={isHomePage} 
          scrollToSection={scrollToSection} 
        />
      </div>
    </header>
  );
};

export default Navbar;
