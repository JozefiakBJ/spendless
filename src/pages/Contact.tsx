
import { useI18n } from '@/i18n/I18nContext';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

const Contact = () => {
  const { t } = useI18n();

  return (
    <>
      <Helmet>
        <title>Contact Us - SPENDLESS</title>
        <meta name="description" content="Contact SPENDLESS for customer support, partnership inquiries, or general questions." />
        <link rel="canonical" href="https://spendless.com/contact" />
      </Helmet>
      
      <Navbar isHomePage={false} />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-primary-50">
        <div className="section-container py-20">
          <ContactHeader />
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
