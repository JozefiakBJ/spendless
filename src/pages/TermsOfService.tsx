
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms of Service - SPENDLESS</title>
        <meta 
          name="description" 
          content="SPENDLESS Terms of Service - Understand the terms governing your use of our budget management application." 
        />
      </Helmet>
      
      <div className="min-h-screen w-full overflow-x-hidden">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <p>
                Please read these Terms of Service ("Terms") carefully before using the SPENDLESS application. These Terms constitute a legally binding agreement between you and SPENDLESS.
              </p>
              
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing or using SPENDLESS, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the service.
              </p>
              
              <h2>Description of Service</h2>
              <p>
                SPENDLESS is a budget management application that allows users to track expenses, import financial data from various sources, and receive AI-powered insights to help manage finances more effectively.
              </p>
              
              <h2>User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              
              <h2>User Content</h2>
              <p>
                You retain all rights to the financial data and other content you upload to SPENDLESS. By uploading content, you grant us a license to use, store, and process this content for the purpose of providing our services to you.
              </p>
              
              <h2>Prohibited Uses</h2>
              <p>
                You agree not to:
              </p>
              <ul>
                <li>Use the service for any illegal purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Attempt to gain unauthorized access to any part of the service</li>
                <li>Interfere with or disrupt the service</li>
                <li>Sell, trade, or resell your access to the service</li>
              </ul>
              
              <h2>Termination</h2>
              <p>
                We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              
              <h2>Limitation of Liability</h2>
              <p>
                In no event shall SPENDLESS, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at terms@spendless.com.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
