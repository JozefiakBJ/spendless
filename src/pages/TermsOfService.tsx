
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nContext';

const TermsOfService = () => {
  const { t } = useI18n();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="section-container py-16">
          <h1 className="font-display text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing or using SPENDLESS services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access or use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-gray-700">
                SPENDLESS provides a personal finance management platform designed to help users track expenses, create budgets, and optimize their financial habits. Services may be modified, updated, or discontinued at our discretion.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p className="text-gray-700">
                When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your account credentials and for all activities that occur under your account.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. User Data</h2>
              <p className="text-gray-700">
                Our Privacy Policy explains how we collect, use, and protect your personal information. By using SPENDLESS, you consent to our data practices as described in our Privacy Policy.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Prohibited Activities</h2>
              <p className="text-gray-700">
                You agree not to misuse our services. Examples of misuse include violating any applicable laws, impersonating another person, or attempting to gain unauthorized access to any part of the service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700">
                The service and its original content, features, and functionality are owned by SPENDLESS and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
              <p className="text-gray-700">
                We may terminate or suspend your account and access to the service immediately, without prior notice, for conduct that we determine violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700">
                SPENDLESS shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. We will provide notice of significant changes by updating the date at the top of these terms and possibly by other means.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms, please contact us at support@spendless.com.
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

export default TermsOfService;
