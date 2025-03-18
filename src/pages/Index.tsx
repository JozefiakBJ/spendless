
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PremiumPlans from '@/components/PremiumPlans';
import Faq from "@/pages/Faq";
import Footer from '@/components/Footer';
import { I18nProvider } from '@/i18n/I18nContext';
import { CookieConsentProvider } from '@/contexts/CookieConsentContext';

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Update document title
    document.title = 'SPENDLESS - Smart Budget Management';
    
    // Handle navigation state for scrolling to sections
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Short delay to ensure DOM is fully loaded
    }
    
    // Reveal animations on scroll
    const handleRevealOnScroll = () => {
      const revealElements = document.querySelectorAll('.reveal-animation');
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleRevealOnScroll);
    // Initial check
    handleRevealOnScroll();
    
    return () => {
      window.removeEventListener('scroll', handleRevealOnScroll);
    };
  }, [location]);
  
  return (
    <I18nProvider>
      <CookieConsentProvider>
        <div className="min-h-screen w-full overflow-x-hidden">
          <Navbar isHomePage={true} />
          <main>
            <Hero />
            <Features />
            <PremiumPlans />
            <div id="faq">
              <Faq />
            </div>
          </main>
          <Footer />
        </div>
      </CookieConsentProvider>
    </I18nProvider>
  );
};

export default Index;
