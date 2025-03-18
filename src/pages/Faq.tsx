
import React, { useState } from 'react';
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
import ContactForm from '@/components/contact/ContactForm';
import { Button } from '@/components/ui/button';

const Faq = () => {
  const { t } = useI18n();
  const [showContactForm, setShowContactForm] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
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
        </div>
      </div>
    </div>
  );
};

export default Faq;
