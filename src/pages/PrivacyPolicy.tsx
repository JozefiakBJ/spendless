
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - SPENDLESS</title>
        <meta 
          name="description" 
          content="SPENDLESS Privacy Policy - Learn how we collect, use, and protect your personal information when you use our budget management application." 
        />
      </Helmet>
      
      <div className="min-h-screen w-full overflow-x-hidden">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <p>
                At SPENDLESS, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our budget management application.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you:
              </p>
              <ul>
                <li>Create an account</li>
                <li>Use our application features</li>
                <li>Import financial data</li>
                <li>Contact our support team</li>
                <li>Respond to surveys or communications</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
                <li>Generate anonymized, aggregate data for internal analysis</li>
              </ul>
              
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
              </p>
              
              <h2>Data Retention</h2>
              <p>
                We will retain your information for as long as your account is active or as needed to provide you services. We will also retain and use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
              
              <h2>Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
              </ul>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@spendless.com.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
