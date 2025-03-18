
import React from 'react';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
