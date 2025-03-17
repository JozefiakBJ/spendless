
import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Cta = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would handle the email submission to your backend
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };
  
  return (
    <section id="pricing" className="py-24 bg-primary-600 text-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left opacity-0" style={{ animationDelay: '200ms' }}>
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Take Control of Your Financial Future
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of users who have transformed their relationship with money using SPENDLESS.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Free 14-day full-featured trial",
                "No credit card required to start",
                "Import unlimited transactions",
                "AI-powered insights and recommendations",
                "Access to all budget templates"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={20} className="mr-3 text-secondary-100" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-white hover:bg-secondary-100 text-primary-700 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-[0.97]">
              Start Your Free Trial
            </button>
          </div>
          
          <div className="animate-fade-in-right opacity-0" style={{ animationDelay: '400ms' }}>
            <div className="bg-white rounded-2xl p-8 text-gray-800">
              <h3 className="text-2xl font-display font-bold mb-6 text-center">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-8 text-center">
                Sign up for our newsletter to receive the latest tips, feature updates, and financial insights.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} className="mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                We respect your privacy and will never share your information.
              </p>
            </div>
            
            <div className="mt-8 bg-primary-700 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4">
                Ready for serious financial planning?
              </h3>
              <p className="text-white/80 mb-6">
                Our premium plans offer advanced features for more complex financial needs.
              </p>
              <button className="bg-secondary hover:bg-secondary-200 text-secondary-foreground px-6 py-3 rounded-full font-medium transition-all duration-300 w-full flex items-center justify-center">
                View Premium Plans <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
