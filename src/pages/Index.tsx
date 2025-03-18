
import { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Downloads from '@/components/Downloads';
import PremiumPlans from '@/components/PremiumPlans';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import { I18nProvider } from '@/i18n/I18nContext';
import { CookieConsentProvider } from '@/contexts/CookieConsentContext';
import Faq from "@/pages/Faq";
import ContactForm from "@/components/contact/ContactForm";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'SPENDLESS - Smart Budget Management';
    
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
  }, []);
  
  return (
    <I18nProvider>
      <CookieConsentProvider>
        <div className="min-h-screen w-full overflow-x-hidden">
          <Navbar isHomePage={true} />
          <Hero />
          <Features />
          <PremiumPlans />
          <Faq />
          <ContactForm />
          <Footer />
        </div>
      </CookieConsentProvider>
    </I18nProvider>
  );
};

export default Index;
