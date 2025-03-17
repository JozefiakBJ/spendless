
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
import { TranslationKey } from '@/i18n/types';

const Faq = () => {
  const { t } = useI18n();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="section-container py-16">
          <h1 className="font-display text-4xl font-bold mb-8 text-center">{t('faq.title')}</h1>
          
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="w-full">
              {[...Array(10)].map((_, index) => {
                const questionKey = `faq.questions.q${index + 1}.question` as TranslationKey;
                const answerKey = `faq.questions.q${index + 1}.answer` as TranslationKey;
                
                return (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-medium text-left">
                      {t(questionKey)}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {t(answerKey)}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">{t('faq.stillHaveQuestions')}</h3>
            <p className="text-gray-700 mb-6">{t('faq.supportTeam')}</p>
            <a href="mailto:support@spendless.com" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
              {t('faq.contactSupport')}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
