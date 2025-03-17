
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nContext';

const PrivacyPolicy = () => {
  const { t } = useI18n();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="section-container py-16">
          <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-gray-700">
                We collect information you provide directly to us, such as when you create an account, update your profile, use interactive features, or contact us for support. This may include your name, email, password, financial information, and any other information you choose to provide.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700">
                We use the information we collect to provide, maintain, and improve our services, such as to process transactions, send notifications, and respond to your comments and questions.
              </p>
              <p className="text-gray-700 mt-2">
                We may also use the information to develop new products and services, analyze usage patterns, and communicate with you about products, services, offers, and events.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700">
                We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-gray-700">
                We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
              <p className="text-gray-700">
                You may update, correct, or delete information about you at any time by logging into your online account. You may also request that we delete your account and information by contacting us.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
              <p className="text-gray-700">
                We may use cookies and similar technologies to collect information about your browsing activities and to distinguish you from other users of our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Changes to this Policy</h2>
              <p className="text-gray-700">
                We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this privacy policy, please contact us at: privacy@spendless.com
              </p>
            </section>
          </div>
          
          <div className="mt-12 text-gray-500 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
