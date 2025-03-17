
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Downloads from '@/components/Downloads';
import Cta from '@/components/Cta';
import PremiumPlans from '@/components/PremiumPlans';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar';

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Downloads />
      <Cta />
      <PremiumPlans />
      <Footer />
    </main>
  );
};

export default Index;
