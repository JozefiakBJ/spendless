
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
          <Mail className="h-6 w-6 text-primary-600" />
        </div>
        <h3 className="font-display font-semibold text-lg mb-2">Email Us</h3>
        <p className="text-gray-600 mb-4">For general inquiries and support</p>
        <a href="mailto:hello@spendless.com" className="text-primary-600 font-medium hover:text-primary-700">
          hello@spendless.com
        </a>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
          <Phone className="h-6 w-6 text-primary-600" />
        </div>
        <h3 className="font-display font-semibold text-lg mb-2">Call Us</h3>
        <p className="text-gray-600 mb-4">Monday to Friday, 9AM to 6PM</p>
        <a href="tel:+15551234567" className="text-primary-600 font-medium hover:text-primary-700">
          +1 (555) 123-4567
        </a>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
          <MapPin className="h-6 w-6 text-primary-600" />
        </div>
        <h3 className="font-display font-semibold text-lg mb-2">Visit Us</h3>
        <p className="text-gray-600 mb-4">Our headquarters location</p>
        <address className="not-italic text-primary-600 font-medium">
          123 Finance Street<br />
          San Francisco, CA 94107
        </address>
      </div>
    </div>
  );
};

export default ContactInfo;
