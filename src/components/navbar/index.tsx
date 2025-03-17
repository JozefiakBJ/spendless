
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useLocation } from 'react-router-dom';
import NavbarLogo from './NavbarLogo';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    if (!isHomePage) {
      // Navigate to home page with hash
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled 
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavbarLogo />
        <NavbarDesktop isHomePage={isHomePage} scrollToSection={scrollToSection} />
        <NavbarMobile 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
          isHomePage={isHomePage}
          scrollToSection={scrollToSection} 
        />
      </div>
    </nav>
  );
};

export default Navbar;
