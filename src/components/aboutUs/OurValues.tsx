
import React from 'react';
import { Building, Users, Award, Briefcase } from 'lucide-react';

const OurValues = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-primary-800 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These core principles guide everything we do at SPENDLESS, from product development to customer support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">User First</h3>
            <p className="text-gray-600">
              We design with users in mind, focusing on simplicity, clarity, and features that solve real problems.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every aspect of our product and service, never settling for "good enough."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Building className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Transparency</h3>
            <p className="text-gray-600">
              We believe in being open about how we operate, how we handle data, and how we make money.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Empowerment</h3>
            <p className="text-gray-600">
              We aim to empower users with knowledge and tools to take control of their financial future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
