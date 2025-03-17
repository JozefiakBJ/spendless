
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Downloads from '@/components/Downloads';
import Testimonials from '@/components/Testimonials';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Downloads />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
};

export default Index;
