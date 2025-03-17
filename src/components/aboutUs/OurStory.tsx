
import React from 'react';

const OurStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              SPENDLESS was founded in 2020 with a simple mission: to make financial management accessible to everyone, regardless of their financial literacy level or background.
            </p>
            <p className="text-gray-600 mb-4">
              Our founder, Emma Wilson, experienced firsthand the challenges of managing personal finances while juggling multiple accounts, investments, and goals. Existing tools were either too complex or too simplistic.
            </p>
            <p className="text-gray-600">
              What started as a personal project quickly grew into a platform trusted by thousands of users worldwide. Today, SPENDLESS continues to evolve based on user feedback, with a focus on simplicity, automation, and actionable insights.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="SPENDLESS team collaborating"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
