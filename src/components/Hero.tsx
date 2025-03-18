
import { ArrowDown, Apple, Monitor, LaptopIcon, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    // Add a small delay to create a staggered loading effect
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative bg-hero-pattern">
      <div 
        className={`section-container flex flex-col items-center text-center transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="overflow-visible w-24 h-24 mb-6 flex justify-center items-center">
          <img 
            src="/lovable-uploads/4c207960-91fa-490e-9f6d-43f129b17017.png" 
            alt="SPENDLESS Logo" 
            className="w-20 h-20 object-contain animate-float" 
          />
        </div>
        
        <span className="inline-block px-4 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.tagline')}
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold max-w-3xl leading-tight md:leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {t('hero.title')}
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {t('hero.subtitle')}
        </p>
        
        {/* Download app section */}
        <div className="mt-8 flex flex-col gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>

          <div className="flex flex-wrap gap-3 justify-center">
            {/* Standard App Store button */}
            <a href="#" className="transition-transform hover:scale-105">
              <div className="bg-black text-white rounded-lg flex items-center justify-center px-4 py-2">
                <img src="/Apple.svg" alt="Apple Logo" className="h-7 w-7 mr-2" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-lg font-semibold leading-tight">App Store</span>
                </div>
              </div>
            </a>
            
            {/* Standard Google Play button */}
            <a href="#" className="transition-transform hover:scale-105">
              <div className="bg-black text-white rounded-lg flex items-center justify-center px-4 py-2">
                <img src="/Playstore.svg" alt="Apple Logo" className="h-7 w-7 mr-2" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-lg font-semibold leading-tight">Google Play</span>
                </div>
              </div>
            </a>

            {/* Desktop Download with Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-black text-white rounded-lg flex items-center justify-center px-4 py-2 transition-transform hover:scale-105">
                  <img src="/Download.svg" alt="Download Logo" className="h-7 w-7 mr-2" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">GET FOR FREE</span>
                    <span className="text-lg font-semibold leading-tight">DOWNLOAD</span>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl">Download for Desktop</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <h3 className="font-medium mb-2">Choose your platform:</h3>
                  
                  {/* macOS option */}
                  <Button variant="outline" className="w-full justify-start">
                    <Apple className="mr-2 h-5 w-5" />
                    <span>macOS</span>
                  </Button>
                  
                  {/* Windows option */}
                  <Button variant="outline" className="w-full justify-start">
                    <Monitor className="mr-2 h-5 w-5" />
                    <span>Windows</span>
                  </Button>
                  
                  {/* Linux option */}
                  <Button variant="outline" className="w-full justify-start">
                    <LaptopIcon className="mr-2 h-5 w-5" />
                    <span>Linux</span>
                  </Button>
                </div>
                <div className="flex flex-col mt-4 space-y-2 text-sm text-muted-foreground">
                  <p>Not sure which version to download?</p>
                  <p>Our desktop apps allow you to access all features offline and sync when you're back online.</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="mt-16 relative animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary-50 to-secondary-50 rounded-2xl blur-lg opacity-50"></div>
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" 
              alt="SPENDLESS Dashboard" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <p className="text-white text-lg font-medium">{t('hero.dashboardCaption')}</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('features')}
          className="mt-16 flex flex-col items-center group hover:scale-105 transition-transform duration-300 animate-fade-in" 
          style={{ animationDelay: '1.2s' }}
        >
          <span className="text-gray-500 mb-2 group-hover:text-primary-600 transition-colors">{t('hero.exploreFeatures')}</span>
          <ArrowDown 
            className="text-gray-400 group-hover:text-primary-600 transition-colors animate-pulse-soft" 
            size={24} 
          />
        </button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
};

export default Hero;
