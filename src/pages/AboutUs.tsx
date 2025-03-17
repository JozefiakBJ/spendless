
import React from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import AboutUsHero from '@/components/aboutUs/Hero';
import OurStory from '@/components/aboutUs/OurStory';
import OurValues from '@/components/aboutUs/OurValues';
import TeamSection from '@/components/aboutUs/TeamSection';
import JoinUs from '@/components/aboutUs/JoinUs';

const AboutUs = () => {
  const { t } = useI18n();
  
  return (
    <>
      <Helmet>
        <title>About Us - SPENDLESS</title>
        <meta name="description" content="Learn about the SPENDLESS story, our mission to simplify budget management, and the team behind our smart financial tools." />
        <link rel="canonical" href="https://spendless.com/about" />
      </Helmet>
      
      <Navbar isHomePage={false} />
      
      <main className="min-h-screen">
        <AboutUsHero />
        <OurStory />
        <OurValues />
        <TeamSection />
        <JoinUs />
      </main>
      
      <Footer />
    </>
  );
};

export default AboutUs;
