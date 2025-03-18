
import React from 'react';
import { ArrowRight, PiggyBank } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutUsHero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Financial management" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800/90 to-primary-900/80"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Logo */}
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 mx-auto border border-white/20">
            <PiggyBank className="h-8 w-8 text-white" />
          </div>
          
          {/* Badge */}
          <div className="inline-block px-4 py-1 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium animate-fade-in">
            Our Mission
          </div>
          
          {/* Heading with text gradient */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Simplifying <span className="text-secondary-100">Financial Management</span> for Everyone
          </h1>
          
          {/* Subheading with better typography */}
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            We're building intuitive tools that help people understand, manage, and improve their financial lives with less stress and more confidence. Our goal is to make financial freedom accessible to all.
          </p>
          
          {/* CTA buttons with improved design */}
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              className="bg-white text-primary-800 hover:bg-white/90 px-8 py-6 rounded-full"
              size="lg"
            >
              Our Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-full"
              size="lg"
            >
              Meet Our Team
            </Button>
          </div>
          
          {/* Stats section with glass effect */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">10M+</div>
              <div className="text-white/70">Active Users</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">$2.5B</div>
              <div className="text-white/70">Managed Monthly</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/70">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default AboutUsHero;
