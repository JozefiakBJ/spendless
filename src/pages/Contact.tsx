
import { useState } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - SPENDLESS</title>
        <meta name="description" content="Contact SPENDLESS for customer support, partnership inquiries, or general questions." />
        <link rel="canonical" href="https://spendless.com/contact" />
      </Helmet>
      
      <Navbar isHomePage={false} />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-primary-50">
        <div className="section-container py-20">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-800 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about SPENDLESS? Our team is here to help. Reach out through any of the channels below.
            </p>
          </div>
          
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
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h2 className="font-display text-2xl font-semibold text-primary-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full button-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
              
              <div className="bg-primary-600 p-8 text-white flex flex-col justify-center">
                <h3 className="font-display text-2xl font-semibold mb-4">We'd love to hear from you</h3>
                <p className="mb-6">
                  Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-primary-100">hello@spendless.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-primary-100">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Office</h4>
                      <p className="text-primary-100">
                        123 Finance Street<br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
