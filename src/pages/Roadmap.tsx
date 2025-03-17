
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import RoadmapTimeline from '@/components/roadmap/RoadmapTimeline';
import RoadmapHeader from '@/components/roadmap/RoadmapHeader';
import { useI18n } from '@/i18n/I18nContext';

const Roadmap = () => {
  const { t } = useI18n();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>{t('roadmap.title') || 'Our Roadmap'} - SPENDLESS</title>
        <meta name="description" content="Explore the SPENDLESS product roadmap and see what features and improvements we're planning for the future." />
        <link rel="canonical" href="https://spendless.com/roadmap" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <RoadmapHeader />
          <RoadmapTimeline />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Roadmap;
