
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PremiumPlans from '@/components/PremiumPlans';
import Footer from '@/components/Footer';
import { I18nProvider } from '@/i18n/I18nContext';
import { CookieConsentProvider } from '@/contexts/CookieConsentContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from '@/i18n/I18nContext';
import { TranslationKey } from '@/i18n/types';

const Index = () => {
  const location = useLocation();
  const { t } = useI18n();
  
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
            <div id="faq" className="section-container py-16">
              <h1 className="font-display text-4xl font-bold mb-8 text-center">{t('faq.title')}</h1>
              
              <div className="max-w-3xl mx-auto mt-12">
                <Accordion type="single" collapsible className="w-full">
                  {[...Array(10)].map((_, index) => {
                    const questionKey = `faq.questions.q${index + 1}.question` as TranslationKey;
                    const answerKey = `faq.questions.q${index + 1}.answer` as TranslationKey;
                    
                    return (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-medium text-left">
                          {t(questionKey)}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          {t(answerKey)}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
              
              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold mb-2">{t('faq.stillHaveQuestions')}</h3>
                <p className="mb-4">{t('faq.supportTeam')}</p>
                <a 
                  href="/contact" 
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                  {t('faq.contactSupport')}
                </a>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </CookieConsentProvider>
    </I18nProvider>
  );
};

export default Index;
