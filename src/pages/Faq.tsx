
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/I18nContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const { t } = useI18n();
  
  const faqItems = [
    {
      question: "What is SPENDLESS?",
      answer: "SPENDLESS is a personal finance management app that helps you track expenses, create budgets, and optimize your financial habits. Our goal is to make managing your finances simple and stress-free."
    },
    {
      question: "How much does SPENDLESS cost?",
      answer: "SPENDLESS offers both free and premium plans. The free plan includes basic expense tracking and budgeting features. Our premium plans start at $5.99/month and include advanced features like custom categories, investment tracking, and financial insights."
    },
    {
      question: "Is my financial data secure with SPENDLESS?",
      answer: "Yes, your security is our top priority. We use bank-level encryption to protect your data. We never store your bank credentials, and all connections to financial institutions are secured with 256-bit encryption. Additionally, we perform regular security audits to ensure your data remains safe."
    },
    {
      question: "Can I connect my bank accounts to SPENDLESS?",
      answer: "Yes, SPENDLESS can securely connect to over 10,000 financial institutions worldwide. This allows for automatic import of transactions and balances, making it easier to keep your financial data up to date."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account settings. After cancellation, you'll continue to have access to premium features until the end of your current billing period, after which your account will revert to the free plan."
    },
    {
      question: "Does SPENDLESS work on all devices?",
      answer: "Yes, SPENDLESS is available on iOS, Android, and as a web application. Your data syncs automatically across all your devices, so you can access your financial information anywhere, anytime."
    },
    {
      question: "Can I export my data from SPENDLESS?",
      answer: "Yes, you can export your financial data at any time in various formats including CSV, Excel, and PDF. This makes it easy to use your data for tax purposes or financial planning outside of the app."
    },
    {
      question: "How does SPENDLESS help me save money?",
      answer: "SPENDLESS helps you save money by giving you clear visibility into your spending habits, alerting you about unusual expenses, identifying subscriptions you might not be using, and providing personalized recommendations to optimize your budget based on your financial patterns."
    },
    {
      question: "Is there a limit to how many accounts I can add?",
      answer: "Free users can connect up to 3 financial accounts. Premium users can connect unlimited accounts, including bank accounts, credit cards, loans, investments, and more."
    },
    {
      question: "Do you provide customer support?",
      answer: "Yes, we provide customer support via email and chat for all users. Premium subscribers also get priority support with faster response times."
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="section-container py-16">
          <h1 className="font-display text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
          
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-gray-700 mb-6">Our support team is here to help</p>
            <a href="mailto:support@spendless.com" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
